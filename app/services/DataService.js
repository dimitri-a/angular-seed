// 'use strict';
//
// app.factory('DataService',function serviceMethod($timeout) {
//         return $timeout(function() {
//             return {
//                 property: 'hello'
//             };
//         }, 1000);
//     });
//
//


'use strict';

app
    .factory('DataService', function ($timeout) {
        return {
            getGreeting:
                function() {
                    return $timeout(function() {
                        return {
                            property: 'blablabla'
                        };
                    }, 1000);
                }

        }
        ;
    });