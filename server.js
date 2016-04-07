// server.js

//call needed packages
var express = require('express');	// call express
var app = express();	// define app
var bodyParser = require('body-parser');

//setup app to use bodyParser()
//allow use of POST for API
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;	//set port

// ROUTES FOR API
// ============================================================================
var router = express.Router();	//get express router

//test
router.get('/', function(req, res){
				res.json({message: 'Welcome to Sportrakker API'});
});

// add more API routes here 

//Register routes
//use prefix /api
app.use('/api', router);

// START SERVER
// ===========================================================================
app.listen(port);
console.log('Sportrakker on port ' + port);
