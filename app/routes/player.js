// app/routes/player.js

var express = require('express');
var app = express();
var router = express.Router();

//===============API ROUTES==================

router.get('/', function(req, res){
				res.send('Hello World');
});

module.exports = router;
