var express = require('express');
var app = express();

//handler set to '/' route
app.get('/', function (req, res){
	res.send('Hello Chicken');
});
//tells server to listen on port 3000
app.listen(3000);