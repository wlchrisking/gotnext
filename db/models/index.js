const User = require('./User');
const Game = require('./Game');
const db = require('../');

// User.hasMany(Game);
// Game.belongsTo(User);

// db.sync( { force: true } );

db.sync( ( {err} ) => {
  if (err) {
    console.log('Models-index.js: Sync Error!');
  }
  console.log('Models-index.js: Sync Success!');
});

module.exports = { User, Game };