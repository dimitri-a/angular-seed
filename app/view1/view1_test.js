'use strict';

describe('myApp.view1 module', function () {

    var $scope, $rootScope, httpBasedService;

    beforeEach(module('myApp.view1'));
    beforeEach(module('myApp.service'));

    beforeEach(inject(function (_$rootScope_, _httpBasedService_) {
        $rootScope = _$rootScope_;
        $scope = _$rootScope_.$new();
        httpBasedService = _httpBasedService_;


    }));

    describe('view1 controller', function () {

        it('should be defined and stuff', inject(function ($controller) {
            //spec body
            var view1Ctrl = $controller('View1Ctrl', {$scope: $scope});
            expect(view1Ctrl).toBeDefined();
            //expect($scope.greeting).toEqual('hello');
        }));


        it('scope.user should have items', inject(function ($controller) {
            //spec body
            var view1Ctrl = $controller('View1Ctrl', {$scope: $scope});
           // expect($scope.users.length).toBeGreaterThan(0);
        }));

    });
});