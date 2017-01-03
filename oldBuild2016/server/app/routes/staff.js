// app/routes/staff.js

var express = require('express');
var app = express();
var router = express.Router();
var Staff = require('../models/staff');

//===============API ROUTES==================

// Create a staff
router.route('/staff').post(function(req,res){
				var staff = new Staff(req.body);
				staff.save(function(err){
								if(err){
												return res.send(err);
								}
								res.send({message: 'Staff Added'});
				});
});

// Get all staffers in Database
router.route('/staff').get(function(req,res){
				Staff.find(function(err, staff){
								if(err){
												return res.send(err);
								}
								res.json(staff);
				});
});

// Export the router
module.exports = router;
