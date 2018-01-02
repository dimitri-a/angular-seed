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
    it('should resolve promise and mock the DataService', inject(function ($q, $controller, $rootScope) {
        //create promise
        deferred = $q.defer();

        //mock service response (foc controller's constructor)
        //dont care what it returns so deferred.promise is a mocked return
        mockService.getGreeting.and.returnValue(deferred.promise);

        //initialize controller and scope
        localScope = $rootScope.$new();
        ctrl = $controller('view2Ctrl', {$scope: localScope, DataService: mockService});

        //call init
        localScope.init();

        //return mock value for promise
        deferred.resolve(1);

        //run digest cycle to get to 'then' part
        $rootScope.$apply();

        //the scope variable length is assigned the value of the promise resolve
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