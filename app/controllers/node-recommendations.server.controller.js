var nodeRecommendations = require('../../config/node-recommendations.js');

exports.connect = function(name, options) {
	nodeRecommendations.create(name, options);
}

exports.addPerson = function(name) {
	nodeRecommendations.createPerson(name);
}

exports.addItem = function(nameitem, score) {
	nodeRecommendations.addItem(nameitem, score);
}

exports.calculateSim = function() {
	nodeRecommendations.calculateSim(function(err, res){
		if (err) {
			console.log('Error for calculateSim');
		} else {
			console.log("CalculateSim work");
		}
	});
}
	
exports.getPerson = function(name) {
	return nodeRecommendations.getPerson(name);
}
	
exports.getRecommendations = function() {
	nodeRecommendations.recommendations();
}