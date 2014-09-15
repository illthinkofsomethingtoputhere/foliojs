angular.module('folio.pages.github')
	.config([
		'$stateProvider',
		function($stateProvider) {

			$stateProvider.state('github', {
				url: '/github',
				templateUrl: 'github/github.html',
				resolve: {
					repositories: ['github', function(github) {
						return github.repositories();
					}]
				},
				controller: 'github'
			});

			$stateProvider.state('github.repository', {
				url: '/:repository',
				templateUrl: 'github/repository/repository.html',
				resolve: {
					repository: ['$stateParams', 'github', function($stateParams, github) {
						return github.repository($stateParams.repository);
					}],
					readme: ['$stateParams', 'github', function($stateParams, github) {
						return github.readme($stateParams.repository);
					}]
				},
				controller: 'repository'
			});
		}]);