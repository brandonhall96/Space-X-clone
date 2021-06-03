const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000;

//-------Middleware --------------------------------

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//------Mongoose --------------------------------Mongoose--------------------------
mongoose.connect('mongodb://localhost/spacexClone', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true})

const db = mongoose.connection;
db.once('open', () =>{
    console.log(`Connnected to MongoDB on ${db.host}:${db.port}`)
})

db.on('error', () => {
    console.log(`MongoDB error`)
})




//--------Routes--------------------------------------Routes------------

app.get('/', (req, res) => {
    res.json({message: 'SEI 412 Space X Clone'})
});


app.listen(PORT, () => {
    console.log(`You are now jamming out to ${PORT}`)
})