angular.module('test').controller('TestController', function($scope, $q, $http){
 	var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum diam commodo elit sodales, at blandit tellus congue. Nullam rhoncus felis nunc, a finibus lectus ultrices id. Etiam condimentum accumsan ex et pretium. Nulla odio neque, blandit sit amet erat id, rutrum ultrices orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean erat turpis, cursus ac sagittis sit amet, gravida eu eros. Phasellus congue, ante a aliquet iaculis, eros nulla aliquet dui, eget tincidunt mi risus at nunc. Suspendisse tempor molestie dolor, ac dictum turpis ultrices nec. Sed vitae felis ac leo pharetra vulputate quis eu lectus. Cras non ex ultrices, euismod nunc at, dignissim felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec mattis massa diam, sed tempor purus vestibulum eu.";
 	$scope.name = "Sistema recomendador";

 	/*interface SR*/
 	$scope.whatlib = [{'option':'Raccoon'},{'option':'Node-recommendations'}];

 	$scope.datosform = {};


 	$scope.bank = {
 		'title' : 'Crear banco de pruebas'
 	};
 	$scope.initBank = function() {
 		$http.get('http://localhost:3000/getBank').success(function(data){
 			$scope.miembros = data;
		 });
		 $scope.gridName = "Banco de pruebas";
		 $scope.gridOptions = {
		 	data: 'miembros',
		 	showGroupPanel: true,
			enableCellSelection: true,
			enableRowSelection: false,
			enableCellEdit: true,
			enableRowSelection: false,
			columnDefs: [
				{field:'nameperson', displayName:'N. Persona'},
				{field:'nameitem', displayName:'N. Ítem'},
		 		{field:'score', displayName:'Puntuación'}
		 	]
		 };
 	}
 	$scope.createBank = function() {
 		$http.post('http://localhost:3000/createBank', $scope.datosform).success(function(data){
 			$scope.initBank();
 		});
 	}

 	$scope.list = {
 		'titlelist':'Ítems recomendados',
 		'items': [],
 		'titlebestlist' : 'Mejores ítems',
 		'bestitems' : []
 	}
 	$scope.recommendations = function() {
 		$http.post('http://localhost:3000/recommendations', $scope.datosform).success(function(data){
 			$scope.list = {
 				'titlelist' : 'Ítems recomendados ' + data['name'],
 				'items' : data['data'],
 				'titlebestlist' : 'Mejores ítems',
 				'bestitems' : data['bestdata']
 			}
 		});
 	}
/*
 	$scope.postTime = function() {
 		$http.post('http://localhost:3000/times', $scope.datosform).success(function(data){
 			console.log(data);
 		});
 	}
*/
	$scope.initBank();
 });