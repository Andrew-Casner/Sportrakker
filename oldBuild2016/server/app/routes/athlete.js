// app/routes/athlete.js

var express = require('express');
var app = express();
var router = express.Router();
var Athlete = require('../models/athlete');

//===============API ROUTES==================

// Create an athlete
router.route('/athlete').post(function(req,res){
				var athlete = new Athlete(req.body);
				athlete.save(function(err){
								if(err){
												return res.send(err);
								}
								res.send({message: 'Athlete Added'});
				});
});

// Get all athletes in Database
router.route('/athlete').get(function(req,res){
				Athlete.find(function(err, athlete){
								if(err){
												return res.send(err);
								}
								res.json(athlete);
				});
});

// Export the router
module.exports = router;
