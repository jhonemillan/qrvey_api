var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var _ = require('lodash');
var bcrypt = require('bcryptjs');
const validator = require('node-mongoose-validator');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
          type: String,
          unique: true,
          required: true
      },   
    twitter:{
        id: {type: String},
        token:{type: String}  
    }
  });

  UserSchema.path('email').validate(validator.isEmail(), 'Please provide a valid email address');

//   UserSchema.pre('save',function(next){
//     var user = this;
//     if(!user.isModified('password')){
//         return next();
//     }

//     // hash the password along with our new salt
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             user.password = hash; 
//             next();
//         });
//     });
// });

UserSchema.statics.findOrCreate = function(token, tokenSecret, profile, done){
    let User = this;    
    return User.findOne({email}).then((user)=>{         
        if(!user){            
            let user = new User();
            user.email = profile.email;
            user.twitter.id = profile.id;
            user.twitter.token = token;

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