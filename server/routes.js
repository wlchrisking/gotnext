const express = require('express');
const Router = express.Router();
const passport = require('../config/passport/passport.js');
var LocalStrategy = require('passport-local').Strategy;
const UserController = require('./controllers/UserController.js');
const MapContoller = require('./controllers/MapController.js');
const GamesController = require('./controllers/GamesController.js');
const jwt = require('jsonwebtoken');
const tokenExists = require('./helpers/helpers.js')



// [[ U S E R ]]

Router.route('/user/login')
  .post(UserController.Login);

Router.route('/user/logout')
  .get(UserController.Logout);

Router.route('/user/signup')
  .post(UserController.Signup);

//created a test route to check if authenticated when logged in/out
Router.route('/test')
  .get((req, res) => {
    console.log('is authenticated', req.isAuthenticated());
    console.log('req.user is', req.user);
    if (req.session) {
      console.log('req.session is', req.session);
    }
    res.send();
  });

// [[ M A P ]]

// on componentDidMount  
Router.route('/map/fetch/zip/:zip')
  .get(MapContoller.Fetch);


// [[ G A M E ]]

// on componentDidMount
Router.route('/games/fetch/:zip')
  .get(GamesController.FetchList);



// user view
Router.route('/games/fetch/user/:username')
  .get(GamesController.FetchUserList)

Router.route('/games/fetch/options/:gameId')
  .get(GamesController.FetchOptions)

Router.route('/games/update')
  .put(GamesController.UpdateGame)

Router.route('/games/delete')
  .delete(GamesController.DeleteGame)


// below is middleware to check if token exists on client request. 
// all routes below this function must have a token.
Router.use(tokenExists);

Router.route('/games/create')
.post(GamesController.CreateGame);



module.exports = Router;