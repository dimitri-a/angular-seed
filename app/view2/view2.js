'use strict';

app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'view2Ctrl'
        });
    }])


// .controller('View2Ctrl', function ($scope) {
//     console.log('view2ctrll is starting');
//
//     $scope.init = function () {
//         DataService.getGreeting().then(function (result) {
//             //todo remove
//             debugger;
//             $scope.val = result.property;
//         });
//     };
//
//     $scope.init();
//
//
// });

.controller('view2Ctrl', function ($scope, DataService) {

    $scope.init = function(){
        // The search service returns a promise API
        DataService.getGreeting('https://jsonplaceholder.typicode.com/todos')
            .then(function (res) {
                // This is set when the promise is resolved.

                $scope.length =res;
                console.log('view2ctrl, resolve Dataservice.getGreeting()=',res);
            })
            .catch(function (err) {
                // This is set in the event of an error.

                $scope.error = 'There has been an error!';
                console.log($scope.error);
            });
    };

    $scope.init();

});
