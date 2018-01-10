'use strict';

console.log('loading file containing view4Ctrl');
app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view4', {
            templateUrl: 'view4/view4.html',
            controller: 'view4Ctrl'
        });
    }])
    .controller('view4Ctrl', function ($scope) {
        console.log('This is lazy loaded!!!');

        $scope.hello='Good day , I am loaded now.';

    });


