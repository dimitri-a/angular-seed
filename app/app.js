'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
    'ngRoute',
    'oc.lazyLoad'
])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider,$ocLazyLoad) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({redirectTo: '/view4'});
}])
    .controller('MainCtrl',function($scope,$ocLazyLoad){

        $scope.loadView4Ctrl=function(){
            console.log('loadview4ctrl');

            $ocLazyLoad.load({
                name: "View4",
                files: [
                    'view4/view4.js'
                ]
            });

            //$ocLazyLoad.load(['view4/view4.js'],function(ok){console.log(ok);},function(err){console.log(err);});
        };
    });

