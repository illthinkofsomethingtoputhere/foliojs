angular.module('app')
	.controller('head', ['$scope', 'config', function($scope, config) {

		config.load()
			.then(function() {
				$scope.branding = config.branding();
			});

	}])
	.controller('navigation', ['$scope', 'config', function($scope, config) {

		config.load()
			.then(function() {
				$scope.branding = config.branding();
                $scope.tools = config.tools();
            });

	}])
    .controller('home', ['$scope', 'config', function($scope, config) {

        config.load()
            .then(function() {
                $scope.pages = config.pages();
            });

    }]);