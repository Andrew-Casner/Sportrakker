// app/models/player.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema({
				name: String
});

module.export = mongoose.model('Player', PlayerSchema);
