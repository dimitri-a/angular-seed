'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['httpBasedService', '$timeout','$scope', function (httpBasedService, $timeout,$scope) {
        var url = 'https://jsonplaceholder.typicode.com/posts';

            httpBasedService.getUsers(url).then(function(data){
                //todo remove
                debugger;
                $scope.users= data.data;
                console.log('scope.users',$scope.users);
            });


    }]);