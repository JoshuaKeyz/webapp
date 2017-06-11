(function(angular){
    angular.module('shopApp').config(['$locationProvider', '$routeProvider', 
    function($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!')
        $routeProvider
            .when('/phones', {
                template: '<details-component></details-component>'
            })
            .when('/phones/:phoneId', {
                template: '<categories-component></categories-component>'
            })
            .when('/categories', {
                template: "<homepage-component></homepage-component>"
            })
            .otherwise('/phones')
    }])
})(window.angular)