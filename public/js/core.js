/**
 * LOTTO JENNY - CORE.JS
 */

// TODO Separate out for production

// == APP ==
var app = angular.module('cstApp', ['ui.router']);

// == configure routes ==
app.config(function($stateProvider, $urlRouterProvider, $locationProvider){
    //default to this location
    $urlRouterProvider.otherwise('/jenny');

    //temporary jennyState

    $stateProvider.state('jenny', {
        url: '/jenny',
        templateUrl:'jenny.html'
    });

    //home state
    $stateProvider.state('home', {
        url:'/home',
        templateUrl:'partials/partial-home.html'
    });

    //nested state with custom controller
    $stateProvider.state('home.videos', {
        url:'/videos',
        templateUrl: 'partials/partial-home-videos.html',
        controller: 'videosController'
        //controller: function($scope) {
        //    $scope.dogs = ['Bernese', 'Husky', 'GoldenDoodle'];
        //}
    });

    //nested state with random string data
    $stateProvider.state('home.projects', {
        url: '/projects',
        template: 'This is where projects or details can be.'

    });

    //about
    $stateProvider.state('lists', {
        url:'/lists',
        views: {
            //main template place here (relatively named)
            '': {templateUrl: 'partials/partial-lists.html'},

            // child views defined here, absolutely named
            //'columnOne@about': {
            //    template: 'Column One Text!'
            //},
            'columnOne@lists': {
                templateUrl: 'templates/left-table-data.html',
                controller: 'carController'
            },
            'columnTwo@lists': {
                templateUrl: 'templates/right-table-data.html',
                controller: 'mainController'
            }

        }
    });

    //uncomment this for no-hash routes (not 100% working)
    //$locationProvider.html5Mode(true);

});// == configure routes - END ==


// ===== CONTROLLERS =====

// == Main Controller ==
app.controller('mainController', function($scope, $timeout){
    $scope.message = 'testingulars';
    $scope.scotches = [
        {
            name:'Macallan 12',
            price: 50
        },
        {
            name:'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name:'Glenfiddich 1937',
            price: 20000
        }
    ];

    // TODO TWITTER FIX
    //$timeout = twttr.widgets.load();
});

// == Videos Controller ==
app.controller('videosController', ['$scope','$http', function($scope, $http){
    $http.get('./models/videos.json').then(function(response){
        $scope.videos = response.data;
        console.log(response.data);
    });
}]);

// == Car Specific Controller ==
app.controller('carController', ['$scope','$timeout', function($scope, $timeout){
    //data for dummy scope
    $scope.cars = [
        {
            model:'Toyota Corolla',
            price: 12000,
            hp: 102,
            tq: 101
        },
        {
            model:'Nissan 240SX',
            price: 2900,
            hp: 140,
            tq: 152
        },
        {
            model:'Toyota Matrix',
            price: 15800,
            hp: 130,
            tq: 125
        },
        {
            model: 'Toyota Corolla',
            price: 16000,
            hp: 126,
            tq: 122
        },
        {
            model: 'Toyota Pickup',
            price: 12000,
            hp: 116,
            tq: 140
        }
    ];
}]);

