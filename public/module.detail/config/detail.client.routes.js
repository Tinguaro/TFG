angular.module('detail').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'module.detail/views/detail.client.view.html'
		}).when('/test', {
			templateUrl: 'module.test/views/test.client.view.html'
		}).when('/learnmore', {
			templateUrl: 'module.learnmore/views/learnmore.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}

]);