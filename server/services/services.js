/*utility functions can be used across modules*/
var request = require('request');

module.exports = {
  fetchPage: function(url, callback){
    request(url, function(error,response, body){
      if (!error && response.statusCode == 200) {
        callback(body);
      }
    });
  }
};
