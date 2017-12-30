'use strict';

describe('myApp.view1 module', function () {

    var localScope, $rootScope, httpBasedService, mockService;

    beforeEach(module('myApp.view1'));
    beforeEach(module('myApp.service'));

    beforeEach(inject(function (_$rootScope_, _httpBasedService_) {
        $rootScope = _$rootScope_;
        localScope = _$rootScope_.$new();
        httpBasedService = _httpBasedService_;

        mockService = {
            getUsers: function () {
            }
        };


    }));

    describe('view1 controller', function () {

        xit('should be defined and stuff', inject(function () {
            //spec body

            expect(view1Ctrl).toBeDefined();
            //expect($scope.greeting).toEqual('hello');
        }));


        xit('should call scope.something', inject(function () {


            spyOn(localScope, 'callSomething').and.callThrough();

            localScope.callSomething();

            expect(localScope.callSomething).toHaveBeenCalled();

        }));

        it('should call httpBasedService through callSomething', inject(function ($controller) {


            spyOn(httpBasedService, 'getUsers').and.callThrough();

            var view1Ctrl = $controller('View1Ctrl', {$scope: localScope});

            expect(httpBasedService.getUsers).toHaveBeenCalled();


        }));


    });
});