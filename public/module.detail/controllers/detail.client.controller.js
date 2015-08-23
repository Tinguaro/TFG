angular.module('detail').controller('DetailController', ['$scope',
 function($scope){
 	var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus interdum diam commodo elit sodales, at blandit tellus congue. Nullam rhoncus felis nunc, a finibus lectus ultrices id. Etiam condimentum accumsan ex et pretium. Nulla odio neque, blandit sit amet erat id, rutrum ultrices orci. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ......";
 	$scope.name = "mean";
 	$scope.enlaces = [{"url":"img/google.png", "name":"google"},{"url":"img/facebook.png", "name":"facebook"},{"url":"img/twitter.png", "name":"twitter"}];
 	
 	$scope.abstract = {
 		"title":"sistema recomendador en sistemas sociales",
 		"lorem": "Aplicación web de un sistema recomendador desarrollado con la full-stack MEAN: MongoDB, Express.js, Angularjs, Node.js. Con esta aplicación podrás elegir entre dos librerías de recomendación de node.js. Se ofrece una interfaz sencilla para modificar los valores de la recomendación como el nombre de la persona, las cantidad de ítems a recomendar y, dependiendo de la librería, el tipo de correlación que queramos. También se presenta una interfaz para la creación del banco de pruebas donde podrás modificar varios valores como número de personas, número de ítems y número medio de ítems por persona."
 	}

 	$scope.means = [
 	{"url":"img/mongodb.png","lorem":"MongoDB es la base de datos NoSQL líder, ayudando a las empresas a ser más agiles y escalables. MongoDB es un sistema de base de datos multiplataforma orientado a documentos, de esquema libre. Esto significa que los objetos de una colección pueden tener esquemas diferentes."},
 	{"url":"img/express.png","lorem":"Express es un framework web mínimo y flexible para Node.js que proporciona un conjunto robusto y de características para crear aplicaciones web. También dispone de una gran variedad de métodos de utilidad HTTP y middleware con lo que la creación de una API se convierte en rápida y fácil."},
 	{"url":"img/angularjs.png","lorem":"Angularjs es un framework de desarrollo de aplicaciones web que amplía las funcionalidades básicas del lenguaje HTML. El ambiente resultante es extraordinariamente expresivo, legible y rápido de desarrollar."},
 	{"url":"img/nodejs.png","lorem":"Node.js es una plataforma para construir fácilmente aplicaciones rápidas de red escalables. Node.js es ideal para aplicaciones en tiempo real de datos intensivos que se ejecutan a través de dispositivos distribuidos. En definitiva, nodejs consigue que nuestro código javascript se ejecute como un servicio."}];		
 	$scope.titlemeans = "MEAN significa : ";

 	$scope.about = {"url":"http://lorempixel.com/200/200/people/","lorem":'"' + lorem + '"', "title":"Sobre Mí"};


 	$scope.learnmore = {
 		"lorem":"Regularmente estamos expuestos a una cantidad de información que se extiende de tal forma que no somos capaces ni de comprenderla ni de asimilarla. Esta situación empeora cada día por el rápido crecimiento de la información que se almacena en internet. A raíz de este problema surgen los sistemas recomendadores para facilitar al usuario la comprensión en temas/dominios en los que la información es numerosa y variada. Un sistema recomendador ayuda a un usuario a elegir sin tener suficiente experiencia con las opciones a seleccionar, impulsándolo a la adquisición de la mejor opción.",
 	 	"title":"¿qué más?"
 	 };
 }
]);