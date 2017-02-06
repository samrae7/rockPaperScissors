'use strict';

describe('myApp.choose module', function() {

  beforeEach(
    module('myApp.choose', 'constants')
  );

  describe('choose controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var chooseController = $controller('ChooseController', {constants: {}});
      expect(chooseController).toBeDefined();
    }));

  });
});
