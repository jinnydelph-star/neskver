import fs from 'fs';
import path from 'path';

const assetsDir = path.resolve('public/assets');
const pngFiles = fs.readdirSync(assetsDir).filter(f => f.endsWith('.png'));

console.log(`Removing ${pngFiles.length} original PNG files from assets directory...`);
for (const file of pngFiles) {
  const filePath = path.join(assetsDir, file);
  fs.unlinkSync(filePath);
}

// Remove test.png at root if exists
const testPng = path.resolve('test.png');
if (fs.existsSync(testPng)) {
  fs.unlinkSync(testPng);
  console.log('Removed test.png');
}

console.log('✓ Cleanup complete. Only optimized WebP and SVG assets remain.');
