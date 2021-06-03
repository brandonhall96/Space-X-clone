const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/spacexClone', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const db = mongoose.connection;

const Rocket = require('./models/rocket')