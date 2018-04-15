var mongoose = require('mongoose');
var config = require('../config/database');

mongoose.connect('mongodb://localhost/qrvey');
mongoose.Promise = global.Promise;

module.exports = {
    mongoose: mongoose
}