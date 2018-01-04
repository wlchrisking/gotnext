require('dotenv').config();
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const Router = require('./routes.js');

const app = express();
const PORT = process.env.PORT;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/public')));
app.use('/api', Router);

app.listen(PORT, () => {console.log('Listening to PORT:', PORT)});