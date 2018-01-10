var Joi = require('joi');
 
module.exports = {
  //this one is for both login and signup
  Login: {
    body: {
      username: Joi.string().email().required(),
      password: Joi.string().min(3).max(30).required()
    }
  },

  Fetch: {
    params: {
      zip: Joi.number().integer().min(10000).max(99999).required()
    }
  },
  
  CreateGame: {
    body: {
      //fill out once we know the field names, what's required, format, etc.
    }
  },

  FetchUserList: {
    params: {
      username: Joi.string().email().required()
    }
  },

  FetchOptions: {
    params: {
      gameId: Joi.number().integer().min(1).required()
    }
  },

  UpdateGame: {
    body: {
      //fill out once we know the field names, what's required, format, etc.
    }
  },

  DeleteGame: {
    body: {
      //fill out once we know the field names, what's required, format, etc.
    }
  }

};