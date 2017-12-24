'use strict';

angular.module('myApp.service', [])
    .factory('httpBasedService', function ($http) {
        console.log('httpbasedservice here');
        return {
            getUsers: function (url) {
                return $http.get(url, {timeout: 10000}).then(function (data) {
                    console.log(data);
                    return data;
                }, function (err) {
                    console.log(err);
                })
            }
        };
    });