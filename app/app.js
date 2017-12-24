'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.service'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view1'});
}]);


// loading for each http request
app.config(function ($httpProvider) {
    $httpProvider.interceptors.push(function ($rootScope, $q) {
        return {
            request: function (config) {
                config.timeout = 10;
                return config;
            },
            responseError: function (rejection) {
                console.log('responseerror');
                //todo remove
                debugger;
                switch (rejection.status){
                    case -1 :
                        console.log('connection timed out');

                        break;
                }
                return $q.reject(rejection);
            }
        }
    })
})
