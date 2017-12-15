var app = angular.module('stickyService', [])

	// each function returns a promise object 
	app.factory('StickyService', ['$http', function($http) {
		return {
			get: function() {
				return $http.get('/v1/stickies');
			},
			create: function(stickyData) {
				return $http.post('/v1/add', stickyData);
			},
			update: function(id, status) {
				return $http.put('/v1/update/' + id + '/' + status);
			}
		}
	}]);