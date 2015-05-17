'use strict';


angular.module('core').controller('HomeController', ['$scope', '$http', 'Authentication',
	function($scope, $http, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		$scope.getWatching = function(githubUsername) {
			$http.get('https://api.github.com/users/' + githubUsername + '/subscriptions').
				success(function(response) {
					$scope.result = response;
				});
			$http.get('https://api.github.com/users/' + githubUsername).
				success(function(response) {
					$scope.user = response;
				});
		};
	}
]);
