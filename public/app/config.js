(function(angular){
    angular.module('shopApp').config(['$locationProvider', '$routeProvider', 
    function($locationProvider, $routeProvider){
        $locationProvider.hashPrefix('!')
        $routeProvider
            .when('/women', {
                template: '<women-component></women-component>'
            })
            .when('/men', {
                template: '<men-component></men-component>'
            })
            .when('/accessories', {
                template: "<accessories-component></accessories-component>"
            })
            .when('/home', {
                template: '<homepage-component></homepage-component>'
            })
            .otherwise('/home')
    }])
})(window.angular)