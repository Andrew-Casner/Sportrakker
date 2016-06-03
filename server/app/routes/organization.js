// app/routes/organization.js

var express = require('express');
var app = express();
var router = express.Router();
var Organization = require('../models/organization');

//===============API ROUTES==================

// Create an Organization
router.route('/organization').post(function(req, res){P
				var organization = new Organization(req.body);
				organization.save(function(err){
								if(err){
												return res.sender(err);
								}
								res.send({message: 'Organization Created'});
				});
});

// Export the router
module.exports = router;
