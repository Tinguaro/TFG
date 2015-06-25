'use strict'

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var TestSchema = new Schema({
	'title': String,
	'time': String
});

mongoose.model('Test', TestSchema);