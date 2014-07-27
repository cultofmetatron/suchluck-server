var express = require('express');
var app = express();


app.get('/', function (req, res){
	res.send('Hello Chicken');
});

app.listen(3000);