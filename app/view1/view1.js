'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['helloUsingService', 'httpBasedService', function (helloUsingService, httpBasedService) {
        var url ='https://jsonplaceholder.typicode.com/posts';
        httpBasedService.getUsers(url).then(function (data) {
            console.log(data);
        })
    }]);