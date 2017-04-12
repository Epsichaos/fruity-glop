var app = angular.module('bootblog', ['ngRoute']);


app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'client/views/home.htm',
            controller: 'HomeCtrl'
        })
        .when('/about', {
             templateUrl: 'client/views/about.htm'
        })
        .when('/contact', {
            templateUrl: 'client/views/contact.htm'
        });
});
