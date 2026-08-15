import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const assetsDir = path.resolve('public/assets');
const files = fs.readdirSync(assetsDir).filter(f => f.endsWith('.png'));

console.log(`Found ${files.length} PNG files in ${assetsDir}`);

async function convertAll() {
  let totalOrigSize = 0;
  let totalNewSize = 0;

  for (const file of files) {
    const origPath = path.join(assetsDir, file);
    const webpName = file.replace(/\.png$/, '.webp');
    const webpPath = path.join(assetsDir, webpName);

    const origStat = fs.statSync(origPath);
    totalOrigSize += origStat.size;

    // Convert with sharp
    await sharp(origPath)
      .webp({ quality: 82, effort: 5 })
      .toFile(webpPath);

    const newStat = fs.statSync(webpPath);
    totalNewSize += newStat.size;

    const savedPct = Math.round((1 - newStat.size / origStat.size) * 100);
    console.log(`Converted ${file} -> ${webpName} (${(origStat.size / 1024 / 1024).toFixed(2)} MB -> ${(newStat.size / 1024).toFixed(1)} KB, saved ${savedPct}%)`);
  }

  console.log(`\n========================================`);
  console.log(`Total original PNG size: ${(totalOrigSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total WebP size: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total reduction: ${((1 - totalNewSize / totalOrigSize) * 100).toFixed(1)}%`);
  console.log(`========================================\n`);
}

convertAll().catch(err => {
  console.error('Error during conversion:', err);
  process.exit(1);
});
