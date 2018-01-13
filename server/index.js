// require('dotenv').config();
const express = require('express');
const passport = require('passport');
const path = require('path');
const parser = require('body-parser');
const db = require('../db');
const Router = require('./routes');
const User = require('../db/models/User');
const jwt = require('jsonwebtoken');
const validator = require('express-validator')

const app = express();
// const PORT = process.env.PORT;

app.use(validator());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/public')));

app.use((req, res, next) => {
    console.log(req.method, req.path, res.statusCode, req.body);
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

app.listen(PORT, () => {console.log('Listening to PORT:', PORT)});