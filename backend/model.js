// model.js
const tf = require('@tensorflow/tfjs');
const fs = require('fs');

async function loadModel() {
  const model = await tf.loadLayersModel('./model.h5');
  return model;
}

module.exports = { loadModel };