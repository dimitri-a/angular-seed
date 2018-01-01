'use strict';

app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])


    .controller('View1Ctrl', function (httpBasedService,$scope) {
        console.log('view1ctrll is starting');

        $scope.callSomething = function(){
            console.log('view1ctrl:scope.callsomething is starting');
            httpBasedService.getUsers('https://jsonplaceholder.typicode.com/users').then(function (result) {
                console.log('successful httpbasedservice.getusers call inside view1ctrl');
                $scope.users = result.data;
                console.log('scope .users',$scope.users);
            });

        };

       $scope.callSomething();

    });