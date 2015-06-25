//var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
	//var db = mongoose.connect(config.db);
	var db = mongoose.connect('localhost:27017/times');

	require('../app/models/test.server.model');

	return db;
}