var Joi = require('joi');
 
module.exports = {
  //this one is for login and signup
  Login: {
    body: {
      username: Joi.string().email().required(),
      password: Joi.string().min(3).max(30).required()
    }
  },

  FetchList: {
    params: {
      zip: Joi.string().min(5).max(5).required()
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
      gameId: Joi.string().required()
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