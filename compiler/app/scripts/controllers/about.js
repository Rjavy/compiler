'use strict';

/**
 * @ngdoc function
 * @name compilerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the compilerApp
 */
angular.module('compilerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
