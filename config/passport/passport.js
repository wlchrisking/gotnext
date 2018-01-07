const passport = require('passport');
const local = require('passport-local');
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

const LocalStrategy = local.Strategy;

const localOptions = {
    usernameField: 'username',
};
console.log('before passport use');
passport.use('local', new LocalStrategy(localOptions, async (username, password, done) => {
    console.log('please work');
}));

module.exports = passport;