
var testbank = require('./bank.server.controller.js');

var raccoon = require('./raccoon.server.controller.js');
//var nodeRecommendations = require('./node-recommendations.server.controller.js');

exports.init = function() {
	raccoon.connect();
	/*nodeRecommendations.connect('test', {
		correlation: 'distance',
		redisClient: null
	});*/
	testbank.init(3,5,6);
}

exports.newBank = function(npeople, nitems, mitems) {

}


exports.load = function() {
	bank = testbank.getBank();
	name = "";
	item = "";
	var items;
	score = 0;
	for(var i in bank) {
		name = bank[i].split(';')[0];
		items = (bank[i].split(';')[1]).split('CRTI');
		for (var j in items) {
			if(items[j].length != 0) {
				item = items[j].split('CRT')[0];
				score = items[j].split('CRT')[1];
				/* RACCOON*/
				console.log(name + "    " + item + "    " + score);
				raccoon.doLiked(name, item, function(){return 0;});
			}
		}
	}

}


exports.test = function() {
	/* RACCOON TEST */
	/*raccoon.doWatchedFor('person-0');
	raccoon.doWatchedFor('person-1');
	raccoon.doWatchedFor('person-2');
	*/raccoon.test('person-0',5, function(results){
	console.log('RECOMMENDATIONS');
	console.log(results);
	});
}