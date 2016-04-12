// app/routes/player.js

var express = require('express');
var app = express();
var router = express.Router();
var Player = require('../models/player');

//===============API ROUTES==================

router.get('/', function(req, res){
				res.send('Hello World');
});

router.route('/player').post(function(req, res){
				var player = new Player(req.body);
				player.save(function(err){
								if(err){
												return res.send(err);
								}
								res.send({message: 'Player Added'});
				});
});

router.route('/player').get(function(req, res){
				Player.find(function(err, player){
								if(err){
												return res.send(err);
								}
								res.json(player);
				});
});
// Export the router to be used in server.js
module.exports = router;
