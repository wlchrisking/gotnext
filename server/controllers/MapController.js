const axios = require('axios');
const { Game } = require('../../db/models');

MapController = {
  
  Fetch: (req, res) => {
    Game.findAll({})
      .then(data => {
        res.status(200).send(data)
      })
      .catch(err => {
        console.log('error fetching data on componentDidMount request')
        res.status(500)
      })
  }
}

module.exports = MapController;