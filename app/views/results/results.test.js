'use strict';

describe('resultsView module', function() {
  var $routeParams,
    constants;

  beforeEach(function() {
    module('resultsView');
    $routeParams = {};
    constants = {}
  });

  describe('results controller', function() {

    it('should ....', inject(function($controller) {
      //spec body
      var resultController = $controller('ResultController', {
        $routeParams: $routeParams
      });
      console.log(resultController, 'KKKKKK');
      expect(resultController).toBeDefined();
    }));

  });
});
