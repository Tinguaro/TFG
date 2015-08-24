nodeRecommendations = require('node-recommendations');
/* RACCOON */
module.exports = {
	r : '',
	people : '',
	peoplesearch : '',

	create : function(name, options) {
		r = nodeRecommendations.create(name, options);
	},

	createPerson : function(nameuser, id) {
		people = r.addPeople(nameuser, id);
	},

	/* sin id*/
	addItem : function(nameitem, score) {
		people.addItem(nameitem, score);
	},

	calculateSim : function() {
		r.calculateItemsim(function(err, res){
			if (err) {
				console.log('Error for calculateSim');
			} else {
				console.log("CalculateSim work");
			}
		});
	},
	
	getPerson : function(name) {
		peoplesearch = r.getPeopleByName(name);
		console.log("PEOPLE SEARCHED with name " + name + " peoplesearch " + peoplesearch);

	},
	

	recommendations : function() {
		peoplesearch.getRecommendations();
	}

}
/* ---------- */