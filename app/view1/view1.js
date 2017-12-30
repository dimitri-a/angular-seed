'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])


    .controller('View1Ctrl', function (httpBasedService,$scope) {

        $scope.callService = function(){
            httpBasedService.getUsers('https://jsonplaceholder.typicode.com/users').then(function (result) {
                $scope.users = result.data;
                console.log('scope .users',$scope.users);
            });
        };

        $scope.callService();

    });