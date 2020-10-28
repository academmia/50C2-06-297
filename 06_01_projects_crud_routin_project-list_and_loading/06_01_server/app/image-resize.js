
const sharp = require('sharp');
const uuidv4 = require('uuid/v4');
const path = require('path');

class ImageResize {
  constructor(folder) {
    this.folder = folder;
  }
  async save(buffer) {
    const filename = ImageResize.filename();
    const filepath = this.filepath(filename);

    await sharp(buffer)
      .resize(1024, 1024, {
        fit: sharp.fit.inside,
        withoutEnlargement: true
      })
      .toFile(filepath);
    
    return filename;
  }
  static filename() {
    return `${uuidv4()}.png`;
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`)
  }
}
module.exports = ImageResize;
