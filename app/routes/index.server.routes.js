module.exports = function(app){
	var index = require('../controllers/index.server.controller.js');
	var system = require('../controllers/systemrecommend.server.controller.js');

	app.get('/', index.render).
	get('/load', system.load).
	get('/test', system.test);
};