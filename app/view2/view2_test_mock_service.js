'use strict';

describe('Testing a Controller that uses a Mocked out service', function () {
    var localScope;
    var $q;
    var deferred, mockService, ctrl;

    beforeEach(module('myApp'));

    beforeEach(module(function ($provide) {
        //mock out service completely
        mockService = jasmine.createSpyObj('DataService', ['getGreeting']);
        $provide.value('DataService', mockService);
    }));

    beforeEach(inject(function ($controller,$rootScope) {
        localScope = $rootScope.$new();
        ctrl = $controller('view2Ctrl',{$scope:localScope});

    }));

    it('should resolve promise', inject(function ($q, $rootScope) {
        //create promise
        deferred = $q.defer();

        //mock service response (foc controller's constructor)
        mockService.getGreeting.and.returnValue(deferred.promise);
        
        localScope.init();

        expect(localScope.results).toEqual(undefined);

        deferred.resolve('Hello World');

        //not yet...
        expect(localScope.results).toEqual(undefined)

        //"it's important to know that the resolution of promises is tied to the digest cycle"
        $rootScope.$apply();

        //now!
        expect(localScope.results).toBe('Hello World');
    }));

    xit('should reject promise', function () {
        // This will call the .catch function in the controller
        deferred.reject();

        // We have to call apply for this to work
        localScope.$apply();

        // Since we called apply, not we can perform our assertions
        expect(localScope.results).toBe(undefined);
        expect(localScope.error).toBe('There has been an error!');
    });

});