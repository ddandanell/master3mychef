import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://mychef.id';

const PATHS = [
  '/',
  '/experiences',
  '/experiences/private-cocktail-party',
  '/experiences/sushi-masterclass',
  '/experiences/private-cooking-class',
  '/experiences/kids-birthday-chef-party',
  '/experiences/champagne-oyster-experience',
  '/experiences/romantic-proposal-dinner',
  '/complete-villa-experience',
  '/villa-event-packages',
  '/vip-transport-bali',
  '/about',
  '/catering',
  '/fine-dining',
  '/events',
  '/staffing',
  '/contact',
];

interface PageData {
  url: string;
  status: number;
  title: string;
  metaDescription: string;
  h1: string[];
  h2: string[];
  h3: string[];
  paragraphs: string[];
  images: Array<{
    src: string;
    alt: string;
    width?: string;
    height?: string;
    loading?: string;
  }>;
  links: string[];
}

function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim();
}

function extractTag(html: string, tag: string): string[] {
  const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'gi');
  const matches: string[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const text = cleanText(match[1].replace(/<[^>]+>/g, ' '));
    if (text) matches.push(text);
  }
  return matches;
}

function extractAttribute(tag: string, attr: string): string | undefined {
  const regex = new RegExp(`${attr}=["']([^"']+)["']`, 'i');
  const match = tag.match(regex);
  return match ? match[1] : undefined;
}

function extractImages(html: string): PageData['images'] {
  const regex = /<img[^>]*>/gi;
  const matches: PageData['images'] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    const tag = match[0];
    const src = extractAttribute(tag, 'src') || extractAttribute(tag, 'data-src');
    if (src) {
      matches.push({
        src,
        alt: extractAttribute(tag, 'alt') || '',
        width: extractAttribute(tag, 'width'),
        height: extractAttribute(tag, 'height'),
        loading: extractAttribute(tag, 'loading'),
      });
    }
  }
  return matches;
}

function extractLinks(html: string): string[] {
  const regex = /<a[^>]*href=["']([^"']+)["'][^>]*>/gi;
  const matches: string[] = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    matches.push(match[1]);
  }
  return [...new Set(matches)];
}

function extractTitle(html: string): string {
  const match = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return match ? cleanText(match[1]) : '';
}

function extractMetaDescription(html: string): string {
  const match = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["'][^>]*>/i)
    || html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["'][^>]*>/i);
  return match ? match[1] : '';
}

async function crawlPage(path: string): Promise<PageData> {
  const url = `${BASE_URL}${path}`;
  const response = await fetch(url);
  const html = await response.text();

  return {
    url,
    status: response.status,
    title: extractTitle(html),
    metaDescription: extractMetaDescription(html),
    h1: extractTag(html, 'h1'),
    h2: extractTag(html, 'h2'),
    h3: extractTag(html, 'h3'),
    paragraphs: extractTag(html, 'p'),
    images: extractImages(html),
    links: extractLinks(html),
  };
}

async function main() {
  mkdirSync(`${__dirname}/crawled`, { recursive: true });
  
  const results: PageData[] = [];
  for (const path of PATHS) {
    console.log(`Crawling ${path}...`);
    try {
      const pageData = await crawlPage(path);
      results.push(pageData);
      const filename = path === '/' ? 'home' : path.replace(/^\//, '').replace(/\//g, '-');
      writeFileSync(`${__dirname}/crawled/${filename}.json`, JSON.stringify(pageData, null, 2));
      console.log(`  OK ${pageData.status} - ${pageData.title}`);
    } catch (error) {
      console.error(`  FAILED ${path}:`, error);
      results.push({
        url: `${BASE_URL}${path}`,
        status: 0,
        title: '',
        metaDescription: '',
        h1: [],
        h2: [],
        h3: [],
        paragraphs: [],
        images: [],
        links: [],
      });
    }
  }

  writeFileSync(`${__dirname}/crawl-report.json`, JSON.stringify(results, null, 2));
  console.log(`\nCrawl complete. ${results.length} pages saved to scripts/image-audit/crawl-report.json`);
}

main().catch(console.error);
