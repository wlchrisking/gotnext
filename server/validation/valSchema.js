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
  
  Game: {
    body: {
      address: Joi.string().max(100).required(),
      sport: Joi.string().max(100).required(),
      max: Joi.number().integer().max(500).required(),
      start: Joi.string().length(6).required(), //format for start time is eg "0704PM"
      end: Joi.string().length(6).required(),
      competitive: Joi.boolean().required(),
      notes: Joi.string().max(500),
      coordinates: Joi, //not explicitly requiring it because this is already being required by the client.
      user: Joi,
      token: Joi
    }
  },

  GameUpdate: {
    body: {
      address: Joi.string().max(100).required(),
      sport: Joi.string().max(100).required(),
      max: Joi.number().integer().max(500).required(),
      start: Joi.string().length(6).required(), //format for start time is eg "0704PM"
      end: Joi.string().length(6).required(),
      competitive: Joi.boolean().required(),
      notes: Joi.string().max(500),
      coordinates: Joi, //not explicitly requiring it because this is already being required by the client.
      user: Joi,
      token: Joi,
      id: Joi
    }
  },

};