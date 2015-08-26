
var testbank = require('./bank.server.controller.js');

var raccoon = require('./raccoon.server.controller.js');
//var nodeRecommendations = require('./node-recommendations.server.controller.js');

exports.init = function() {
	raccoon.connect();
	/*nodeRecommendations.connect('test', {
		correlation: 'distance',
		redisClient: null
	});*/

	//testbank.initJSON(3,5,6);
}
exports.returnBank = function(req, res) {
	res.send(testbank.getBank());
}
exports.newBank = function(req, res, npeople, nitems, mitems) {
	
	/* remove data redis */
	var keys = testbank.getBank();
	if (keys) {
		for (var k in keys) {
			raccoon.deleteKey();
		}
	}
	testbank.initJSON(npeople,nitems,mitems);
	bank = testbank.getBank();
	score = 0;
	var person = "";
	for(var i in bank) {
		/* RACCOON */
		raccoon.doLiked(bank[i]['nameperson'], bank[i]['nameitem'], function(){return 0;});
	}
	res.send(testbank.getBank());
}

exports.load = function() {
	bank = testbank.getBank();
	score = 0;
	var person = "";
	for(var i in bank) {
		/* RACCOON*/
		raccoon.doLiked(bank[i]['nameperson'], bank[i]['nameitem'], function(){return 0;});
	}
}


exports.test = function(req, res, nameperson, namelib, size) {
	/* RACCOON TEST */
	/*raccoon.doWatchedFor('person-0');
	raccoon.doWatchedFor('person-1');
	raccoon.doWatchedFor('person-2');
	*/
	raccoon.test(nameperson,size - 1, function(results){
		result = {
			'name' : nameperson,
			'data' : results,
			'bestdata' : []
		}

		raccoon.bestRated(function(results){
			result['bestdata'] = results;
			res.send(result);
		});
	});

	/*test node-recommendations*/
	/*nodeRecommendations.calculateSim();
	nodeRecommendations.getPerson('person0');
	nodeRecommendations.getRecommendations();*/


}