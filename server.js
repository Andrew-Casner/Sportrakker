// server.js

// SETUP
//======================================

// call packages needed
var express = require('express');	//call expresss
var app = express();	//define our app with express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');	//require to use DB
mongoose.connect('mongodb://test:test@ds017070.mlab.com:17070/sportrakker');	//connect to mongoDB
var Player = require('./app/models/player');	//implament player api

// configure app to use bodyParser()
// this allows us to use POST commands
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;	//sets our port

// API ROUTES
//=======================================
var router = express.Router();	//new instance of express router

// middleware to use for all requests
router.use(function(req, res, next){
				console.log('Something is Happening...');
				next();	//to get next routs
});

// test route
router.get('/', function(req,res){
				res.json({ message: 'Welcome to Sportrakker'});
});

// additional API routes here
// add post and get

// routes that end in /player
//----------------------------------------
router.route('/player')
				// create a player (accessed at POST http://localhost:808/api/player)
				.post(function(req, res){
								var player = new Player();	//new instance of PLayer model
								player.name = req.body.name;	//set the players name
								// save the player and check for errors
								player.save(function(err){
												if(err)
																res.send(err);

												res.json({message: 'Player created'});
								});
				});
				.get(function(req, res){
								Player.find(function(err, player){
												if(err)
																res.send(err);

												res.json(player);
								});
				});
				
// REGISTER ROUTES
//========================================
app.use('/api', router);	//all routes prefixed with /api

// START SERVER
//========================================
app.listen(port);
console.log('Sportrakker works on port ' + port);
