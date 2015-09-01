var raccoon = require('../../config/raccoon.js');

exports.connect = function() {
	raccoon.connect(); // conectamos raccoom a nuestro server redis
}
exports.test = function(name, numberRecommend, callback) {
	raccoon.recommendations(name,numberRecommend, callback);
}
exports.doLiked = function(user, item, callback) {
	raccoon.liked(user, item, callback);
}
exports.doDisLiked = function(user, item, callback) {
	raccoon.disliked(user, item, callback);
}
exports.doRecommendation = function(user, numberRecommend, callback){
	raccoon.recommendations(user, numberRecommend, callback);
}
exports.doWatchedFor = function(name) {
	raccoon.watchedFor(name);
}
exports.deleteKey = function() {
	raccoon.deleteKey();
}
exports.bestRated = function(callback) {
	raccoon.bestRated(callback);
}