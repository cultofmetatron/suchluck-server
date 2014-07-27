var express    = require('express');
var app        = express();
var dotenv     = require('dotenv');
var secret     = 'meowmeowmeowmeowmeowmeow';
var bodyParser = require('body-parser');
var jwt 			 = require('jwt-simple');
var jwtExp		 = require('express-jwt');
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

app.post('api/login', bodyParser.json() ,function (req, res){
	console.log(req.body);
	if (users[req.body.user] && (users[req.body.user] === req.body.password)){
		var token = jwt.encode( { 'user' :req.body.user }, secret);
		res.send({token: token});
	} else {
		res.send(403, { error:'User not found!' });
	}
});



//create a jwt (jason web token) --> send that to user object using response
//find how to sign your own docs

app.use(bodyParser.urlencoded({ extended: false }))


/**
take request.body.user and request.body.password and create a token and send it back to the user
send it back using request.send

express jwt is middleware to take the jwt from the request and intercept it and
extract user id out of it and put it on request.user so you can access user by request.user.user 
(first user created by jwt 2nd user is set in user object)
**/

//bodyparser == middleware to convert to json and puts on req.body so you may access it

//handler set to '/' route
app.get('/', function (req, res){
	res.send('Hello Chicken');
});


//tells server to listen on port 3000
//nothing runs until the listener dispatches it
app.listen(3000);
