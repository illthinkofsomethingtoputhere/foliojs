angular.module('app')
	.controller('head', ['$scope', 'config', function($scope, config) {

		$scope.branding = config.branding();
	}])
	.controller('navigation', ['$scope', 'config', function($scope, config) {

		$scope.branding = config.branding();
		$scope.tools = config.tools();
	}])
    .controller('home', ['$scope', 'config', function($scope, config) {

        $scope.pages = config.pages();
    }]);