const db = require('../server.js');
const Sequelize = require('sequelize');

const User = db.define('User', {
    email: Sequelize.STRING
});

module.exports = User;