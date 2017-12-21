app.factory('httpBasedService', function($http) {
    return {
        getUsers: function() {
            return $http.get('https://jsonplaceholder.typicode.com/users')
                .then(function(result) {
                    return result.data;
                });
        }
    };
});