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
            callService: function () {
            }
        };


    }));

    describe('view1 controller', function () {

        it('should be defined and stuff', inject(function ($controller) {
            //spec body
            var view1Ctrl = $controller('View1Ctrl', {$scope: localScope});
            expect(view1Ctrl).toBeDefined();
            //expect($scope.greeting).toEqual('hello');
        }));


        it('should call service', inject(function ($controller, {httpBasedService: mockService}) {


            spyOn(mockService, 'callService').andCallThrough();

            var view1Ctrl = $controller('View1Ctrl', {$scope: localScope});

            localScope.callService();

            expect(mockService.callService).toHaveBeenCalled();

        }));


    });
});