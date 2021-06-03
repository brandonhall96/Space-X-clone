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

//------Models----------------------------------Models--------------------
const Roadster = require('./models/roadster');
const Rocket = require('./models/rocket');



//--------Routes--------------------------------------Routes------------

app.get('/', (req, res) => {
    res.json({message: 'SEI 412 Space X Clone'})
});

//------Roadster----------------------------------Roadster------------------------

app.get('/roadster', (req, res) => {
    const fetchAllRoadsters = async() => {
        const result = await Roadster.find();
        console.log(result)
        res.json(result)
    }
    
    fetchAllRoadsters();
})

app.get('/roadster/:id', (req, res) => {
    let _id = req.params.id;
    const fetchRoadster = (_id) => {
        Roadster.findOne({_id}, (err, roadster) => {
            if (err) console.log(err)
            console.log(roadster)
            //response with Json
            res.json(roadster)
        })
    }
    fetchRoadster(_id);
})

//-----------Rocket---------------------------Rocket-------------------Rocket

app.get('/rocket', (req, res) => {
    const fetchAllRockets = async() => {
        const result = await Rocket.find();
        console.log(result)
        res.json(result)
    }
    fetchAllRockets();
})

app.get('/rocket/:id', (req, res) => {
    let _id = req.params.id;

    const fetchRocket = async(_id) => {
        Rocket.findOne({_id}, (err, rocket) => {
            if (err) console.log(err)
            // console.log(rocket)
            res.json(rocket)
        })
    }
    fetchRocket(_id)


})
    
    
    
    
    


    
    


app.listen(PORT, () => {
    console.log(`You are now jamming out to ${PORT}`)
})