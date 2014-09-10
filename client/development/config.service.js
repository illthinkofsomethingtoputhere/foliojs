angular.module('app')
	.service('config', ['$http', '$q', 'defaultConfig', function($http, $q, defaultConfig) {
		var config = {}	,
			api = 'api/1/config/',
			deferred;

		this.load = function() {

			if (deferred) return deferred.promise;

			deferred = $q.defer();

			$http.get(api)
				.success(function(data) {
					config = angular.extend(defaultConfig, data);
					deferred.resolve(config);
				})
				.error(function() {
					config = defaultConfig;
					deferred.resolve(config);
				});

			return deferred.promise;
		}

		this.branding = function() {
			return config.branding;
		};

		this.tools = function() {
			return config.tools;
		};

		this.pages = function() {
			return config.pages;
		}
	}]);