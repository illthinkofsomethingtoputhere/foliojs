angular.module('folio.pages.github')
	.controller('repository', [
		'$scope',
		'repository',
		'readme',
		function($scope, repository, readme) {
			$scope.repository = repository;
			$scope.readme = readme;
		}
	]);