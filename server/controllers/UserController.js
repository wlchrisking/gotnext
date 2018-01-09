const {User} = require('../../db/models');
const axios = require('axios');
const bcrypt = require('bcrypt');
const passport = require('../../config/passport/passport.js');
const LocalStrategy = require('passport-local').Strategy;

//The routes here for login, logout, and signup are working properly now.
//need to confirm sessions is working properly.
UserController = {
  Login: (req, res, next) => {
    if (req.user) {
      res.status(200).send({message: 'user is already logged in, let them know'});
    } else {
      passport.authenticate('local-login', function (err, user, info) {
        if (err) {
          return next(err); // will generate a 500 error
        }
        if (!user) {
          return res.status(409).send({
            errMsg: info.errMsg
          });
        }
        req.login(user, function (err) {
          if (err) {
            console.error(err);
            return next(err);
          }
          return res.send({
            message: 'log-in successful!'
          });
        });
      })(req, res, next);
    }
  },

  Logout: (req, res, next) => {
    if (req.user) {
      req.logout();
      console.log('is auth after logout?', req.isAuthenticated());
      res.status(200).send({message: 'logged out'});
    } else {
      res.status(200).send({message: 'not logged in in the first place, redirect to homepage'});
    }
  },

  Signup: (req, res, next) => {
    if (req.user) {
      res.status(200).send({message: 'user is already logged in, let them know'});
    } else {
      passport.authenticate('local-signup', function (err, user, info) {
        if (err) {
          return next(err); // will generate a 500 error
        }
        if (!user) {
          return res.status(409).send({
            errMsg: info.errMsg
          });
        }
        req.login(user, function (err) {
          if (err) {
            console.error(err);
            return next(err);
          }
          return res.send({
            message: 'sign-up successful! Established a login session'
          });
        });
      })(req, res, next);
    }
  }
};

module.exports = UserController;