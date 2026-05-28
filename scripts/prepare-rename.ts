import fs from 'fs';
import path from 'path';

const reportPath = path.resolve('reports/image-audit.json');
const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

const images = report.images;
const mappings: Record<string, any> = {};

function suggestName(oldPath: string): string {
  const fileName = path.basename(oldPath);
  const ext = path.extname(oldPath);
  const nameWithoutExt = fileName.replace(ext, '');
  
  // Try to infer service from path or name
  let service = 'misc';
  if (oldPath.includes('catering')) service = 'catering';
  else if (oldPath.includes('events')) service = 'events';
  else if (oldPath.includes('staffing')) service = 'staffing';
  else if (oldPath.includes('finedining')) service = 'finedining';
  else if (oldPath.includes('experience')) service = 'experience';
  else if (oldPath.includes('ui')) service = 'ui';
  else if (oldPath.includes('luna')) service = 'finedining';
  else if (oldPath.includes('bali')) service = 'location';

  // Descriptor: clean up the old name
  let descriptor = nameWithoutExt
    .replace(/^(catering|events|staffing|finedining|experience|ui|misc|bali|hero|pkg|hub)-/, '')
    .replace(/-(lg|md|sm|xl|v[0-9]+)$/, '')
    .replace(/-[0-9]+x[0-9]+$/, '');

  if (!descriptor || descriptor === nameWithoutExt) {
      descriptor = nameWithoutExt;
  }

  // Cleanup descriptor: only lowercase letters, numbers, and hyphens
  descriptor = descriptor.toLowerCase().replace(/[^a-z0-9\-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');

  return `mychef-${service}-bali-${descriptor}${ext}`;
}

Object.keys(images).forEach((oldPath: string) => {
  if (!images[oldPath].hasNamingConvention) {
    // Skip icons, favicons, etc.
    if (oldPath.includes('icon') || oldPath.includes('favicon') || oldPath.includes('apple-touch')) {
        return;
    }
    
    const newName = suggestName(oldPath);
    // Keep in /public/generated/ for consistency
    const newPath = `/public/generated/${newName}`;
    
    mappings[oldPath] = {
      new_path: newPath
    };
  }
});

const output = {
  timestamp: new Date().toISOString(),
  mappings: mappings
};

fs.writeFileSync('IMAGE_RENAME_MAPPING.json', JSON.stringify(output, null, 2));
console.log(`✅ Created rename mapping with ${Object.keys(mappings).length} entries in IMAGE_RENAME_MAPPING.json`);

