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
    // The search service returns a promise API
    DataService.getGreeting($scope.query)
        .then(function (data) {
            // This is set when the promise is resolved.
            $scope.results = data;
            console.log(data);
        })
        .catch(function () {
            // This is set in the event of an error.
            $scope.error = 'There has been an error!';
        });
});
