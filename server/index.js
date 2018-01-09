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

app.use((req, res, next) => {
    console.log('req.user is', req.user);
    if (req.session) {
        console.log('req.session.passport.user is', req.session.passport.user);
    }
    console.log(req.method, req.path, res.statusCode);
    next();
});

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