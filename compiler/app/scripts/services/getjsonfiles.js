'use strict';

/**
 * @ngdoc service
 * @name compilerApp.getJSONFiles
 * @description
 * # getJSONFiles
 * Factory in the compilerApp.
 */
angular.module('compilerApp')
  .factory('getJSONFiles', ['$http', '$q', function ($http, $q) {
    // Public API here
    return {
    getLexicoJson: function  getLexicoJson() {
        return $q(function(resolve, reject){
          $http.get('../../jsons/lexico.json')
          .then(function (response) {
            resolve(response);
          }, function(err){
            reject(err);
          });
        });
      },

    };
  }]);
