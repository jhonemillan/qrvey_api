var mongoose = require('mongoose');
var _ = require('lodash');

var Schema = mongoose.Schema;

var TogglSchema = new Schema({
    id_profile: {type: String},
    task: {type: String},
    horas:{type: Number},
    minutos: {type: Number},
    segundos: {type: Number}
  });

  module.exports = mongoose.model('toggl',TogglSchema,'toggl');