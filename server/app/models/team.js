// app/models/team.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
				//Basic Info
				name: String,
				sex: Number,  // 0 = female, 1 = male
				stateClass: String,  // Class the team compeats in, ie 5A
				organization: String,  // id of affiliated organization
				staff: [String],  // id of all staff
				players: [String],  // id of all the players on the team
				// Results from meets, needs to be discused
				results: [String]  // id of all results

});

module.exports = mongoose.model('Team', TeamSchema);
