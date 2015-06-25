exports.render = function(req, res){
	var ruta = __dirname.split('controllers');
	//res.send(ruta[0]);
	res.sendFile(ruta[0] + 'views/index.html');
};