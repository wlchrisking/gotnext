const axios = require('axios');

GamesController = {

  CreateGame: (req, res) => {
    // this function only get called if a user has a token.
    res.send({message:'you made a game!'})
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
