const express = require('express');
const Router = express.Router();
const passport = require('../config/passport/passport.js');
var LocalStrategy = require('passport-local').Strategy;
const UserController = require('./controllers/UserController.js');
const MapContoller = require('./controllers/MapController.js');
const GamesController = require('./controllers/GamesController.js');
const jwt = require('jsonwebtoken');
const tokenExists = require('./helpers/helpers.js')
var expressJoi = require('express-joi-validator');
var Joi = require('joi');
var valSchema = require('./validation/valSchema');

// [[ U S E R ]]

Router.route('/user/login')
  .all(expressJoi(valSchema.Login))
  .post(UserController.Login);

Router.route('/user/logout')
  .get(UserController.Logout);

Router.route('/user/signup')
  .all(expressJoi(valSchema.Login))
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
Router.route('/map/fetch')
  // .all(expressJoi(valSchema.Fetch))
  .get(MapContoller.Fetch);


// [[ G A M E ]]

// on componentDidMount
Router.route('/games/fetch/:zip')
  .all(expressJoi(valSchema.Fetch))
  .get(GamesController.FetchList);

Router.route('/games/create')
  .all(expressJoi(valSchema.Game))
  .all(expressJoi(valSchema.CreateGame))
  .all(tokenExists)
  .post(GamesController.CreateGame);

// user view
Router.route('/games/fetch/user/:username')
  .get(GamesController.FetchUserList);

Router.route('/games/fetch/options/:gameId')
  .get(GamesController.FetchOptions);

Router.route('/games/update')
  .all(expressJoi(valSchema.GameUpdate))
  .put(GamesController.UpdateGame);

Router.route('/games/delete')
  .delete(GamesController.DeleteGame);

//the below function is needed for error handling for express-joi-validator using joi in the ".all" statements above
Router.use(function (err, req, res, next) {
  if (err.isBoom) {
    return res.status(err.output.statusCode).json({errMsg:err.data[0].message});
        // return res.status(err.output.statusCode).json(err.output.payload);
        // return res.status(200).json(err.output.payload);
        // return res.status(err.output.statusCode).json(err.output.payload);
        // return res.status(200).json(err.output.payload);
  }
});




module.exports = Router;