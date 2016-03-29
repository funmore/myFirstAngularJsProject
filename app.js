var app=angular.module('myEmail',['ngRoute']);
app.config(function($routeProvider, $locationProvider) {


  $routeProvider.when('/house',{
    templateUrl:'House.html',
    controller:'HouseController'
  }).when('/home',{
    templateUrl:'Home.html',
    controller:'HomeController'
  });

  $routeProvider.otherwise({ redirectTo: '/' });

});
