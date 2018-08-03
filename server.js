const express = require('express');
const fileUpload = require('express-fileupload');
const mergeImg = require('merge-img');

const app = express();

// the root endpoint / serves index.html
app.use(express.static(__dirname + '/www'));

// bower dependency (Dropzone) needs to be accessible too
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

app.use(fileUpload());

// upload endpoint: takes multiples image files, combines them and returns a dataURI
app.post('/upload', function(req, res) {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const files = Object.values(req.files).map(({data}) => data);
  mergeImg(files)
  .then((img) => {
    img.getBase64("image/png", (e, data) => {
      res.set('Content-Type', 'image/png');
      res.send(data);
    });
  });
});

app.listen(3000, () => console.log("Server started on port 3000"));
