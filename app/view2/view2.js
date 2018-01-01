'use strict';

app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'view2Ctrl'
        });
    }])


    .controller('view2Ctrl', function (httpBasedService,$scope) {
        console.log('view2ctrll is starting');

        $scope.callSomething = function(){
            console.log('view2ctrl:scope.callsomething is starting');
            httpBasedService.getUsers('https://jsonplaceholder.typicode.com/users').then(function (result) {
                console.log('successful httpbasedservice.getusers call inside view2ctrl');
                $scope.users = result.data;
                console.log('scope .users',$scope.users);
            });

        };

        $scope.callSomething();

    });