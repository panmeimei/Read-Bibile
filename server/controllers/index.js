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
      
      var file = path.join(__dirname,'../archive/bible-'+year+'-'+month+'-'+date+'.html');
      if(fs.existsSync(file)){
        console.log('reading file');
        fs.readFile(file, function(err, data){
          if(err) 
            console.log(err);

          res.status(200).json({content: data.toString()});

        });
      }else{
        console.log('writing file');
        services.fetchPage(url, function(result){
          fs.writeFile(file, result, function(err){
            if(err) console.log(err);
          });
          
          res.status(200).json({content: result});
        });
        
      }

    }
  }
};

