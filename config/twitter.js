var TwitterStrategy  = require('passport-twitter').Strategy;
var User = require('../models/User');
var configAuth = require('./auth');

module.exports = function(passport)
{    
    passport.use('twitter', new TwitterStrategy(
    {
        consumerKey     : configAuth.twitterAuth.consumerKey,
        consumerSecret  : configAuth.twitterAuth.consumerSecret,        
        callbackURL     : configAuth.twitterAuth.callbackURL,
        userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"        
    }, function(token, tokenSecret, profile, done) {

        process.nextTick(function() {
            User.findOrCreate(token, tokenSecret, profile, (err, user)=>{
                return done(err,user);
            });       
        });        
    }));
}