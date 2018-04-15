var TwitterStrategy  = require('passport-twitter').Strategy;
var User = require('../models/User');
var config = require('../config/database');
var configAuth = require('./auth');

module.exports = function(passport){

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
   
    passport.use(new TwitterStrategy(
    {
        consumerKey     : configAuth.twitterAuth.consumerKey,
        consumerSecret  : configAuth.twitterAuth.consumerSecret,
        userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
        callbackURL     : configAuth.twitterAuth.callbackURL        
    }, function(token, tokenSecret, profile, done) {
        User.findOrCreate(token, tokenSecret, profile, (err, user)=>{
            return done(err,user);
        });       
    }));

    

}