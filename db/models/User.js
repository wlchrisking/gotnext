const db = require('../');
const Sequelize = require('sequelize');

const User = db.define('User', {
  email: Sequelize.STRING,
  password: Sequelize.STRING
});
console.log('touched User model');

module.exports = User;