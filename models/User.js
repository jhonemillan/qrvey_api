var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var _ = require('lodash');
var bcrypt = require('bcryptjs');
const validator = require('node-mongoose-validator');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    id: {type: String},
    username: {type: String},
    token:{type: String}      
  });

UserSchema.statics.findOrCreate = function(token, tokenSecret, profile, done){
    debugger;
    let User = this;    
    return User.findOne({'id': profile.id}).then((user)=>{         
        if(!user){            
            let user = new User();
            user.username = profile.username;
            user.id = profile.id;
            user.token = token;

            user.save(function(error, savedUser) {
                if (error) {
                      console.log(error);
                }
                return done(error, savedUser);
          });
        }

        return new Promise((resolve, reject)=>{
           resolve(user);
        });
    });
}

module.exports = mongoose.model('user',UserSchema,'users');