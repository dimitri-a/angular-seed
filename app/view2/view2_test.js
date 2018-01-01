'use strict';

describe('myApp.view2 module', function () {

    var localScope, $rootScope, deferred, mockService;

    beforeEach(module('myApp'));

    beforeEach(module(function ($provide) {
        mockService = jasmine.createSpyObj('DataService', ['getGreeting']);
        $provide.value('DataService', mockService);
    }));

    beforeEach(inject(function (_$rootScope_) {
        $rootScope = _$rootScope_;
        localScope = _$rootScope_.$new();
    }));

    describe('view2 controller', function () {

        it('should be defined and stuff', inject(function ($controller) {
            var view1Ctrl = $controller('view2Ctrl', {$scope: localScope});
            expect(view1Ctrl).toBeDefined();
        }));


        it('greeting should change after promise resolved', inject(function ($q, $rootScope, $controller) {
            var ctrl = $controller('view2Ctrl', {$scope: localScope});

            //create promise
            deferred = $q.defer();

            //mock service response (foc controller's constructor)
            mockService.getGreeting.and.returnValue(deferred.promise);

            //call init()
            localScope.init();

            deferred.resolve('Hello World');

            //not yet...
            expect(localScope.greeting).toBe(undefined)

            //"it's important to know that the resolution of promises is tied to the digest cycle"
            $rootScope.$apply();

            //now!
            expect(localScope.greeting).toBe('Hello World');

        }));

        xit('should call console.error on promise reject', inject(function ($q, $rootScope) {
            //create promise
            deferred = $q.defer();

            //mock service response (foc controller's constructor)
            mockService.getGreeting.and.returnValue(deferred.promise);

            //spy on console error
            spyOn(console, 'error');

            //call init()
            ctrl.init();

            deferred.reject('I hate you Bob!');
            $rootScope.$apply();
            expect(ctrl.greeting).toBeNull();

            expect(console.error).toHaveBeenCalledWith('Error: I hate you Bob!');

        }));

    });
});