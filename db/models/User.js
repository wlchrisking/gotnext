const db = require('../');
const Sequelize = require('sequelize');

const User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});
console.log('touched User model');

module.exports = User;