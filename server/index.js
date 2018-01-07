require('dotenv').config();
const express = require('express');
const passport = require('passport');
const path = require('path');
const parser = require('body-parser');
const db = require('../db');
const Router = require('./routes');
const User = require('../db/models/User');

const app = express();
const PORT = process.env.PORT;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/public')));

app.use(require('express-session')({
    secret: 'brian deleted our app',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', Router);
// require('../config/passport/passport.js')(passport, User);


app.listen(PORT, () => {console.log('Listening to PORT:', PORT)});