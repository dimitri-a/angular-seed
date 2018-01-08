'use strict';

console.log('hello this just the file loading view4.js');
app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view4', {
            templateUrl: 'view4/view4.html',
            controller: 'view4Ctrl'
        });
    }])
    .controller('view4Ctrl',function($scope,$ocLazyLoad){
        console.log('this is view4Ctrl');

        $scope.enableBootstrap=function(){
            console.log('enablebootstrap');
            $ocLazyLoad.load(['bower_components/bootstrap/dist/css/bootstrap.css']);
        };
    });


