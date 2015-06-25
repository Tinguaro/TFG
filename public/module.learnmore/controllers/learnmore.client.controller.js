angular.module('learnmore').controller('LearnmoreController', ['$scope',
 function($scope){
 	var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum diam commodo elit sodales, at blandit tellus congue. Nullam rhoncus felis nunc, a finibus lectus ultrices id. Etiam condimentum accumsan ex et pretium. Nulla odio neque, blandit sit amet erat id, rutrum ultrices orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean erat turpis, cursus ac sagittis sit amet, gravida eu eros. Phasellus congue, ante a aliquet iaculis, eros nulla aliquet dui, eget tincidunt mi risus at nunc. Suspendisse tempor molestie dolor, ac dictum turpis ultrices nec. Sed vitae felis ac leo pharetra vulputate quis eu lectus. Cras non ex ultrices, euismod nunc at, dignissim felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec mattis massa diam, sed tempor purus vestibulum eu.";
 	$scope.about = [{'title':'¿Qué es un sistema recomendador?', 'html':lorem},
					{'title':'¿Para qué sirve esta aplicación?', 'html':lorem},
					{'title':'¿Qué tecnologías se usan?', 'html':lorem},
					{'title':'¿Qué resultados obtendremos?', 'html':lorem}
				];
 }
]);