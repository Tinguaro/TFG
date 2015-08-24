module.exports = function(app){
	var index = require('../controllers/index.server.controller.js');
	var system = require('../controllers/systemrecommend.server.controller.js');

	app.get('/', index.render).
	get('/getBank', system.returnBank).
	post('/recommendations', function(req, res){
		system.test(req, res, req.body.nameperson, req.body.lib, req.body.nrecommend);
	}).
	post('/createBank', function(req, res) {
		system.newBank(req, res, req.body.npeople, req.body.nitems, req.body.mitems);
	});
};