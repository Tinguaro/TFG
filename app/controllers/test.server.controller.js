'use strict'

var Test = require('mongoose').model('Test');

exports.create = function(req, res, next) {
	var test = new Test({title: req.body.typetest, time: req.body.namerepo});
	test.save(function(err){
		if (err) {
			return "next(err)";
		} else {
			res.json(test);
		}
	});
};

exports.list = function(req, res, next){
	Test.find({}, function(err, test){
		if (err) {
			return next(err);
		} else {
			res.json(test);
		}
	});
};