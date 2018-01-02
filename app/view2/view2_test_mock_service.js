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


    //trying to test whether the dataservice.getGreeting is called
    it('should resolve promise and mock the DataService', inject(function ($q,$controller,$rootScope) {
        //create promise
        deferred = $q.defer();

        //mock service response (foc controller's constructor)
        mockService.getGreeting.and.returnValue(deferred.promise);

        localScope = $rootScope.$new();
        ctrl = $controller('view2Ctrl', {$scope:localScope ,DataService: mockService});

        localScope.init();

        deferred.resolve(1);

        $rootScope.$apply();

        expect(localScope.length).toBe(1);
    }));

    xit('should reject promise', inject(function ($rootScope) {
        // This will call the .catch function in the controller
        deferred.reject();

        // We have to call apply for this to work
        $rootScope.$apply();

        // Since we called apply, not we can perform our assertions
        expect(localScope.results).toBe(undefined);
        expect(localScope.error).toBe('There has been an error!');
    }));

});