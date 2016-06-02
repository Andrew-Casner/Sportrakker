// server.js

// SETUP
//======================================

// call packages needed
var express = require('express');	//call expresss
var app = express();	//define our app with express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');	//require to use DB
var player = require('./app/player/routes_player');

// configure app to use bodyParser()
// this allows us to use POST commands
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;	//sets our port

var db = require('./config/db');
mongoose.connect(db.url);	// connect to database
// API ROUTES
//=======================================
app.use('/api', player);
// REGISTER ROUTES
//========================================

// START SERVER
//========================================
app.listen(port);
console.log('Sportrakker works on port ' + port);
