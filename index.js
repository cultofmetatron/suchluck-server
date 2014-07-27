var express = require('express');
var app = express();
var dotenv = require('dotenv');
dotenv.load();


var config = require('./config.js');

var pubnub = require("pubnub").init({
    publish_key   : config.publish,
    subscribe_key : config.subscribe,
    secret_key: config.auth_key
});

var users = {
  'doge':'dogepass'
};

var games = {};




app.get('/', function (req, res){
	res.send('Hello Chicken');
});

app.listen(3000);
