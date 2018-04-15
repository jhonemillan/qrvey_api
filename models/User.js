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
    password: {
          type: String,
          required: true
      }
  });

  User.path('email').validate(validator.isEmail(), 'Please provide a valid email address');

  User.pre('save',function(next){
    var user = this;
    if(!user.isModified('password')){
        return next();
    }

    // hash the password along with our new salt
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            user.password = hash; 
            next();
        });
    });
});

User.statics.findByCredentials = function(email, pwd){    
    let User = this;    
    return User.findOne({email}).then((user)=>{         
        if(!user){            
            return Promise.reject(new Error('Usuario no existe'));
        }

        return new Promise((resolve, reject)=>{
            bcrypt.compare(pwd, user.password).then((res)=>{
                if(res){
                    resolve(user);
                }else{                
                    reject(new Error('incorrect password'));
                }
            }).catch((e)=>{
                console.log(e);
            });
        });
    });
}

module.exports = mongoose.model('user',User,'users');