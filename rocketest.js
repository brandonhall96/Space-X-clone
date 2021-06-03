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
    "company": "SpaceX",
}`


let obj = Json.parse(rocketOne)

createRocket(obj)
