process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
	express = require('./config/express');

var db = mongoose();
var app = express();
app.listen(3000);


/* SYSTEMRECOMMENDATIONS*/
var system = require('./app/controllers/systemrecommend.server.controller.js');
system.init();

module.exports = app;

console.log("Servidor ejecutándose en localhost:3000");