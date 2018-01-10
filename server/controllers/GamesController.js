const axios = require('axios');
const { User, Game } = require('../../db/models');

GamesController = {

  CreateGame: (req, res) => { // this function only get called if a user has a token.
    console.log('this is req.body', req.body);
    return User.find({
      where: {
        username: req.body.user
      }
    })
      .then( (foundUser) => {
        if (!foundUser) {
          res.sendStatus(500);
        }
        const uid = foundUser.dataValues.id;
        Game.create({
          sport: req.body.sport,
          max: req.body.max,
          start: req.body.start,
          end: req.body.end,
          competitive: req.body.competitive,
          notes: req.body.notes,
          address: req.body.address,
          coordinates: JSON.stringify(req.body.coordinates),
          UserId: uid
        })
          .then( () => {
            console.log('Successful game creation');
            res.sendStatus(201);
          })
          .catch( (err) => {
            console.log('Error creating game', err);
            res.sendStatus(500);
          })
      })
      .catch( (err) => {
        console.log('error looking for user', err)
        res.sendStatus(500);
      });
  },

  FetchList: (req, res) => {
    
  },

  FetchUserList: (req, res) => {
    
  },

  FetchOptions: (req, res) => {
    
  },

  UpdateGame: (req, res) => {
    
  },

  DeleteGame: (req, res) => {

  }
  
}

module.exports = GamesController;
