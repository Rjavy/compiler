'use strict';

/**
 * @ngdoc function
 * @name compilerApp.controller:LexicocontrollerCtrl
 * @description
 * # LexicocontrollerCtrl
 * Controller of the compilerApp
 */
angular.module('compilerApp')
  .controller('Lexicocontroller', ['$scope', 'getJSONFiles', function ($scope, getJSONFiles) {
    $scope.writeCode = '';
    $scope.splitWriteCode = '';
    $scope.tokens = [];

    getJSONFiles.getLexicoJson()
    .then(function(data){
      $scope.lexicoTable =  data.data;
      console.log($scope.lexicoTable);
    })
    .then(null, function(err){
      console.log(err);
    });

    //This function separate the wrote code and return an array for check the tokens
    $scope.filterWriteCode =  function filterWriteCode() {
      $scope.tokens = [];

      $scope.splitWriteCode = $scope.writeCode.split(/\s+|\;/);
      $scope.lookingTokens();
    }

    $scope.lookingTokens = function lookingTokens(){
      for (var word in $scope.splitWriteCode){
        $scope.getTokens($scope.splitWriteCode[word]);
      }
    }


    $scope.getTokens = function getTokens(word){
      for(var simbol in $scope.lexicoTable){
        var rg = new RegExp(simbol);
        if (rg.test(word)) {

          var token = {
            type : $scope.lexicoTable[simbol].type,
            simbol: word
          };
          $scope.tokens.push(token);
        }
      }
    }

  }]);
