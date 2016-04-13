// app/models/player.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
				// Basic Info
				name: String
				isMale: Boolean
				height: Number 
				weight: Number
				birthday: Date
 				hometown: String
				// Athletic Info
				bench: [Number]
				squat: [Number]
				power: [Number]
				dash: [Number]
				shuffle: [Number]
				vertical: [Number]
				// Other Info
});

module.exports = mongoose.model('Player', PlayerSchema);
