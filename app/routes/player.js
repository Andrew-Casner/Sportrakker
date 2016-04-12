// app/routes/player.js


var express = require('express');
var app = express();
var router = express.Router();

//===============API ROUTES==================

app.get('/', function(req, res){
				res.send('Hello World');
});

app.listen(8000);
