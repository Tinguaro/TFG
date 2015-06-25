angular.module('test').controller('TestController', function($scope, $http){
 	var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum diam commodo elit sodales, at blandit tellus congue. Nullam rhoncus felis nunc, a finibus lectus ultrices id. Etiam condimentum accumsan ex et pretium. Nulla odio neque, blandit sit amet erat id, rutrum ultrices orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean erat turpis, cursus ac sagittis sit amet, gravida eu eros. Phasellus congue, ante a aliquet iaculis, eros nulla aliquet dui, eget tincidunt mi risus at nunc. Suspendisse tempor molestie dolor, ac dictum turpis ultrices nec. Sed vitae felis ac leo pharetra vulputate quis eu lectus. Cras non ex ultrices, euismod nunc at, dignissim felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec mattis massa diam, sed tempor purus vestibulum eu.";
 	$scope.name = "Sistema recomendador";

 	/*interface SR*/
 	$scope.whatlib = [{'option':'o1'},{'option':'o1'},{'option':'o1'},{'option':'o1'}]; 
 	$scope.whatrepo = [{'option':'o2'},{'option':'o2'},{'option':'o2'},{'option':'o2'}];

 	$scope.list = {
 		'title':'ítems recomendados',
 		'items': {'item1': {'name':'item1'},
 				  'item2': {'name':'item2'},
 				  'item3': {'name':'item3'},
 				  'item4':{'name':'item4'}
 				}
 	};

 	$http.get('http://localhost:3000/example.json').success(function(data){
 		$scope.miembros = data;
 	});
 	$scope.gridName = "tabla resultado";
 	$scope.gridOptions = {
 		data: 'miembros',
 		showGroupPanel: true,
		enableCellSelection: true,
		enableRowSelection: false,
		enableCellEdit: true,
		enableRowSelection: false,
 		columnDefs: [
 			{field:'no', displayName:'Número'},
 			{field:'name', displayName:'Nombre'}
 		]
 	};

 	$scope.datosform = {};

 	$scope.postTime = function() {
 		$http.post('http://localhost:3000/times', $scope.datosform).success(function(data){
 			console.log(data);
 		});
 	}


 });