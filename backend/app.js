const express = require('express');
const mongoose=require('mongoose');
const path=require('path');
const Sign = require('./signup.js');
const app = express();
const cors = require('cors'); 
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static(__dirname + '/../frontend/public'));
app.use(express.static(path.join(__dirname, '../frontend/src')));
app.use(cors());

const PORT=5000;
mongoose.connect("mongodb://127.0.0.1:27017/Chords",{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running on port ${PORT}`)
    })
})
.catch((err)=>console.log(err));

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const existingUser = await Sign.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username already in use' });
  }
  const newSign = new Sign({ username, password });
  try {
    await newSign.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
});