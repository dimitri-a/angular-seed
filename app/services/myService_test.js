var $httpBackend, httpBasedService;

beforeEach(module('app'));

beforeEach(inject(function (_$httpBackend_, _httpBasedService_) {
    $httpBackend = _$httpBackend_;
    httpBasedService = _httpBasedService_;
}));


it('should get something service http based fixing that ceiling ho', function () {
    // given
    var response = {data: 'result'};
    var result = {}
    $httpBackend.expect('GET', '/bla').respond(200, response);

    // when
    httpBasedService.getUsers().then(function (responseData) {
        result = responseData;
    });
    $httpBackend.flush();

    // then
    expect(result).toEqual(response);
});

afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
});
