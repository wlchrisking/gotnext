const {User} = require('../../db/models');
const axios = require('axios');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


/*
var User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
*/
UserController = {
  
  Login: (req, res) => {
    User.find({
      where: {
        username: req.body.username
      }
    })
      .then( (userdata) => {
        console.log('found user data');
        const usr = {
          username: req.body.username,
          password: userdata.dataValues.password
        };
        console.log('this is our user', usr);
        passport.use(new LocalStrategy(
        //   {
        //   passReqToCallback: true
        // },
          async (username, password, done) => {
            console.log('entered passport');
            // process.nextTick(() => {
            //   findUser(username, (err, foundUser) => {
            //     // Error
            //     if (err) {
            //       return done(err)
            //     }
            //     // User not found
            //     if (!username) {
            //       console.log('user not found');
            //       return done(null, false)
            //     }
            //     // Use hashed password
            //     bcrypt.compare(password, req.body.password, ( err, isValid ) => {
            //       if (err) {
            //         console.log('err in compare');
            //         return done(err);
            //       }
            //       if (!isValid) {
            //         console.log('incorrect password');
            //         return done(null, false);
            //       }
            //       console.log('correct log in');
            //       return done(null, user);
            //     });
            //   });
            // })
          }
      )
    )})
    .catch( (err) => {
      console.log('err!!!');
    })
  },
    // // bcrypt compare
    // User.find({
    //   where: {
    //     email: req.body.email
    //   }
    // })
    //   .then( (userdata) => {
    //     bcrypt.compare(req.body.password, userdata.dataValues.password, function(err, result) {
    //       // res == true
    //       if (err) {
    //         console.log('error signing up');
    //         res.status(500);
    //       } else if (!!result) {
    //         console.log('successful sign in');
    //         res.status(201);
    //       } else {
    //         console.log('unsuccessful sign in');
    //         res.status(500);
    //       }
    //     });
    //   })
    //   .catch( (err) => {

    //   })
  // },

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
            username: req.body.username
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