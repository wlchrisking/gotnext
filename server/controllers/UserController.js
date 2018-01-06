const {User} = require('../../db/models');
const axios = require('axios');
const bcrypt = require('bcrypt');

UserController = {
  
  Login: (req, res) => {
    // bcrypt compare
    User.find({
      where: {
        email: req.body.email
      }
    })
      .then( (userdata) => {
        bcrypt.compare(req.body.password, userdata.dataValues.password, function(err, result) {
          // res == true
          if (err) {
            console.log('error signing up');
            res.status(500);
          } else if (!!result) {
            console.log('successful sign in');
            res.status(201);
          } else {
            console.log('unsuccessful sign in');
            res.status(500);
          }
        });
      })
      .catch( (err) => {

      })
  },

  Logout: (req, res) => {
    
  },

  Signup: (req, res) => {
    console.log('this is req.body', req.body);
    // check if email already exists
    bcrypt.hash(req.body.password, 10, ( err, hash ) => {
      if (err) {
        console.log('sign up error', err);
      } else {
        User.findOrCreate({
          where: {
            email: req.body.email
          },
          defaults: {
            password: hash
          }
        })
          .spread( (result, created) => {
            if (!created) {
              console.log('Email already taken');
              res.status(200).send(created);
            } else {
              console.log('Sign up successful!');
              res.status(200).send(result);
            }
          })
      }
    })
  }
}

module.exports = UserController;