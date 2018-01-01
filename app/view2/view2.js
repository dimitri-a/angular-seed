'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'GreetController'
  });
}])

.controller('GreetController', [
    function(DataService) {
        var self = this;
        self.greeting = null;

        self.init = function() {
            DataService.getGreeting()
                .then(function(result) {
                        self.greeting = result;
                    },
                    function(result) {
                        console.error('Error: ' + result);
                    });
        };
    }


]);