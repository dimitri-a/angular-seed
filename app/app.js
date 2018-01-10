'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'oc.lazyLoad'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider, $ocLazyLoad) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/view1'});
    }])
    .controller('MainCtrl', function ($scope, $ocLazyLoad) {

        $scope.loadView4Ctrl = function () {
            console.log('loadview4ctrl');

            $ocLazyLoad.load("view4/view4.js").then(
                function () {
                    console.log('loaded view4.js!!');

                }, function (e) {
                    console.log('error loading view4.js');
                    console.error(e);
                })
        };
    });

