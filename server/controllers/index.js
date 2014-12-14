var bluebird = require('bluebird');
var services = require('../services/services');
var fs = require('fs');
var path = require('path');

module.exports = {
  dailybible: {

    /*fetch today's bilbe chapter*/
    get: function (req, res) {
      var today = new Date();
      var year = today.getFullYear(), month = today.getMonth()+1, 
      date = (today.getDate()<10)? '0'+today.getDate(): today.getDate();
      var url = 'http://www.ccreadbible.org/Members/Bona/ccreadbible/maindata/'+
             year+'/'+month+'/'+year+'-'+month+'-'+date+'.html';
     
      services.fetchPage(url, function(result){
        var file = path.join(__dirname,'../archive/bible.html');
        fs.writeFile(file, result, function(err){
          if(err) console.log(err);
        });
        
        res.status(200).json({content: result});
      });
    }
  }
};

