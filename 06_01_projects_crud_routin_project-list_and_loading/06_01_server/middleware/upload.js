const multer = require('multer');
const uuidv4 = require('uuid/v4');

const upload = multer({
  limits: {
    fileSize: 5 * 1024 * 1024,
  }
});

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/docs/')
  },
  filename: function (req, file, cb) {
    console.log('uploadDoc middleware: ', file);
    let extension = '';
    let filenameSplit = file.originalname.split(".");
    if (filenameSplit.length > 1)
        extension = filenameSplit.pop(); 

    cb(null, `${uuidv4()}.${extension}`)
  }
})

const uploadDoc = multer({
  limits: { fileSize: 25 * 1024 * 1024 },
  storage: storage
})

module.exports = { 
  image: upload,
  doc: uploadDoc
}

