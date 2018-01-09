const {
  User
} = require('../../db/models');
const axios = require('axios');
const bcrypt = require('bcrypt');
const passport = require('../../config/passport/passport.js');
const LocalStrategy = require('passport-local').Strategy;


/*
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/
UserController = {
  Login: (req, res, next) => {
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
  },

  Logout: (req, res) => {

  },

  Signup: (req, res, next) => {
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
};

module.exports = UserController;