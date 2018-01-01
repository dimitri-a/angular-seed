app.factory('DataService', function ($q, $http) {
    var service = {};

    service.getGreeting = function search () {
        // We make use of Angular's $q library to create the deferred instance
        var deferred = $q.defer();

        $http.get('https://jsonplaceholder.typicode.com/todos')
            .success(function(data) {
                // The promise is resolved once the HTTP call is successful.
                deferred.resolve(data[0].title);
            })
            .error(function() {
                // The promise is rejected if there is an error with the HTTP call.
                deferred.reject();
            });

        // The promise is returned to the caller
        return deferred.promise;
    };

    return service;
});