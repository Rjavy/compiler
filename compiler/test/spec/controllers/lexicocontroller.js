'use strict';

describe('Controller: LexicocontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('compilerApp'));

  var LexicocontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LexicocontrollerCtrl = $controller('LexicocontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
