var mongoose = require('mongoose');
var _ = require('lodash');
var Schema = mongoose.Schema;

var projectSchema = new Schema({
    name: {type: String},
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('project',projectSchema,'projects');