var config = require('../config');
var mongoose = require('mongoose');

mongoose.connect(config.db);

var _User = new mongoose.Schema({
	userid			: Number,
	username 		: String,
	password		: String,
	ruleid			: Number,
	status 			: Number,
	indate 			: Date,
	inuser 			: String,
	editdate 		: Date,
	edituser 		: String
});

module.exports = mongoose.model('user', _User);