const express = require('express');
const app = express();
const connectDb = require('./config/db');
var cors = require('cors');

// const {loadModel} = require('./model');

app.use(express.json());
connectDb();

app.use(express.json({ extended: false }));
app.use(cors());

app.get('/', (req, res) => res.send('API running'));
const PORT = process.env.PORT || 5000;
// to predict the model's output we have to put the image into this which wil lead to the final 
// output and then we have to send the reposnse...

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
// app.use('/api/predict',require('./routes/api/predict'));




app.get('/',(req,res)=>{
    console.log("Server Set up done");
})
app.listen(PORT,()=>{
    console.log(`app is listening to port ${PORT}, http://localhost:${PORT}`);
})
