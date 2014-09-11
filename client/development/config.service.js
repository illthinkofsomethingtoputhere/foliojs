angular.module('app')
	.service('config', ['$http', '$q', 'defaultConfig', function($http, $q, defaultConfig) {
		var config = defaultConfig;

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