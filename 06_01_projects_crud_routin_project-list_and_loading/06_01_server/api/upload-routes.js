const routes = require('express').Router();
const path = require('path');
const data = require('../db/db.json');
const uuidv4 = require('uuid/v4');

const upload = require('../middleware/upload');
const ImageResize = require('../app/image-resize');

routes.post('/image', upload.image.single('image'), 
    async function (req, res) {
        
        let dirPath = __dirname.split("/");dirPath.pop();
        let parentPath = dirPath.join("/");
        const imagePath = path.join(parentPath, '/public/images');

        const fileUpload = new ImageResize(imagePath);

        if (!req.file) {
          res.status(401).json({error: 'Please provide an image'});
        }
        const filename = await fileUpload.save(req.file.buffer);

        return res.status(200).json({ 
            dir: 'images',
            url: `images/${filename}`,
            image: filename 
        });
    }
);

routes.post('/doc', upload.doc.single('document'), 
    async function (req, res) {
        
        console.log('Doc uploaded: ', req.file);

        if (!req.file) {
          res.status(401).json({error: 'Please provide a document'});
        }

        return res.status(200).json({ 
            dir: 'docs',
            url: `docs/${req.file.filename}`,
            name: req.file.filename,
            size: (req.file.size / 1024).toFixed(2) ,
            type: req.file.mimetype.split('/').pop()
        }); 
    }
);

module.exports = routes;
