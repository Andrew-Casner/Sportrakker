// server.js

// SETUP
//======================================

// call packages needed
var express = require('express');	//call expresss
var app = express();	//define our app with express
var bodyParser = require('body-parser');
var mongoose = require('mongoose');	//require to use DB
mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds017070.mlab.com:17070/sportrakker');	//connect to mongoDB

// configure app to use bodyParser()
// this allows us to use POST commands
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;	//sets our port

// API ROUTES
//=======================================
var router = express.Router();	//new instance of express router

// test route
router.get('/', function(req,res){
				res.json({ message: 'Welcome to Sportrakker'});
});

// additional API routes here

// REGISTER ROUTES
//========================================
app.use('/api', router);	//all routes prefixed with /api

// START SERVER
//========================================
app.listen(port);
console.log('Sportrakker works on port ' + port);
