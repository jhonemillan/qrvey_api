const bodyparser = require('body-parser');
const express = require('express');
const helmet = require('helmet')
const cors = require('cors');
const logger = require('morgan');
const favicon = require('serve-favicon');
const conn = require('./db/connector');
const config = require('./config/database');
const passport = require('passport');
const session = require('express-session')
const app = express();
const port = process.env.port || 3000;
//routes

app.use(logger('dev'));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(helmet());
app.use(passport.initialize());
app.set('trust proxy', 1);

app.use(session({
  secret: config.secret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, ()=>{
    console.log('Se conecta al puerto ' + port)
});

// Error Handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
});

module.exports = {app};    