'use strict';

app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'view2Ctrl'
        });
    }])


    .controller('view2Ctrl', function ( $scope,DataService) {
        console.log('view2ctrll is starting');

        $scope.callSomething = function(){
           DataService.getGreeting().then(function (result) {
               //todo remove
               debugger;
                $scope.val = result.property;
            });
        };

        $scope.callSomething();


    });