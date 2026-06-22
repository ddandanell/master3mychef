#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import { glob as globAsync } from 'glob';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

interface ImageReference {
  file: string;
  line: number;
  type: 'src' | 'backgroundImage' | 'import' | 'url' | 'img';
  path: string;
  alt?: string;
  component?: string;
  raw: string;
}

interface ImageFile {
  path: string;
  format: string;
  size: number;
  dimensions?: { width: number; height: number };
  hasNamingConvention: boolean;
  usageCount: number;
  referencedBy: string[];
}

interface AuditReport {
  timestamp: string;
  scanPaths: string[];
  summary: {
    totalImages: number;
    totalReferences: number;
    imagesWithoutAlt: number;
    imagesNotFollowingConvention: number;
    totalFileSize: number;
    formats: Record<string, number>;
  };
  images: Record<string, ImageFile>;
  references: ImageReference[];
  hotspots: Array<{ file: string; count: number }>;
}

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(PROJECT_ROOT, 'public');
const SRC_DIR = path.join(PROJECT_ROOT, 'src');
const REPORTS_DIR = path.join(PROJECT_ROOT, 'reports');

// Naming convention: mychef-<service>-<location>-<descriptor>
const NAMING_PATTERN = /^mychef-[a-z\-]+-[a-z\-]+\.(png|jpg|jpeg|webp|avif|svg|gif)$/i;

