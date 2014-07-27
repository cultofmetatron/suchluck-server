var express = require('express');
var app = express();

var users = {
  'doge':'dogepass'
};

var games = {};




app.get('/', function (req, res){
	res.send('Hello Chicken');
});

app.listen(3000);
