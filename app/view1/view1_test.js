'use strict';

describe('myApp.view1 module', function () {

    var localScope, $rootScope, httpBasedService, httpBasedServiceMock;

    beforeEach(module('myApp.view1'));
    beforeEach(module('myApp.service'));

    beforeEach(inject(function (_$rootScope_) {
        $rootScope = _$rootScope_;
        localScope = _$rootScope_.$new();
      //  httpBasedService = _httpBasedService_;




    }));


    beforeEach(function(){
        httpBasedServiceMock = {
            getUsers: function () {
            }
        };
    });

    describe('view1 controller', function () {

        it('should call httpBasedService through callSomething', inject(function ($controller) {

            spyOn(httpBasedServiceMock, 'getUsers').and.callThrough();

            var view1Ctrl = $controller('View1Ctrl', {$scope: localScope,httpBasedService:httpBasedServiceMock});

            localScope.callSomething();

            expect(httpBasedServiceMock.getUsers).toHaveBeenCalled();


        }));

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




    });
});