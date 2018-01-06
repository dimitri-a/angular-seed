'use strict';

app
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view3', {
            templateUrl: 'view3/view3.html',
            controller: 'view3Ctrl'
        });
    }])


    //controller that generates promises and displays status
    .controller('view3Ctrl', function ($q) {






    })
    .factory('generator',function(){
        return {
            giveProm:function(){
                return $q.defer();
            }
        }
    });
