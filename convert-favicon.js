const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertFavicon() {
  try {
    const inputPath = path.join(__dirname, 'public', 'cdtlogo2.png');
    const outputPath = path.join(__dirname, 'public', 'favicon.ico');
    
    // Convert PNG to ICO (32x32 is standard for favicon.ico)
    await sharp(inputPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .toFile(outputPath.replace('.ico', '.png'));
    
    console.log('Favicon conversion would require ico-convert, but PNG favicon is configured');
    console.log('Using cdtlogo2.png as favicon - try hard refresh (Ctrl+Shift+R)');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

convertFavicon();
