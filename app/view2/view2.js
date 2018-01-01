'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'GreetController'
        });
    }])

    .controller('GreetController',
        function (doStuff,$scope) {
            doStuff.update()
                .then(function (result) {
                        $scope.title = result.data[0].title;
                    },
                    function (result) {
                        console.error('Error: ' + result);
                    });
        }
    );