'use strict';

describe('Service: getJSONFiles', function () {

  // load the service's module
  beforeEach(module('compilerApp'));

  // instantiate service
  var getJSONFiles;
  beforeEach(inject(function (_getJSONFiles_) {
    getJSONFiles = _getJSONFiles_;
  }));

  it('should do something', function () {
    expect(!!getJSONFiles).toBe(true);
  });

});
