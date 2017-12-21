
'use strict';

angular.module('myApp.service', [])

.factory('httpBasedService', function($http) {
    return {
        getUsers: function(url) {
            return $http.get(url)
                .then(function(result) {
                    return result.data;
                });
        }
    };
});