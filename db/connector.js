var mongoose = require('mongoose');
var config = require('../config/database');

mongoose.connect('mongodb://127.0.0.1/qrvey');
mongoose.Promise = global.Promise;

module.exports = {
    mongoose: mongoose
}