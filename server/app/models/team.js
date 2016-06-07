// app/models/team.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
				//Basic Info
				teamName: String
});

module.exports = mongoose.model('Team', TeamSchema);
