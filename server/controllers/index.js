var bluebird = require('bluebird');
var services = require('../services/services');

module.exports = {
  dailybible: {
    get: function (req, res) {
      services.fetchPage(function(result){
        res.status(200).send(result);
      });
    }
  }
};

