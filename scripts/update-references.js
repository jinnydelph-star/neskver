import fs from 'fs';
import path from 'path';

// 1. Update src/data.js
const dataPath = path.resolve('src/data.js');
let dataContent = fs.readFileSync(dataPath, 'utf8');
dataContent = dataContent.replace(/\/assets\/([a-f0-9]+)\.png/g, '/assets/$1.webp');
fs.writeFileSync(dataPath, dataContent, 'utf8');
console.log('✓ Updated src/data.js references to .webp');

// 2. Update index.html
const htmlPath = path.resolve('index.html');
let htmlContent = fs.readFileSync(htmlPath, 'utf8');
htmlContent = htmlContent.replace(/\/assets\/([a-f0-9]+)\.png/g, '/assets/$1.webp');
htmlContent = htmlContent.replace('type="image/png"', 'type="image/webp"');
fs.writeFileSync(htmlPath, htmlContent, 'utf8');
console.log('✓ Updated index.html references to .webp');
