app.factory('httpBasedService', function($http) {
    return {
        getUsers: function() {
            return $http.get('bla')
                .then(function(result) {
                    return result.data;
                });
        }
    };
});