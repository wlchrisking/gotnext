const {User} = require('../../db/models');
const axios = require('axios');

UserController = {
  
  Login: (req, res) => {

  },

  Logout: (req, res) => {
    
  },

  Signup: (req, res) => {
    console.log('this is req.body', req.body);
    User.create({
      email: req.body.email,
      password: req.body.password
    })
    .then( (res) => {
      console.log('res', res);
    })
    .catch( (err) => {
      console.log('err', err);
    })
  }
}

module.exports = UserController;