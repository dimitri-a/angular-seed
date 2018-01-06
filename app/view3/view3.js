'use strict';

app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'view3Ctrl'
        });
    }])

    .controller('view3Ctrl', function ($q, $timeout, myService) {


        var one = $q.defer();
        var two = $q.defer();
        var three = $q.defer();


        var all = $q.all([one.promise, two.promise, three.promise]);

        all.then(function (res) {
            console.log('hier');
            console.log(res);
        });


        one.resolve('one is resolved');
        two.resolve('two is resolved');
        three.resolve('three is resolved');


    })
    .factory('myService', function ($timeout) {
        return {
            go: function () {
                return $timeout(function () {
                    return 'hello from service';
                }, 1000);
            }
        }
    });


// 'use strict';
//
// app
//     .config(['$routeProvider', function ($routeProvider) {
//         $routeProvider.when('/view3', {
//             templateUrl: 'view3/view3.html',
//             controller: 'view3Ctrl'
//         });
//     }])
//
//     .controller('view3Ctrl', function ($q, myService) {
//         //create q service:
//         var defer = $q.defer();
//
//         // call async
//         myService.go().then(
//             function () {
//                 console.log(result);
//             }
//         );
//     })
//     .factory('myService', function ($timeout) {
//         return {
//             go: function ( $q) {
//                 $timeout(function () {
//                     $q.resolve('hello');
//                 }, 1000);
//             }
//         }
//     });
//
//
//
