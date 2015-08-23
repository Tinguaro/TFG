var nodeRecommendations = require('../../config/node-recommendations.js');

exports.connect = function(name, options) {
	nodeRecommendations.create(name, options);
}