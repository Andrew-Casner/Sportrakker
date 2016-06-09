// server/app/models/staff.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StaffSchema = new Schema({
				firstName: String,
				lastName: String,
				email: String,
				birthday: Date,
				sex: Number,  // 0=female, 1=male
				// Positions
				positions: [String]  // id of all the staffs positions
});

module.exports = mongoose.model('Staff', StaffSchema);
