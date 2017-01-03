// app/routes/team.js

var express = require('express');
var app = express();
var router = express.Router();
var Team = require('../models/team');

//===============API ROUTES==================

// Create a team
router.route('/team').post(function(req,res){
				var team = new Team(req.body);
				team.save(function(err){
								if(err){
												return res.send(err);
								}
								res.send({message: 'Team Added'});
				});
});

// Get all Teams in Database
router.route('/team').get(function(req,res){
				Team.find(function(err, team){
								if(err){
												return res.send(err);
								}
								res.json(team);
				});
});

// Export the router
module.exports = router;
