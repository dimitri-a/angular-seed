'use strict';

angular.module('myApp.service', [])
    .factory('httpBasedService', function ($http) {
        console.log('httpbasedservice here');
        return {
            getUsers: function (url) {
                return $http.get(url, {timeout: 10000}).then(function (data) {
                    //todo remove
                    debugger;
                    console.log('interceptor alrighto');
                    return data;
                }, function (err) {
                    console.log('interceptor:error time man');
                    return -1;
                })
            }
        };
    });