'use strict';

angular.module('myApp.service', [])
    .factory('httpBasedService', function ($http) {
        console.log('httpbasedservice start');
        return {
            getUsers: function (url) {
                return $http.get(url, {timeout: 10000}).then(function (data) {
                    console.log('httpbasedservice success');

                    return data;
                }, function (err) {
                    console.log('httpbasedservice error');
                    return -1;
                })
            }
        };
    });