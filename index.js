var express    = require('express'),
    app        = express(),
    dotenv     = require('dotenv'),
    secret     = 'meowmeowmeowmeowmeowmeow',
    bodyParser = require('body-parser'),
     jwt 			 = require('jwt-simple'),
    jwtExp		 = require('express-jwt'),
    cors 			 = require('cors'),
    stores		 = {},
    sessions   = {},
    config     = require('./config.js');


dotenv.load();
app.use(cors());

var pubnub = require("pubnub").init({
    publish_key   : config.publish,
    subscribe_key : config.subscribe,
    secret_key: config.auth_key
});

var users = {
  'doge':'dogepass',
  'yolo': 'swag'
};

var games = {};

app.post('/api/login', bodyParser.json() ,function (req, res){

	if (users[req.body.username] && (users[req.body.username] === req.body.password)){
		var token = jwt.encode( { 'username' :req.body.username }, secret);
		res.send({token: token});
	} else {
		res.send(403, { error:'User not found!' });
	}

});

app.get('/api/channels', jwtExp({'secret': secret}), function(req, res) {
		console.log(req.user.username);
    //if (!req.user.admin) return res.send(401);
    res.send(200, {
    	message: 'success ' + req.user.username
    });
  })





//    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InlvbG8ifQ.L83E197A-_-o4FyhCwHB9wIKTaAzhmzvbPebR42i1Jo"

//create a jwt (jason web token) --> send that to user object using response
//find how to sign your own docs

app.use(bodyParser.urlencoded({ extended: false }))


/**
take request.body.user and request.body.password and create a token and send it back to the user
send it back using request.send

express jwt is middleware to take the jwt from the request and intercept it and
extract user id out of it and put it on request.user so you can access user by request.user.username
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
