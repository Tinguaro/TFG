'use strict'

var test = require('../controllers/test.server.controller.js');

module.exports = function(app){
	app.route('/times').post(test.create).get(test.list);
}