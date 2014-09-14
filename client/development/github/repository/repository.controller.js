angular.module('folio.pages.github')
	.controller('repository', [
		'$scope',
		'repository',
		function($scope, repository) {
			$scope.repository = repository;
		}
	]);