import { chromium, Page } from "playwright";
import * as fs from "fs/promises";
import * as path from "path";

const BASE_URL = "https://mychef.id";

const PAGES = [
  "/experiences",
  "/experiences/private-cocktail-party",
  "/experiences/sushi-masterclass",
  "/experiences/private-cooking-class",
  "/experiences/kids-birthday-chef-party",
  "/experiences/champagne-oyster-experience",
  "/experiences/romantic-proposal-dinner",
  "/complete-villa-experience",
  "/villa-event-packages",
  "/vip-transport-bali",
];

interface ImageRecord {
  pageUrl: string;
  section: string;
  component: string;
  imageUrl: string;
  imagePath: string;
  alt: string;
  width: number | null;
  height: number | null;
  displayWidth: number | null;
  displayHeight: number | null;
  aspectRatio: string | null;
  filename: string;
  isBackground: boolean;
  parentHeadings: string[];
  surroundingText: string;
}

function resolveUrl(src: string): string {
  if (!src) return "";
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  if (src.startsWith("//")) return `https:${src}`;
  if (src.startsWith("/")) return `${BASE_URL}${src}`;
  return `${BASE_URL}/${src}`;
}

function getFilename(url: string): string {
  try {
    const u = new URL(url);
    const name = path.basename(u.pathname);
    return name || "data-uri";
  } catch {
    return url;
  }
}

function extractAttribute(tag: string, name: string): string {
  const regex = new RegExp(`${name}=["']([^"']+)["']`, "i");
  const match = tag.match(regex);
  return match ? match[1] : "";
}

function extractNumberAttribute(tag: string, name: string): number | null {
  const val = extractAttribute(tag, name);
  const num = val ? parseInt(val, 10) : NaN;
  return isNaN(num) ? null : num;
}

function parseHtmlForImages(html: string, pagePath: string): ImageRecord[] {
  const records: ImageRecord[] = [];
  const seen = new Set<string>();
  const pageUrl = `${BASE_URL}${pagePath}`;

  function stripTags(text: string): string {
    return text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  }

  function findSectionContext(html: string, position: number): { section: string; headings: string[]; text: string } {
    const before = html.slice(0, position);
    const sectionMatch = before.match(/<section[^>]*(?:aria-label=["']([^"']+)["'])?[^>]*class=["']([^"']*)["'][^>]*>/gi);
    let section = "";
    if (sectionMatch && sectionMatch.length > 0) {
      const last = sectionMatch[sectionMatch.length - 1];
      const label = extractAttribute(last, "aria-label");
      const cls = extractAttribute(last, "class");
      section = label || cls || "section";
    }

    // Find headings in a window around the position
    const windowStart = Math.max(0, position - 3000);
    const windowEnd = Math.min(html.length, position + 2000);
    const windowHtml = html.slice(windowStart, windowEnd);

    const headings: string[] = [];
    const headingRegex = /<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/gi;
    let m;
    while ((m = headingRegex.exec(windowHtml)) !== null && headings.length < 3) {
      const text = stripTags(m[1]);
      if (text) headings.push(text);
    }

    const paras: string[] = [];
    const paraRegex = /<p[^>]*>([\s\S]*?)<\/p>/gi;
    while ((m = paraRegex.exec(windowHtml)) !== null && paras.length < 4) {
      const text = stripTags(m[1]);
      if (text) paras.push(text);
    }

    return {
      section,
      headings,
      text: paras.join(" ").slice(0, 500),
    };
  }

  // Parse <img> tags
  const imgRegex = /<img[^>]*>/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    const tag = match[0];
    const src = extractAttribute(tag, "src");
    const _currentSrc = extractAttribute(tag, "src"); // currentSrc only exists in DOM, use src for static
    const imagePath = src;
    const imageUrl = resolveUrl(src);
    if (!imageUrl || seen.has(imageUrl)) continue;
    seen.add(imageUrl);

    const context = findSectionContext(html, match.index);
    const width = extractNumberAttribute(tag, "width");
    const height = extractNumberAttribute(tag, "height");
    const aspectRatio = width && height ? `${width}/${height}` : null;

    records.push({
      pageUrl,
      section: context.section,
      component: "",
      imageUrl,
      imagePath,
      alt: extractAttribute(tag, "alt"),
      width,
      height,
      displayWidth: width,
      displayHeight: height,
      aspectRatio,
      filename: getFilename(imageUrl),
      isBackground: false,
      parentHeadings: context.headings,
      surroundingText: context.text,
    });
  }

  // Parse background images from style attributes
  const bgRegex = /style=["']([^"']*background-image[^"']*)["']/gi;
  while ((match = bgRegex.exec(html)) !== null) {
    const style = match[1];
    const urlMatch = style.match(/url\(["']?([^"')]+)["']?\)/);
    if (urlMatch) {
      const imagePath = urlMatch[1];
      const imageUrl = resolveUrl(imagePath);
      if (!imageUrl || seen.has(imageUrl)) continue;
      seen.add(imageUrl);

      const context = findSectionContext(html, match.index);
      records.push({
        pageUrl,
        section: context.section,
        component: "",
        imageUrl,
        imagePath,
        alt: "",
        width: null,
        height: null,
        displayWidth: null,
        displayHeight: null,
        aspectRatio: null,
        filename: getFilename(imageUrl),
        isBackground: true,
        parentHeadings: context.headings,
        surroundingText: context.text,
      });
    }
  }

  return records;
}

async function fetchPage(page: Page, pagePath: string): Promise<string> {
  const pageUrl = `${BASE_URL}${pagePath}`;
  await page.goto(pageUrl, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(1500);

  // Scroll to trigger lazy images
  await page.evaluate(() => {
    return new Promise<void>((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 100);
    });
  });
  await page.waitForTimeout(1000);

  return page.content();
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const allImages: ImageRecord[] = [];
  for (const pagePath of PAGES) {
    console.log(`Crawling ${pagePath}...`);
    try {
      const html = await fetchPage(page, pagePath);
      const images = parseHtmlForImages(html, pagePath);
      allImages.push(...images);
      console.log(`  Found ${images.length} images`);
    } catch (err) {
      console.error(`  Failed to crawl ${pagePath}:`, err);
    }
  }

  await browser.close();

  const outputDir = path.resolve("scripts/image-audit");
  await fs.mkdir(outputDir, { recursive: true });
  await fs.writeFile(
    path.join(outputDir, "crawl-images-raw.json"),
    JSON.stringify(allImages, null, 2)
  );

  // Deduplicate summary
  const byImage = new Map<string, ImageRecord[]>();
  for (const img of allImages) {
    const list = byImage.get(img.imageUrl) || [];
    list.push(img);
    byImage.set(img.imageUrl, list);
  }

  const duplicates = Array.from(byImage.entries())
    .filter(([_, list]) => list.length > 1)
    .map(([url, list]) => ({
      imageUrl: url,
      filename: list[0].filename,
      occurrences: list.map(i => ({ page: i.pageUrl, section: i.section })),
    }));

  await fs.writeFile(
    path.join(outputDir, "duplicate-images.json"),
    JSON.stringify(duplicates, null, 2)
  );

  console.log(`\nTotal images: ${allImages.length}`);
  console.log(`Duplicate images: ${duplicates.length}`);
  console.log(`Raw crawl saved to scripts/image-audit/crawl-images-raw.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
