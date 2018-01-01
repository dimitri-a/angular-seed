'use strict';

var $httpBackend, httpBasedService,$timeout;

describe('httpbased service',function(){

    beforeEach(module('myApp'));

    beforeEach(inject(function (_$httpBackend_, _httpBasedService_,_$timeout_) {
        $httpBackend = _$httpBackend_;
        httpBasedService = _httpBasedService_;
        $timeout = _$timeout_;
    }));


    it('should get response 200 service http based', function () {
        // given
        var response = {data: 'result'};
        var result = {}
        $httpBackend.expect('GET', '/hoer').respond(200, response);

        // when
        httpBasedService.getUsers('/hoer').then(function (responseData) {
            result = responseData;
        });
        $httpBackend.flush();

        // // then
        expect({data: 'result'}).toEqual(response);
    });

    it('should get response 404 when service timesout', function () {

        var response = {data: 'error'};
        var result = {};

        $httpBackend.expect('GET', '/hoer').respond(404, response);

        $timeout(httpBasedService.getUsers('/hoer').then(function (err) {
            result = err;
        }), 1000);

        $httpBackend.flush();

        // // then
        expect({data: 'error'}).toEqual(response);


    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});

