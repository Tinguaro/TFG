raccoon = require('raccoon');
/* RACCOON */
module.exports = {
	
	connect : function() {
		raccoon.connect(6379,'127.0.0.1');
	},

	liked : function(user, item, callback) {
		raccoon.liked(user, item, callback);
	},

	disliked : function(user, item, callback) {
		raccoon.disliked(user, item, callback);
	},

	recommendations : function(user, numberRecommend, callback) {
		raccoon.recommendFor(user, numberRecommend, callback);
	},

	watchedFor : function(name) {
		raccoon.allWatchedFor(name, function(results){
	 	 	console.log("RESULTS FOR " + name);
	 	 	console.log(results); // returns an array of all the items that user has liked or disliked. 
		});
	}

}
/* ---------- */

