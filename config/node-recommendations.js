nodeRecommendations = require('node-recommendations');
/* RACCOON */
module.exports = {
	
	create : function(name, options) {
		nodeRecommendations.create(name, options);
		console.log("CREATE NAMESPACING");
	},

	createPerson : function(nameuser, id) {
		return nodeRecommendations.addPeople(nameuser, id);
	},

	/* sin id*/
	addItem : function(user, nameitem, score) {
		user.addItem(nameitem, score);
	},

	calculateSim : function() {
		nodeRecommendations.calculateItemsim(function(err, res){
			if (err) {
				console.log('Error for calculateSim');
			} else {
				console.log("CalculateSim work");
			}
		});
	},
	
	getPerson : function(name) {
		return nodeRecommendations.getPeopleByName(name);
	},
	

	recommendations : function(person) {
		person.getRecommendations();
	}

}
/* ---------- */