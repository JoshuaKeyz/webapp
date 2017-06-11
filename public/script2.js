angular.module('ngRouteExample', ['ngRoute'])
    .controller('MainController', function($scope, $route, $routeParams, $location){
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;
    })
    .controller('BookController', function($scope, $routeParams){
        $scope.name = 'BookController';
        $scope.params = $routeParams;
    })
    .controller("ChapterController", function($scope, $routeParams){
        $scope.name = "ChapterController";
        $scope.params = $routeParams;
    })
    .config(function($routeProvider, $locationProvider){
        $routeProvider
            .when("/",{
                redirectTo: 'example/book.html'
            })
            .when('/Book/:bookId', {
                templateUrl: 'example/book.html',
                controller: 'BookController',
                resolve: {
                    // To cause 1 second delay
                    delay: function($q, $timeout){
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/Book/:bookId/ch/:chapterId',{
                templateUrl: 'example/chapter.html', 
                controller: 'ChapterController'
            })
            .otherwise({
                redirectTo: "example/book.html"
            })
            //Configure html5 to get links working on js Fiddle
            $locationProvider.html5Mode(true);
    })