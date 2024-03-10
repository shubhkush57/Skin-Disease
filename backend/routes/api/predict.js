
const express = require('express');
const router = express.Router();
router.post('/predict',async(req,res)=>{
  try {
    // Perform prediction using the loaded model
    const model = await tf.loadLayersModel('./model.h5');
    const prediction = model.predict(req.body.file);
    res.json(prediction);
  } catch (error) {
    console.error('Prediction error:', error);
    res.status(500).json({ error: 'Prediction failed' });
  }
});
// const multer = require('multer');
// const controller = require('../../controllers/PredictController');

// const filename = `ISIC_0029314.jpg`;
// console.log(filename);
// // configure multer
// const storage = multer.diskStorage({
//   destination: (req, file, callback) => {
//     callback(null, './public/images');
//   },
//   filename: (req, file, callback) => {
//     callback(null, filename);
//   },
// });

// function imageFileFilter(req, file, cb){
//   // Allowed ext
//   const filetypes = /jpeg|jpg|png|gif/;
//   // Check ext
//   const extname = file.originalname.match(filetypes);
//   // Check mime
//   const mimetype = filetypes.test(file.mimetype);

//   if(mimetype && extname){
//     return cb(null,true);
//   } else {
//     cb('Error: Images Only!');
//   }
// }

// const upload = multer({ storage, fileFilter: imageFileFilter });
// let uploadSingle = upload.single('file');
// router.post('/', async (req, res) => {
//     console.log("dsfsdfsdfsd");
//     await uploadSingle(req, res, (err) => { // call as a normal function
//       console.log(req.body);
//       if (err) {
//         console.log('erorrs there');
//         return res.status(400).send({success: false, message: "Only Images are allowed!"});;
//       }
        

//       const file = req.file;
//       if (!file) {
//         return res.status(400).send({success: false, message: "Please Upload A File!"});;
//       }
//       req['filename'] = filename;
//       console.log("Erorr is here");
//       controller.makePredictions(req, res);
//     })
//   });

module.exports = router;

