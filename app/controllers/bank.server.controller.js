/* TESTBANK */
var bank;

exports.init = function(npeople, nitems, nmitems) {
	var row = "";
	bank = [];
	for(var i = 0; i < npeople; ++i){
		row = "";
		row += "person-" + i + ";";
		for(var j = 0; j < nitems; ++j){
			if (Math.random() > 0.5) {
				row += "item-" + j + "CRT"+ parseInt(""+(Math.random()*5)) + "CRTI";
			}
		}
		bank.push(row);
	}

	console.log(bank);
}

exports.getBank = function() {
	return bank;
}

exports.isEmpty = function() {
	if(bank)
		return false;
	else
		return true;
}