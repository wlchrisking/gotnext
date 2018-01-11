const axios = require('axios');
const { User, Game } = require('../../db/models');

GamesController = {

  CreateGame: (req, res) => { // this function only get called if a user has a token.
    // console.log('this is req.body', req.body);
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
    console.log('this is req.params', req.params);
    return User.find({
      where: {
        username: req.params.username
      }
    })
      .then( (grabbedUser) => {
        console.log('this is grabbedUser', grabbedUser);
        return Game.findAll({
          where: {
            UserId: grabbedUser.dataValues.id
          }
        })
          .then( (foundGames) => {
            console.log('these are the found games', foundGames);
            res.send(foundGames);
          })
          .catch( (err) => {
            console.log('could not find game', err);
          })
      })
      .catch( (err) => {
        console.log('could not grab user', err);
      })
  },

  FetchOptions: (req, res) => {
    
  },

  UpdateGame: (req, res) => {
    console.log('req.body', req.body);
    console.log('SHOW ME THE ID', req.body.id);
    Game.update(
      { address: req.body.address, competitive: req.body.competitive, coordinates: JSON.stringify(req.body.coordinates), end: req.body.end, max: req.body.max, notes: req.body.notes, sport: req.body.sport, start: req.body.start },
      { where: { id: req.body.id } }
    )
      .then( (data) => {
        console.log('Updated game: ', data)
        res.status(204).send(data)
      })
      .catch( (err) => {
        console.log('error updating game: ', err)
        res.status(500).send(err);
      })
  },

  DeleteGame: (req, res) => {

  }
  
}

module.exports = GamesController;
