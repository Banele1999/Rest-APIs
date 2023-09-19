const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bodyParser = require('body-parser');

const app = express();
app.use(cors({origin: "*"}));
app.use(bodyParser.json());
const port = 3000;

app.listen(3000, () => {
  console.log(`The server started on port ${port}`);
})

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, 'uploads')
    },
    
    filename: (req, file, callBack) => {
      callBack(null, `hackasity_${file.originalname}`)
    }
})
  
const upload = multer({ storage: storage })

// let upload = multer ({dest: 'uploads/'})

app.post('/file', upload.single('file'), (req, res, next) => {
  const file = req.file
  console.log(file.filename);

  if(!file){
    const error = new Error('No file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(file);

})


