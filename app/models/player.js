// app/models/player.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
				// Basic Info
				firstName: String,
				lastName: String,
				isMale: Boolean,
				height: Number, 
				weight: Number,
				birthday: Date,
 				hometown: String,
				// Athletic Info
				// - stored as arrays so it can be graphed over time
				// - need to add in time component
				// - talk to Dawson about json objects
				bench: [Number],
				benchTimeStamp: [Date],
				squat: [Number],
				squatTimeStamp: [Date],
				power: [Number],
				powerTimeStamp: [Date],
				dash: [Number],
				dashTimeStamp: [Date],
				shuffle: [Number],
				shuffleTimeStamp: [Date],
				vertical: [Number],
				verticalTimeStamp: [Date]
				// Other Info
				// Sports played
				// Teams on
});

module.exports = mongoose.model('Player', PlayerSchema);
