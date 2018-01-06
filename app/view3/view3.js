'use strict';

app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'view3Ctrl'
        });
    }])


    //controller that generates promises and displays status
    .controller('view3Ctrl', function ($timeout, $q, $scope) {
        var promises = [];


        //create a promise with name and succeed property
        function createPromise(name, succeed, counter) {

            var deferred = $q.defer();
            $timeout(
                function () {
                    if (succeed) {
                        $scope[name] = 'resolved';
                        deferred.resolve('ok');
                    }
                    else {
                        $scope[name] = 'rejected';
                        deferred.reject('not ok');
                    }
                }, counter * 1000);

            return deferred.promise;
        }


        //create promises collection
        for (var i = 1; i++; i = 5) {
            var succeed = i % 2 === 0;

        }


        //wait for the promises to be resolved
        $q.all(promises).then(function () {


        });


    });


// //return promise that has random delay
// .factory('generator', function ($q, $timeout) {
//     var pr = $q.defer();
//     return {
//         giveProm: function (name) {
//             return $timeout(function () {
//                 pr.resolve(name);
//             }, Math.random * 1000);
//         }
//     }
// });
