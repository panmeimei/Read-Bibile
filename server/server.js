var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var router = require('./routes');
var http = require('http');

var app = express();
app.use(bodyParser.json());

app.use('/api', router);
app.use(express.static(path.join(__dirname, '/../client')));

app.get('/home', function (req, res) {
  res.sendfile(path.join(__dirname, '/../client/index.html'));
});

app.listen(3000);

