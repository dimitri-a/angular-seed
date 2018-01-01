'use strict';

angular.module('myApp.service', [])
    .factory('DataService', function ($http) {
        console.log('DataService start');
        return {
            getGreeting: function (url) {
                return $http.get(url).then(function (data) {
                    console.log('DataService success');

                    return data;
                }, function (err) {
                    console.log('DataService error');
                    return -1;
                })
            }
        };
    });