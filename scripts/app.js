var app=angular.module("Email",['ngRoute',]);
app.config(function($routeProvider, $locationProvider) {


  $routeProvider.when('/house',{
    templateUrl:'House.html',
    controller:'HouseController'
  }).when('/home',{
    templateUrl:'Home.html',
    controller:'HomeController'
  }).when('/signup',{
  	templateUrl:'signUp.html',
  	controller:'AddUserController'
  });

  $routeProvider.otherwise({ redirectTo: '/index' });

});
