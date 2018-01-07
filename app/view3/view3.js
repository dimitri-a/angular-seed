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

            $scope[name] = 'running';

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
        for (var i = 1; i <= 5; +i++) {
            var succeed = i!==1;
            //console.log(succeed);

            promises.push(createPromise('promise' + i, succeed, i));
        }

        console.log('before q.all is called');

        $scope.status1 = 'waiting';
        $scope.status2 = 'waiting';
        //request all promises to be resolved
        //goes to error state once 1 of the promises go to reject state
        $q.all(promises).then(function (res) {
            console.log('in then for $q.all success state....');
            //todo remove
            debugger;
                $scope.status1 = 'cool';
            },
            function (res) {
            console.log('inside $q.all error state err=',res);
                $scope.status1 = 'at least one of the promises got rejected';
            }).finally(function () {
            $scope.status2 = 'Fix 1 of the promises or end for all successfully, depends on status1';
        })

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
