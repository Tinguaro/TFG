angular.module('detail').controller('DetailController', ['$scope',
 function($scope){
 	var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum diam commodo elit sodales, at blandit tellus congue. Nullam rhoncus felis nunc, a finibus lectus ultrices id. Etiam condimentum accumsan ex et pretium. Nulla odio neque, blandit sit amet erat id, rutrum ultrices orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ......";
 	$scope.name = "mean";
 	$scope.enlaces = [{"url":"img/google.png", "name":"google"},{"url":"img/facebook.png", "name":"facebook"},{"url":"img/twitter.png", "name":"twitter"}];
 	
 	$scope.abstract = {
 		"title":"sistema recomendador en sistemas sociales",
 		"lorem": "Aplicación web de un sistema recomendador desarrollado en mean: mongodb, express, angularjs, node.js. Con esta aplicación podrás elegir, entre varias librerías de node.js., un algoritmo de recomendación, ver la lista resultado de los mejores ítems y obtener una tabla con los resultados del algoritmo."
 	}

 	$scope.means = [
 	{"url":"img/mongodb.png","lorem":"MongoDB es el líder en bases de datos NoSQL, ayudando a las empresas a ser más ágiles y escalables."},
 	{"url":"img/express.png","lorem":"Aplicación node.js que proporciona un robusto conjunto de características para crear aplicaciones web."},
 	{"url":"img/angularjs.png","lorem":"Angularjs permite ampliar el vocabulario HTML para el desarrollo de una aplicación obteniendo un resultado expresivo, legible y rápido de desarrollar."},
 	{"url":"img/nodejs.png","lorem":"Node.js es una plataforma construida en tiempo de ejecución de JavaScript de Chrome para construir fácilmente aplicaciones rápidas de red escalables."}];		
 	$scope.titlemeans = "MEAN significa : ";

 	$scope.about = {"url":"http://lorempixel.com/200/200/people/","lorem":'"' + lorem + '"', "title":"Sobre Mí"};


 	$scope.learnmore = {"lorem":lorem, "title":"¿qué más?"};
 }
]);