'use strict';

/**
 * @ngdoc function
 * @name compilerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the compilerApp
 */
angular.module('compilerApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
