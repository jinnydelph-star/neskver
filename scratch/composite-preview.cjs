const sharp = require('C:/Users/Phiumbium/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
(async()=>{
const logo = await sharp('public/assets/588b9de8c108b3012c092ae21c779c9d32f4477e.webp').resize(270,300,{fit:'contain',background:{r:0,g:0,b:0,alpha:0}}).png().toBuffer();
const card = await sharp('public/link-preview.png').composite([{input:logo,left:65,top:95}]).png().toBuffer();
require('fs').writeFileSync('public/link-preview.png',card);
})();
