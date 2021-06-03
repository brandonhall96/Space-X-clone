const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spacexClone', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

const Rocket = require('./models/rocket')

const createRocket = async(obj) => {
    Rocket.create(obj, (err, rocket) => {
        console.log(rocket)
    })
}



const rocketOne = `{
    "name": "Falcon Heavy",
    "type": "rocket",
    "active": true,
    "stages": 2,
    "boosters": 2,
    "cost_per_launch": 90000000,
    "success_rate_pct": 100,
    "first_flight": "2018-02-06",
    "country": "United States",
    "company": "SpaceX"
}`


let obj = JSON.parse(rocketOne)

// createRocket(obj);

const fetchRocket = async(_id) => {
    Rocket.find({_id}, (err, rocket) => {
        if (err) console.log(err)
        console.log(rocket)
        res.json(rocket)
    })
}

// fetchRocket('60b8fdd978d68f5f4c20d91f');

const fetchAllRockets = async() => {
    const result = await Rocket.find();
    console.log(result)
    res.json(result)
}

// fetchAllRockets();


const updateRocket = async(_id, name) => {
    Rocket.findOneAndUpdate({_id}, {name}, {new: true}, (err, rocket) => {
        console.log(rocket)
        //res.redirect(`/rocket/${_id}`)
    })
}

// updateRocket('60b90198e3ab0d618776dde8', 'Thic Boi 3000');

const removeRocket = async(_id) => {
    Rocket.findByIdAndRemove({_id}, (err, removed) => {
        if(err) console.log(err)
        console.log(removed)
    })
    console.log('Ba Bye')
}

// removeRocket('60b8fdd978d68f5f4c20d91f');