async function collectImageReferences(): Promise<ImageReference[]> {
  const references: ImageReference[] = [];

  // Patterns to search for
  const filePatterns = [
    `${SRC_DIR}/**/*.tsx`,
    `${SRC_DIR}/**/*.ts`,
    `${SRC_DIR}/**/*.css`,
    `${PROJECT_ROOT}/*.tsx`,
    `${PROJECT_ROOT}/*.ts`,
  ];

  for (const pattern of filePatterns) {
    try {
      const files = await globAsync(pattern);

      for (const file of files) {
        try {
          const content = fs.readFileSync(file, 'utf8');
          const lines = content.split('\n');

          lines.forEach((line, index) => {
            // src attributes: src="..." or src={...}
            const srcMatches = line.match(/src\s*=\s*["']([^"']+)["']/g);
            if (srcMatches) {
              srcMatches.forEach(match => {
                const pathMatch = match.match(/src\s*=\s*["']([^"']+)["']/);
                if (pathMatch && isImagePath(pathMatch[1])) {
                  references.push({
                    file,
                    line: index + 1,
                    type: 'src',
                    path: pathMatch[1],
                    raw: line.trim(),
                  });
                }
              });
            }

            // backgroundImage: url(...)
            const bgMatches = line.match(/backgroundImage\s*[:=]\s*['"]{0,1}url\(['"]([^'"]+)['"]\)['"]{0,1}/g);
            if (bgMatches) {
              bgMatches.forEach(match => {
                const pathMatch = match.match(/url\(['"]?([^'"]+)['"]?\)/);
                if (pathMatch && isImagePath(pathMatch[1])) {
                  references.push({
                    file,
                    line: index + 1,
                    type: 'backgroundImage',
                    path: pathMatch[1],
                    raw: line.trim(),
                  });
                }
              });
            }

            // alt attributes
            const altMatches = line.match(/alt\s*=\s*["']([^"']+)["']/);
            if (altMatches && references.length > 0) {
              const lastRef = references[references.length - 1];
              if (lastRef.line === index + 1) {
                lastRef.alt = altMatches[1];
              }
            }

            // import statements
            const importMatches = line.match(/import\s+.*from\s+["']([^"']*\.(png|jpg|jpeg|webp|avif|svg|gif))["']/i);
            if (importMatches && isImagePath(importMatches[1])) {
              references.push({
                file,
                line: index + 1,
                type: 'import',
                path: importMatches[1],
                raw: line.trim(),
              });
            }

            // CSS url() in style attributes
            const styleMatches = line.match(/style\s*=\s*["']{[^}]*url\(['"]?([^'"]+)['"]?\)[^}]*["']/);
            if (styleMatches && isImagePath(styleMatches[1])) {
              references.push({
                file,
                line: index + 1,
                type: 'url',
                path: styleMatches[1],
                raw: line.trim(),
              });
            }

            // img tags
            const imgMatches = line.match(/<img[^>]+>/);
            if (imgMatches) {
              const srcMatch = imgMatches[0].match(/src\s*=\s*["']([^"']+)["']/);
              const altMatch = imgMatches[0].match(/alt\s*=\s*["']([^"']+)["']/);
              if (srcMatch && isImagePath(srcMatch[1])) {
                references.push({
                  file,
                  line: index + 1,
                  type: 'img',
                  path: srcMatch[1],
                  alt: altMatch ? altMatch[1] : undefined,
                  raw: line.trim(),
                });
              }
            }
          });
        } catch (err) {
          console.warn(`Error reading ${file}:`, err);
        }
      }
    } catch (err) {
      console.warn(`Error processing pattern ${pattern}:`, err);
    }
  }

  return references;
}

function isImagePath(filePath: string): boolean {
  const imageExts = ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.svg', '.gif'];
  return imageExts.some(ext => filePath.toLowerCase().endsWith(ext));
}

async function getImageDimensions(filePath: string): Promise<{ width: number; height: number } | undefined> {
  try {
    const metadata = await sharp(filePath).metadata();
    if (metadata.width && metadata.height) {
      return { width: metadata.width, height: metadata.height };
    }
  } catch (err) {
    // Silent fail for SVGs and other files sharp can't read
  }
  return undefined;
}

async function collectImageFiles(): Promise<Record<string, ImageFile>> {
  const images: Record<string, ImageFile> = {};

  // Collect all image files in public
  const publicImages = await globAsync(`${PUBLIC_DIR}/**/*.{png,jpg,jpeg,webp,avif,svg,gif}`);

  for (const filePath of publicImages) {
    const relativePath = path.relative(PUBLIC_DIR, filePath);
    const fileName = path.basename(filePath);
    const ext = path.extname(fileName).toLowerCase().slice(1);

    try {
      const stats = fs.statSync(filePath);
      const dimensions = await getImageDimensions(filePath);

      images[`/public/${relativePath}`] = {
        path: `/public/${relativePath}`,
        format: ext,
        size: stats.size,
        dimensions,
        hasNamingConvention: NAMING_PATTERN.test(fileName),
        usageCount: 0,
        referencedBy: [],
      };
    } catch (err) {
      console.warn(`Error processing ${filePath}:`, err);
    }
  }

  return images;
}

function normalizeImagePath(refPath: string): string {
  // Convert relative paths to absolute paths
  if (refPath.startsWith('/public/')) return refPath;
  if (refPath.startsWith('/')) return `/public${refPath}`;
  if (refPath.startsWith('.')) {
    return `/public/${refPath.replace(/^\.\//, '').replace(/^\.\.\/public\//, '')}`;
  }
  return `/public/${refPath}`;
}

function checkNamingConvention(filePath: string): boolean {
  const fileName = path.basename(filePath);
  return NAMING_PATTERN.test(fileName);
}

async function generateReport(
  references: ImageReference[],
  images: Record<string, ImageFile>,
): Promise<AuditReport> {
  // Track usage
  const usageMap = new Map<string, Set<string>>();
  const imagesWithoutAlt = new Set<string>();
  const imagesNotFollowingConvention = new Set<string>();

  references.forEach(ref => {
    const normalized = normalizeImagePath(ref.path);

    if (images[normalized]) {
      images[normalized].usageCount += 1;

      if (!usageMap.has(normalized)) {
        usageMap.set(normalized, new Set());
      }
      usageMap.get(normalized)!.add(ref.file);

      images[normalized].referencedBy = Array.from(usageMap.get(normalized) || []);
    }

    if (ref.type !== 'import' && !ref.alt) {
      imagesWithoutAlt.add(normalized);
    }

    if (!checkNamingConvention(ref.path)) {
      imagesNotFollowingConvention.add(normalized);
    }
  });

  // Calculate totals
  const totalSize = Object.values(images).reduce((sum, img) => sum + img.size, 0);
  const formatStats: Record<string, number> = {};

  Object.values(images).forEach(img => {
    formatStats[img.format] = (formatStats[img.format] || 0) + 1;
  });

  // Find hotspots (files with most images)
  const fileImageCounts = new Map<string, number>();
  references.forEach(ref => {
    const count = fileImageCounts.get(ref.file) || 0;
    fileImageCounts.set(ref.file, count + 1);
  });

  const hotspots = Array.from(fileImageCounts.entries())
    .map(([file, count]) => ({ file, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  return {
    timestamp: new Date().toISOString(),
    scanPaths: [SRC_DIR, PUBLIC_DIR],
    summary: {
      totalImages: Object.keys(images).length,
      totalReferences: references.length,
      imagesWithoutAlt: imagesWithoutAlt.size,
      imagesNotFollowingConvention: imagesNotFollowingConvention.size,
      totalFileSize: totalSize,
      formats: formatStats,
    },
    images,
    references,
    hotspots,
  };
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

function generateMarkdown(report: AuditReport): string {
  const lines: string[] = [];

  lines.push('# MyChef Image Audit Report');
  lines.push(`**Generated:** ${report.timestamp}`);
  lines.push('');

  lines.push('## Summary');
  lines.push(`- **Total Images:** ${report.summary.totalImages}`);
  lines.push(`- **Total References:** ${report.summary.totalReferences}`);
  lines.push(`- **Total File Size:** ${formatBytes(report.summary.totalFileSize)}`);
  lines.push(`- **Images Without Alt Text:** ${report.summary.imagesWithoutAlt}`);
  lines.push(`- **Images Not Following Convention:** ${report.summary.imagesNotFollowingConvention}`);
  lines.push('');

  lines.push('## Format Distribution');
  Object.entries(report.summary.formats).forEach(([format, count]) => {
    lines.push(`- **${format.toUpperCase()}:** ${count}`);
  });
  lines.push('');

  lines.push('## Top 10 Files with Most Image References');
  report.hotspots.forEach((spot, idx) => {
    const relativePath = spot.file.replace(PROJECT_ROOT, '');
    lines.push(`${idx + 1}. \`${relativePath}\` — ${spot.count} references`);
  });
  lines.push('');

  lines.push('## Images Not Following Naming Convention');
  Object.entries(report.images).forEach(([imgPath, img]) => {
    if (!img.hasNamingConvention) {
      lines.push(`- \`${imgPath}\` (${img.format}, ${formatBytes(img.size)})`);
      lines.push(`  - Used by: ${img.referencedBy.length} file(s)`);
    }
  });
  lines.push('');

  lines.push('## References Without Alt Text');
  report.references
    .filter(ref => ref.type !== 'import' && !ref.alt)
    .slice(0, 20)
    .forEach(ref => {
      const relativePath = ref.file.replace(PROJECT_ROOT, '');
      lines.push(`- \`${relativePath}:${ref.line}\` — \`${ref.path}\``);
    });
  if (report.references.filter(ref => ref.type !== 'import' && !ref.alt).length > 20) {
    lines.push(`- ... and ${report.references.filter(ref => ref.type !== 'import' && !ref.alt).length - 20} more`);
  }
  lines.push('');

  lines.push('## Largest Images');
  const sortedBySize = Object.values(report.images)
    .sort((a, b) => b.size - a.size)
    .slice(0, 10);

  sortedBySize.forEach((img, idx) => {
    const dims = img.dimensions ? ` (${img.dimensions.width}x${img.dimensions.height})` : '';
    lines.push(`${idx + 1}. \`${img.path}\`${dims} — ${formatBytes(img.size)} — Used ${img.usageCount}x`);
  });
  lines.push('');

  return lines.join('\n');
}

async function main() {
  try {
    // Ensure reports directory exists
    if (!fs.existsSync(REPORTS_DIR)) {
      fs.mkdirSync(REPORTS_DIR, { recursive: true });
    }

    console.log('🔍 Scanning for image references...');
    const references = await collectImageReferences();
    console.log(`✓ Found ${references.length} image references`);

    console.log('📦 Collecting image files...');
    const images = await collectImageFiles();
    console.log(`✓ Found ${Object.keys(images).length} image files`);

    console.log('📊 Generating report...');
    const report = await generateReport(references, images);

    // Write JSON report
    const jsonPath = path.join(REPORTS_DIR, 'image-audit.json');
    fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));
    console.log(`✓ JSON report: ${jsonPath}`);

    // Write markdown report
    const mdPath = path.join(REPORTS_DIR, 'image-audit.md');
    const markdown = generateMarkdown(report);
    fs.writeFileSync(mdPath, markdown);
    console.log(`✓ Markdown report: ${mdPath}`);

    // Summary output
    console.log('');
    console.log('📋 Audit Summary:');
    console.log(`   Total Images: ${report.summary.totalImages}`);
    console.log(`   Total References: ${report.summary.totalReferences}`);
    console.log(`   Total Size: ${formatBytes(report.summary.totalFileSize)}`);
    console.log(`   Without Alt: ${report.summary.imagesWithoutAlt}`);
    console.log(`   Not Following Convention: ${report.summary.imagesNotFollowingConvention}`);
    console.log('');

  } catch (err) {
    console.error('❌ Error during audit:', err);
    process.exit(1);
  }
}

main();
