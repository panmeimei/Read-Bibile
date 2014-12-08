/*utility functions can be used across modules*/
var fs = require('fs');
var path = require('path');
var request = require('request');

module.exports = {
  /*fetch today's bilbe chapter*/
  fetchPage: function(callback){
    request('http://www.ccreadbible.org/Members/Bona/ccreadbible/maindata/2014/12/2014-12-08.html', function(error,response, body){
      if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
        callback(body);
      }
    });
  }
};
