#!/usr/bin/env tsx
/**
 * Re-compress all .webp images under public/generated with cwebp at a target
 * quality. Preserves dimensions, only touches WebP files, and reports savings.
 * Use when Lighthouse flags image-delivery waste on hero/images.
 */
import { execFileSync } from 'child_process';
import { readdir, stat } from 'fs/promises';
import { join, extname } from 'path';

const ROOT = join(process.cwd(), 'public', 'generated');
const QUALITY = Number(process.argv[2] || 75);

async function* walk(dir: string): AsyncGenerator<string> {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.webp') {
      yield full;
    }
  }
}

async function main() {
  let totalBefore = 0;
  let totalAfter = 0;
  let count = 0;

  for await (const file of walk(ROOT)) {
    const before = (await stat(file)).size;
    execFileSync('cwebp', ['-q', String(QUALITY), '-quiet', file, '-o', file]);
    const after = (await stat(file)).size;
    totalBefore += before;
    totalAfter += after;
    count++;
    if (before > 50 * 1024) {
      const saved = ((before - after) / before * 100).toFixed(1);
      console.log(`${file.replace(process.cwd() + '/', '')}: ${(before / 1024).toFixed(1)}KB → ${(after / 1024).toFixed(1)}KB (${saved}%)`);
    }
  }

  const saved = totalBefore - totalAfter;
  console.log(`\nRe-compressed ${count} WebP files at q=${QUALITY}`);
  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Saved: ${(saved / 1024 / 1024).toFixed(2)}MB (${(saved / totalBefore * 100).toFixed(1)}%)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
