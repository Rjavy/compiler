'use strict';

/**
 * @ngdoc overview
 * @name compilerApp
 * @description
 * # compilerApp
 *
 * Main module of the application.
 */
angular
  .module('compilerApp', [
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
        templateUrl: 'views/lexicoView.html',
        controller: 'Lexicocontroller'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
