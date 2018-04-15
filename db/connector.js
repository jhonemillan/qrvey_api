const Promise = require('bluebird');
var mongoose = require('mongoose');
var config = require('../config/database');

mongoose.Promise = Promise;
mongoose.connect(config.database, { promiseLibrary: Promise })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));