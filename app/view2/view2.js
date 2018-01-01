'use strict';

app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'view2Ctrl'
        });
    }])


    .controller('view2Ctrl', function (DataService, $scope) {
        console.log('view2ctrll is starting');

        $scope.init = function () {
            DataService.getGreeting()
                .then(function (result) {

                        $scope.greeting = result;
                        console.log('$scope.greeting =',$scope.greeting);
                    },
                    function (result) {
                        console.error('Error: ' + result);
                    });
        }


    });