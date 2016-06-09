// server.js

// SETUP
//======================================

// call packages needed
var express = require('express');	//call expresss
var app = express();	//define our app with express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');	//require to use DB
<<<<<<< HEAD
var player = require('./app/routes/player');
var team = require('./app/routes/team');
=======
var player = require('./app/routes/player');	//Nede to remove later just a test
var organization = require('./app/routes/organization'); 
>>>>>>> f5cfc2750dbf31ac54a88c53b25fdce9939a4e2e

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
<<<<<<< HEAD
app.use('/api', team);
=======
app.use('/api', organization);
>>>>>>> f5cfc2750dbf31ac54a88c53b25fdce9939a4e2e
// REGISTER ROUTES
//========================================

// START SERVER
//========================================
app.listen(port);
console.log('Sportrakker works on port ' + port);
