import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');
const pngFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.png'));
const webpFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.webp'));

console.log(`PNG count in assets: ${pngFiles.length}`);
console.log(`WebP count in assets: ${webpFiles.length}`);

const missing = pngFiles.filter(p => !fs.existsSync(path.join(assetsDir, p.replace(/\.png$/, '.webp'))));
console.log(`Missing WebPs for PNGs: ${missing.length}`);

// Verify references in src/data.js and index.html
const data = fs.readFileSync('src/data.js', 'utf8');
const html = fs.readFileSync('index.html', 'utf8');

const assetMatches = [...(data + html).matchAll(/\/assets\/([^"'\s]+)/g)].map(m => m[1]);
const uniqueAssets = [...new Set(assetMatches)];

let missingRefs = 0;
for (const asset of uniqueAssets) {
  const filePath = path.join(assetsDir, asset);
  if (!fs.existsSync(filePath)) {
    console.error(`MISSING referenced file: ${asset}`);
    missingRefs++;
  }
}

if (missingRefs === 0) {
  console.log(`✓ All ${uniqueAssets.length} referenced assets in data.js and index.html exist on disk!`);
} else {
  console.error(`Found ${missingRefs} missing referenced assets!`);
}
