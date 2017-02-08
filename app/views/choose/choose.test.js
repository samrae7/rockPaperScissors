'use strict';

describe('choose module', function() {

  var $controller,
    $location,
    paths;

  beforeEach(function() {
    module('choose', 'myApp');

    inject(
      function(
        _$controller_,
        _$location_,
        _paths_
      ) {
        $controller = _$controller_;
        $location = _$location_;
        paths = _paths_
      }
    )
  });

  describe('GIVEN the choose view controller is instantiated', function(){

    describe('WHEN the onChange function is called', function() {
      var vm;
      var weapon = 'rock';

      beforeEach(function() {
        spyOn($location, 'path');
        vm = $controller('ChooseController');
        vm.onChange(weapon);
      });

      it('should change the path to match the chosen weapons', function() {
        expect($location.path).toHaveBeenCalledWith(paths.results + weapon);
      });
    });
  });
});
