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


//edits
var expressJoi = require('express-joi-validator');
var Joi = require('joi');
var valSchema = require('./validation/valSchema');

app.use(expressJoi(valSchema.login))

app.use(function (err, req, res, next) {
    if (err.isBoom) {
         return res.status(err.output.statusCode).json(err.output.payload);
    }
});

//edits
app.use('/api', Router);

app.listen(PORT, () => {console.log('Listening to PORT:', PORT)});