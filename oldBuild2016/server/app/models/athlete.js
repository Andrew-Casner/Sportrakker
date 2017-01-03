// app/models/athlete.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AthleteSchema = new Schema({
				//Basic Info
				firstName: String,
				lastName: String,
				birthday: Date,
				sex: Number,  // 0=female, 1=male
				hometown: String,
				email: String,
				// Athletic info
				height: Number,  // in inches
				weight: Number,  // in lbs
				// Results
				results: [String]  //All results by id
});

module.exports = mongoose.model('Athlete', AthleteSchema);
