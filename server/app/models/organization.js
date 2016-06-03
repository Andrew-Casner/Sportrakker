// app/models/organization.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrganizationSchema = new Schema({
				// Basic Info
				name: String,
				type: String,  // Only High School for now
				district: String,  //District the High School belongs to
				// Location
				adress1: String,  // Adress line 1
				adress2: String,  // Adress line 2
				zip: Number, 
				state: String,  // Only the 2 letter abreviation
				// Contact info
				phone: Number,
				athleticDirector: String,  // ID of the athletic Director
				// Advanced Info
				studentCount: Number, 
				//Teams
				teams: [String]  // Be digilant here, loss of information can occur here, If a team is added it must be added in the team that it belongs to this organization aswell, Since NoSQL has limited 2 way data binding it is imperitive we dont lose data at this process
});

module.exports = mongoose.model('Organization', OrganizationSchema);
