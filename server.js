const express = require('express');
const fileUpload = require('express-fileupload');
const mergeImg = require('merge-img');
const path = require('path');

const app = express();

//const cors = require('cors');
//app.use(cors({origin: 'http://localhost:8000'}));

app.use(fileUpload());

app.use(express.static(__dirname + '/www'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

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

app.listen(3000, () => console.log("Backend upload service started on port 3000"));
