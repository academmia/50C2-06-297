
const uuidv4 = require('uuid/v4');
const path = require('path');

class FileUpload {
  constructor(folder) {
    this.folder = folder;
  }
  async save(buffer) {
    const filename = FileUpload.filename();
    const filepath = this.filepath(filename);

    return filename;
  }
  static filename() {
    return `${uuidv4()}.png`;
  }
  filepath(filename) {
    return path.resolve(`${this.folder}/${filename}`)
  }
}
module.exports = FileUpload;
