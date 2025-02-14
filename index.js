var express = require('express');
var cors = require('cors');
const multer  = require('multer')
const upload = multer({ dest: './public/data/uploads/' })
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single("upfile"), function (req, res) {
  const { originalname, size, mimetype } = req.file;

  // Respond with file information
  res.json({
    name: originalname,
    size: size,
    type: mimetype,
  });
})




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
