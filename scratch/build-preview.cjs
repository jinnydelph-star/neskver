const sharp = require('C:/Users/Phiumbium/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const fs = require('fs');
const logo = fs.readFileSync('public/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp').toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#FBFFFB"/><path d="M0 500Q300 430 600 520T1200 480V630H0Z" fill="#3B5D2A"/><image href="data:image/webp;base64,${logo}" x="65" y="95" width="270" height="300"/><g font-family="Arial" fill="#273A1E"><text x="365" y="205" font-size="58" font-weight="bold">(Не)скверное место</text><text x="365" y="280" font-size="34">Эко-тропа по Большой Охте</text><text x="365" y="345" font-size="25">Детская библиотека № 4</text><text x="365" y="385" font-size="25">Санкт-Петербург</text></g></svg>`;
sharp(Buffer.from(svg)).png().toFile('public/link-preview.png');
