const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spacexClone', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

const Ship = require('./models/ship');


const createShip = async (obj) => {
    Ship.create(obj, (err, ship) => {
        console.log(ship)
    })
}

const shipOne = {
    "legacy_id": "GOPURSUIT",
    "model": null,
    "type": "Cargo",
    "roles": [
      "Support Ship",
      "Fairing Recovery"
    ],
    "imo": 9458884,
    "mmsi": 367191410,
    "abs": 1201189,
    "class": 7174230,
    "mass_kg": 502999,
    "mass_lbs": 1108925,
    "year_built": 2007,
    "home_port": "Port Canaveral",
    "status": "",
    "speed_kn": null,
    "course_deg": null,
    "latitude": null,
    "longitude": null,
    "last_ais_update": null,
    "link": "https://www.marinetraffic.com/en/ais/details/ships/shipid:439594/mmsi:367191410/imo:9458884/vessel:GO_PURSUIT",
    "image": "https://i.imgur.com/5w1ZWre.jpg",
    "launches": [
      "5eb87d18ffd86e000604b365",
      "5eb87d19ffd86e000604b366",
      "5eb87d1bffd86e000604b368",
      "5eb87d1effd86e000604b36a"
    ],
    "name": "GO Pursuit",
    "active": false

}

// let obj = JSON.parse(shipOne)

createShip(shipOne);