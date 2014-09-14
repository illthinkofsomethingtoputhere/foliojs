angular.module('folio.pages.github')
	.config([
		'$stateProvider',
		function($stateProvider) {

			$stateProvider.state('github', {
				url: '/github',
				templateUrl: 'github/github.html',
				resolve: {
					repositories: function(github) {
						return github.get();
					}
				},
				controller: 'github'
			});

			$stateProvider.state('github.repository', {
				url: '/:repository',
				templateUrl: 'github/repository/repository.html',
				resolve: {
					repository: function($stateParams, github) {
						return github.get($stateParams.repository);
					}
				},
				controller: 'repository'
			});
		}]);