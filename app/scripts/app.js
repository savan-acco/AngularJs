'use strict';

/**
 * @ngdoc overview
 * @name angularJsappApp
 * @description
 * # angularJsappApp
 *
 * Main module of the application.
 */
// angular
//   .module('angularJsappApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });

  
  var app = angular.module('myApp', ["ngRoute"]); 
  app.config(function($routeProvider){
      $routeProvider
      .when("/",{
          templateUrl:"todo.html",
          controller: "todoCtrl"
      })
      .when("/new-york",{
          templateUrl:"./../views/new-york.html",
          controller:"city"
      })
      .when("/london",{
          templateUrl:"./../views/london.html",
          controller:"city"
      })
      .otherwise({
          redirectTo:"/",
      })
  })

    
  app.service('siblingSharing',function(){
  
    list=[];

    this.addToList=function(x)
    {
        list.push(x);
    }

    this.getList=function()
    {
        return list;
    }

});