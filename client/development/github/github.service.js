/**
 * Github Service
 * ===
 * An $http wrapper to retrieve github repositories and readmes. Caching enabled.
 *
 * repository(repositoryName)
 * repositories()
 * readme(repositoryName)
 */
angular.module('folio.pages.github')
	.service('github', [
		'$http',
		'$q',
		function($http, $q) {

			this.repository = function(repositoryName) {
				if (!repositoryName) throw new Error('Repository not specified.');
				var deferred = $q.defer();

				getAll()
					.then(function(repositories) {
						for (var i = 0, length = repositories.length; i < length; i++) {
							if (repositories[i].name === repositoryName) {
								deferred.resolve(repositories[i]);
							}
						}
					});

				return deferred.promise;
			};

			this.repositories = function() {
				return getAll();
			};

			this.readme = function(repositoryName) {
				if (!repositoryName) throw new Error('Repository not specified.');
				var deferred = $q.defer();

				$http.get('api/1/github/readme/' + repositoryName, {cache: true})
					.success(function(readme) {
						deferred.resolve(readme);
					});

				return deferred.promise;
			};

			function getAll() {
				var deferred = $q.defer();

				$http.get('api/1/github/repositories', {cache: true})
					.success(function(repositories) {
						deferred.resolve(repositories);
					});

				return deferred.promise;
			}
		}]);