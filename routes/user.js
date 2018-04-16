var express = require('express');
var router = express.Router();
var User = require('../models/User');

module.exports = function(passport){
  console.log(passport);
  router.post('/signup', function(req, res) {
    debugger;    
    if (!req.body.username || !req.body.password) {
      res.json({success: false, msg: 'Please pass username and password.'});
    } else {
      var newUser = new User({
        username: req.body.username,
        password: req.body.password
      });
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
  });

  router.post('/signin', function(req, res) {
    user.findByCredentials(req.body.username, req.body.password).then((user)=>{
        res.send(user);     
    })
    .catch((e)=>{        
        res.status(500).send(e.message);
    })
  });

router.get('/test',function(res, res){
  res.send('test');
})

router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function(req, res) {    
    res.json(req.user);
  });

  return router;
}
