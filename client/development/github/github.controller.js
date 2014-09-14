angular.module('folio.pages.github')
	.controller('github', [
		'$scope',
		'repositories',
		function($scope, repositories) {
			$scope.repositories = repositories;
		}
	]);