const Sequelize = require('sequelize');
const db = new Sequelize(process.env.PG);

db.authenticate()
  .then( () => {
      console.log('server.js: DB is now connected');
      console.log('DB is doubly-confirmed to be connected')
  })
  .catch( (err) => {
      console.log('server.js: Connection Error!');
  });

module.exports = db;
