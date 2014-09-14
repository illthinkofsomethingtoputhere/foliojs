angular.module('app')
	.config([
		'$urlRouterProvider',
		'$stateProvider',
		function($urlRouterProvider, $stateProvider) {

			$urlRouterProvider
				.otherwise('/');

			$stateProvider.state('home',{
				url: '/'
			});
		}]);