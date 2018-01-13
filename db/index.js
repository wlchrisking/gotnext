const Sequelize = require('sequelize');
const db = new Sequelize(process.env.PG);
// const db = new Sequelize(PG);

db.authenticate()
  .then( () => {
      console.log('server.js: DB is now connected');
  })
  .catch( (err) => {
      console.log('server.js: Connection Error!');
  });

module.exports = db;