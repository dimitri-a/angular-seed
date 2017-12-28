// loading for each http request
'use strict';

angular.module('myApp.httpInterceptor', [])
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push(function ($rootScope, $q) {
            return {
                request: function (config) {
                    config.timeout = 100000;
                    return config;
                },

                responseError: function (rejection) {
                    console.log('responseerror');
                    $rootScope.error = 'there is an errror with the interceptor';
                    //todo remove
                    debugger;
                    switch (rejection.status) {
                        case -1 :
                            console.log('connection timed out');

                            break;
                    }
                    return $q.reject(rejection);
                }
            };
        });
    });
