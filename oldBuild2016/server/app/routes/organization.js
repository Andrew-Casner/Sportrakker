// app/routes/organization.js

var express = require('express');
var app = express();
var router = express.Router();
var Organization = require('../models/organization');

//===============API ROUTES==================

// Create an Organization
router.route('/organization').post(function(req, res){
				var organization = new Organization(req.body);
				organization.save(function(err){
								if(err){
												return res.sender(err);
								}
								res.send({message: 'Organization Created'});
				});
});

// Get all Organizations
router.route('/organization').get(function(req, res){
				Organization.find(function(err, organization){
								if(err){
												return res.send(err);
								}
								res.json(organization);
				});
});

// Export the router
module.exports = router;
