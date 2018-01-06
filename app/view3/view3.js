'use strict';

app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'view3Ctrl'
        });
    }])

    .controller('view3Ctrl', function ($q, $timeout) {
        //create promise
        var one = $q.defer();

        one.promise.then(function(result){
            console.log(result);
        });

        $timeout(function(){
            one.resolve('hi there');
        },10);

    })
    .factory('myService', function ($timeout) {
        return {
            go: function ( $q) {
                $timeout(function () {
                    $q.resolve('hello');
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
