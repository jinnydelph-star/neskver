import fs from 'fs';
import path from 'path';
import http from 'http';

const targetDir = path.resolve('public/assets');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const assets = [
  // Logos
  '588b9de8c108b3012c092ae21c779c9d32f4477e.png', // logo-neskver
  '07ca9858337afbeb01362d3733f2776895fcb5ce.png', // logo-d4
  'b93f860de1b7cd7023e2ba941c1ca7322d47a9bb.png', // logo-cbs
  '74aedee773af94d21ab08413f3130d2f6b6d29ec.png', // logo-admin
  '536ef787f07de1d367cde3b573db9a51997b8e2f.png', // logo-vk
  '83e2b4b043340cb6a21e986168a831d8bea5e89d.png', // logo-tg

  // Botanical Banner & Decor Illustrations
  '70566af6e6cc9f11125941a0bee3a71e3dc9dea7.png', // veronica / anemone
  '83ee9c830d00f617b5b8244357cc19cb3609ad9b.png', // lilies of valley
  '59bfffcee2ba4ec71d479f18c7e304b4060030bb.png', // narcissus 1
  '0f02becdd3910282a1cefa41c5ef372abbf4262b.png', // dandelion
  'e19854d470b3c75568ad1c316cafa592b80069d5.png', // crocus
  '40cc0eda1286b06d9da53611401653f4816cfa7f.png', // marigolds
  '035ba688cad44b9c1e8d30ed6b16b094b14bcc9f.png', // pansies garland
  'ebb647eb5862a0b32b52950ceb9e67ed7dcd9180.png', // balsam / vanka mokry
  '568bf21e42f19b3345b5d5b21c5014da92739225.png', // birch tree
  'e386795d2c1ae59298b713136c9f2ecef0510a2c.png', // narcissus 2
  '694e4df0db560e9c605eea8dbe5f91256c0ec060.png', // snowdrop
  'b7cd99f4eb8fd4e7190df4bf76e79be2d6e2a648.png', // tulips
  'f4a53a1a1cba3b88972c30d3f9c2e58c782a30b5.png', // viola
  'e44971b3898924873bbdc0bb2fb286d0dc1bf632.png', // sakura
  '401339b22ae5bb52752bc03ee57477d1c5fd0271.png', // narcissus big
  'a66f926f9a8da8e0dfdc3f2235fe7acd6bbcccd9.png', // sakura 2
  '1797aa1906e1357460e98b23c89fb0ba9b2f9522.png', // dopiii badge

  // Map & Points
  'ba1c9c88a0f65bcad728fb58e4fc71997506c950.png', // map background
  '532a8155ac9968cde10126695ed06a46b6be9872.png', // map route line
  '7111cdcb5c907e70f9cd30ee72adb095916db37e.png', // map point 3
  'a09a27fa56add1e99529e4cc4e5e1a3188e72e63.png', // map point 6
  'b491dfba5e9442bd78191985c95882c101ff7959.png', // map point 1
  'd12f4fbb840d5f65c8f1d8ec570cf7dc1f133f6b.png', // map point 4
  '090659a37b90365f18be5d54abc82ab955f7e4d3.png', // map point 3_3
  '84088c10b2765202411d81025771489b7e22a312.png', // map point 6_6
  'a8614560ae8d1c7393f4a9440caa0aacad9f2f1e.png', // map point 2
  '603116ee213e511e9dc753d078add2f03b7fb24a.png', // map point 5

  // Location Real Photos & Detailed Illustrations
  'bf85102eeb1fb0f65fcc7f7675a549286a7592aa.png', // ots photo
  'ab26eb4406b53a2ad18845a4a840512439ed7be7.png', // ots illustration
  '57e132118aa4a0a9fbdda88400bcd524194098d7.png', // ots square card
  '4439574bfb54ec36e8fa479b26f566567ff1ad95.png', // mama square card
  'd97dc39e78f51e1020f684000db9359a62c60f99.png', // georgievsky photo
  '6d472a03769bbfbd4d83ebe9002a279d1b8352c7.png', // georgievsky illustration
  '6e9cbfc96c46d2fa6c0c5f847b8d69f564996bac.png', // gurdin photo
  '2b428fea2abb06d4c66087c1056651c637415743.png', // gurdin illustration
  '8d5a9d5a12c85d2e8275893c1186a919767909c4.png', // gurdin square card
  'b6be4569f6d621d6f68f99c305657942bd396862.png', // bolsheohtinsky photo
  '070a1f83104f2e4de787c973708f750e04ea3708.png', // bolsheohtinsky illustration
  'd18d320deb39ddf7759b889dc54d799adce7750c.png', // library photo
  '3465a744c30375c4ca60f3106833788301455dfe.png', // library illustration
  '15af0c11818942c91d1254fc2288beb077316b08.png', // mansion photo
  '686fb0813e90e778973f5823ad44f0d8a99b03e7.png', // mansion illustration
  '1a292aab345f56a6bf751d33dffe8bdbe790aa5a.png', // cemetery photo
  '223c254797448db4c08ef11816cde812ca2386ca.png', // cemetery illustration
  'c9931462d94bafca50bc2061ece77cd5ad63bfea.png', // cemetery square card

  // Gallery Drawings
  'a04a0a7caa5c91502b9c135d827f76fbf2f8eb83.png', // anemone drawing
  'bf7d1732ae811a55a9d7c3e36c52c2885261638a.png', // maple drawing

  // SVGs
  '730698c51de6137a0a2dd40d0e5dbb862f0177b8.svg', // route line path
  'a7f6a36d751187733b98863e71225542dbae38ab.svg', // green map section bg
  'f50aaf6b98484b915e192c977768bd6d1e8f199f.svg', // footer bg
  '0e4d720bb3dbc23ef7bb688f0f9c01438f1b10a8.svg', // banner top bg
  '9f0d2fbfbfb070161fb47e11bb34578b44530739.svg', // banner bottom wave
  'b524c4204395db3e2a57b1a37d1cf6b86c4c751b.svg', // wave 68
  '49facafd81af0a68d381bbeddc4bcfe2c0b6fe0a.svg', // vector 16
  'f9376bbeef18654ac9d2f9572addd6239c4d4bd8.svg', // vector 19
  '1315120a884d72e0625d20ea64fc4d1c0b074067.svg', // vector 17
  '8b0e1d4c43affd0d373150b9aa7832186c811bf7.svg', // vector 20
  '747ddef14951fff09fec759cde1e2f2fed27c067.svg', // vector 18
  '0e8aeb77e8f3ec1bb94b59bcd42e524cacc95f21.svg', // vector 21
  '5333305ce9095611b6f87b3cb5937427e7966092.svg', // polygon arrow
  'c18b5778235714adcdb57d071aef291dd8c7caa0.svg', // polygon arrow 19
  '0cfcdb841e49551a2cadfe92a1ec91e25908d650.svg', // ellipse play
  '9b73653bfbdd6e29cf8887103b560fcc7d1a7961.svg', // play polygon
  '530ed89c1a0c8eb3893b4901adf0d853086cae55.svg', // play polygon 20
  'f23ecbbc94a019277311082f915d8122eddc16ba.svg', // group 24 play
  '29df5afa66dd7bca0a36a595282ef2f1cffdf46e.svg', // eye icon
  '122dff446fd4f4db256b1d191bfd462eb40dda50.svg', // eye icon 2
  '129c5be8c773e6396c887de9a0cfdaf2e3171579.svg'  // star / bulb icon
];

async function downloadFile(filename) {
  const url = `http://localhost:3845/assets/${filename}`;
  const filePath = path.join(targetDir, filename);
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filePath);
    http.get(url, (response) => {
      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filePath);
        return reject(new Error(`Failed to get ${filename}: ${response.statusCode}`));
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

async function run() {
  console.log(`Starting download of ${assets.length} assets...`);
  for (const asset of assets) {
    try {
      await downloadFile(asset);
    } catch (e) {
      console.warn(`Warning: Could not download ${asset}: ${e.message}`);
    }
  }
  console.log('Finished downloading assets.');
}

run();
