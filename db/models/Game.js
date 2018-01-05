const db = require('../');
const Sequelize = require('sequelize');

const Game = db.define('Game', {
    sport: Sequelize.STRING,
    max: Sequelize.STRING, // or INTEGER?
    start: Sequelize.STRING, // '12:00'
    end: Sequelize.STRING,
    competitive: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    },
    notes: Sequelize.TEXT,
    address: Sequelize.STRING,
    coordinates: Sequelize.STRING
});

module.exports = Game;