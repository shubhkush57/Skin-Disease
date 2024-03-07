const express = require('express');
const app = express();

const path = require('path');
const {loadModel} = require('./model');
app.use(express.json());
app.use(express.static('public'));

let model;
const PORT = 8000;
// to predict the model's output we have to put the image into this which wil lead to the final 
// output and then we have to send the reposnse...
app.get('/predict', async (req, res) => {
  if (!model) {
    model = await loadModel();
  }

  const input = req.query.input; // Replace this with your input processing logic
  const inputTensor = tf.tensor2d(input, [1, inputShape]); // Replace inputShape with your model's input shape

  try {
    const predictions = model.predict(inputTensor);
    res.json({ predictions: predictions.dataSync() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while predicting' });
  }
});

app.get('/',(req,res)=>{
    console.log("Server Set up done");
})
app.listen(PORT,()=>{
    console.log(`app is listening to port ${PORT}, http://localhost:${PORT}`);
})
