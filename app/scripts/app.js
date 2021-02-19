'use strict';

/**
 * @ngdoc overview
 * @name angularJsappApp
 * @description
 * # angularJsappApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
