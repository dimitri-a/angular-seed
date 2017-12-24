
'use strict';

angular.module('myApp.service', [])

.factory('httpBasedService', function($http) {
    console.log('httpbasedservice here');
    return {
        getUsers: function(url) {
            return $http.get(url)
                .then(function(result) {
                    return result.data;
                })
                .error(function(err){
                   console.log('timeout',err);
                });
        }
    };
});