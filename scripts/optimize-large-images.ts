import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const PUBLIC_DIR = path.resolve('public');
const SIZE_THRESHOLD = 500 * 1024; // 500KB

async function optimizeImages() {
  console.log('🚀 Starting image optimization...');
  
  const files = await glob('public/**/*.{webp,jpg,jpeg,png}', { absolute: true });
  let totalSaved = 0;
  let optimizedCount = 0;

  for (const file of files) {
    const stats = fs.statSync(file);
    if (stats.size > SIZE_THRESHOLD) {
      const ext = path.extname(file).toLowerCase();
      const originalSize = stats.size;
      
      console.log(`\n📄 Optimizing: ${path.relative(process.cwd(), file)} (${(originalSize / 1024).toFixed(2)} KB)`);
      
      const buffer = fs.readFileSync(file);
      const sharpInstance = sharp(buffer);
      
      let optimizedBuffer: Buffer;
      
      if (ext === '.webp') {
        optimizedBuffer = await sharpInstance.webp({ quality: 75, smartSubsample: true }).toBuffer();
      } else if (ext === '.jpg' || ext === '.jpeg') {
        optimizedBuffer = await sharpInstance.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
      } else if (ext === '.png') {
        optimizedBuffer = await sharpInstance.png({ quality: 80, compressionLevel: 9 }).toBuffer();
      } else {
        continue;
      }

      if (optimizedBuffer.length < originalSize) {
        fs.writeFileSync(file, optimizedBuffer);
        const saved = originalSize - optimizedBuffer.length;
        totalSaved += saved;
        optimizedCount++;
        console.log(`✅ Saved: ${(saved / 1024).toFixed(2)} KB (${((saved / originalSize) * 100).toFixed(1)}% reduction)`);
      } else {
        console.log('⏭️ Skipping (optimized version was larger or equal size)');
      }
    }
  }

  console.log('\n✨ Optimization complete!');
  console.log(`📦 Optimized ${optimizedCount} images`);
  console.log(`📉 Total space saved: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB`);
}

optimizeImages().catch(err => {
  console.error('❌ Optimization failed:', err);
  process.exit(1);
});
