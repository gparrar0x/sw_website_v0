const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/og-image.svg');
const pngPath = path.join(__dirname, '../public/og-image.png');

console.log('Converting SVG to PNG...');
console.log('Input:', svgPath);
console.log('Output:', pngPath);

sharp(svgPath)
  .resize(1200, 630)
  .png({
    quality: 100,
    compressionLevel: 9,
  })
  .toFile(pngPath)
  .then(() => {
    console.log('✓ OG image generated successfully!');
    console.log('  Location:', pngPath);

    // Get file size
    const stats = fs.statSync(pngPath);
    console.log('  Size:', Math.round(stats.size / 1024), 'KB');
  })
  .catch(err => {
    console.error('Error converting SVG to PNG:', err);
    process.exit(1);
  });
