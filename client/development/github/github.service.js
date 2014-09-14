angular.module('folio.pages.github')
	.service('github', [
		'$http',
		'$q',
		function($http, $q) {

			var repos = [];

			this.get = function(repoName) {
				if (!repoName) return getAll();
				var deferred  = $q.deref();

				if (repos.length) {
					deferred.resolve(getOne(repoName));
				} else {
					getAll()
						.then(function() {
							deferred.resolve(getOne(repoName));
						});
				}

				return deferred.promise;
			};

			function getOne(repoName) {
				repos.forEach(function(repo) {
					if (repo.name === repoName) {
						return repoName;
					}
				});
			}

			function getAll() {
				var deferred  = $q.deref();

				if (repos.length) {
					deferred.resolve(repos);
				} else {
					$http.get('api/1/github/', function(data) {
						if (data.length) {
							cached = true;
							repos = data;
							deferred.resolve(repos);
						}
					});
				}

				return deferred.promise;
			}
		}]);