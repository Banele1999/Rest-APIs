const express = require('express');
const multer = require('multer');
const cors = require("cors");
const connection = require ('./database/config-db')

const app = express();
app.use(cors({origin: "*"}));
const port = 3000; // Change this to your desired port number

/*======================================================= */
const countries = require('./routes/countries')

app.use('/',countries)
/*======================================================= */





// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where uploaded files will be stored
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    // Specify the filename for the uploaded file
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

// Define a route for file uploads
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // You can access the uploaded file information using req.file
  const { filename, size } = req.file;

  // You can perform further processing here

  res.status(200).json({ filename, size });
});

/*======================================================= */
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




































































// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const bodyParser = require('body-parser');

// const app = express();
// app.use(cors({origin: "*"}));
// app.use(bodyParser.json());
// const port = 3000;


// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
//   }
// })

// var upload = multer({ storage: storage });  //.single('file')


// // app.use(express.static('uploads'))

// // app.post('/file', (req, res) => {
// //   upload(req, res, (err) => {
// //     if(err){
// //       console.log(err)
// //     }else{
// //       console.log("uploaded")
// //     }
    
// //   })
// //     res.send("success")
// // })




// app.listen(3000, () => {
//   console.log(`The server started on port ${port}`);
// })

// // const storage = multer.diskStorage({
// //     destination: (req, file, callBack) => {
// //       callBack(null, 'uploads')
// //     },
    
// //     filename: (req, file, callBack) => {
// //       callBack(null, `hackasity_${file.originalname}`)
// //     }
// // })
  
// // const upload = multer({ storage: storage })

// // // let upload = multer ({dest: 'uploads/'})

// // app.post('/file', upload.single('file'), (req, res, next) => {
// //   const file = req.file
// //   console.log(file.filename);

// //   if(!file){
// //     const error = new Error('No file')
// //     error.httpStatusCode = 400
// //     return next(error)
// //   }
// //   res.send(file);

// // })


