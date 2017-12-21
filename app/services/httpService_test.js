'use strict';

var $httpBackend, httpBasedService;

beforeEach(module('myApp.service'));

beforeEach(inject(function (_$httpBackend_, _httpBasedService_) {
    $httpBackend = _$httpBackend_;
    httpBasedService = _httpBasedService_;
}));


it('should get something service http based fixing that ceiling ho', function () {
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

afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
});
