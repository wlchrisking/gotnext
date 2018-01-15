const passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const {User} = require('../../db/models');

passport.serializeUser(function (user, done) {
  console.log('this is user', user);
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  console.log('deserialuser', id);
  User.findOne({
      where: {
        id: id
      }
    })
    .then((userdata) => {
      done(null, userdata);
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
});

passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function (req, username, password, done) {
    process.nextTick(function () {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          console.log('sign up error', err);
        } else {
          User.findOrCreate({
              where: {
                username: req.body.username
              },
              defaults: {
                password: hash
              }
            })
            .spread((result, created) => {
              if (!created) {
                console.log('Email already taken');
                return done(null, false, {
                  errMsg: 'email already exists'
                });
              } else {
                console.log('Login successful!', result.dataValues);
                return done(null, result.dataValues);
              }
            });
        }
      });
    });
  }));

passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  },
  function (req, username, password, done) {
    process.nextTick(function () {
      User.findOne({
          where: {
            username: req.body.username
          }
        })
        .then((userdata) => {
          console.log('userdata', userdata);
          if (userdata === null) {
            return done(null, false, {errMsg: 'user does not exist'});
          } else {
            bcrypt.compare(req.body.password, userdata.dataValues.password, function (err, result) {
              if (err) {
                console.log('error signing up', err);
              } else if (!!result) {
                return done(null, userdata);
              } else {
                return done(null, false, {errMsg: 'invalid password'});
              }
            });
          }
        })
        .catch((err) => {
          done(null, false, {errMsg: 'user not found'});
        });
    });
  }));

module.exports = passport;