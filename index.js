const bodyparser = require('body-parser');
const express = require('express');
var path = require('path');
const helmet = require('helmet')
const cors = require('cors');
const logger = require('morgan');
const favicon = require('serve-favicon');
var mongoose = require('mongoose');
const config = require('./config/database');
const passport = require('passport');
const app = express();
const port = process.env.port || 3000;

mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird'), auto_reconnect: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

  
  app.use(logger('dev'));
  app.use(cors());
  app.use(bodyparser.json());
  app.use(bodyparser.urlencoded({ extended: false }));
  app.use(helmet());
  app.use(express.static(path.join(__dirname, 'client/TimeTracker/dist')));

  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

  
//   var expressSession = require('express-session');
//   app.use(expressSession({secret: 'mySecret'}));
//   app.use(passport.initialize());
//   app.use(passport.session());

//   // Initialize Passport
// var initPassport = require('./config/init');
// initPassport(passport);

// //routes
var togglRoute = require('./routes/toggl');
var projectRoute = require('./routes/project');
app.use('/toggl', togglRoute);
app.use('/project', projectRoute);

app.listen(port, ()=>{
    console.log('Se conecta al puerto ' + port)
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

module.exports = app;    