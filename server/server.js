var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var router = require('./routes');
var fs = require('fs');
var request = require('request');


var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/../client')));

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, '/../client/index.html'));
});

app.listen(3000);

