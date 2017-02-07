'use strict';

angular.module('myApp.choose', ['ngRoute', 'constants'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/choose', {
    templateUrl: '/views/choose/choose.html',
    controller: 'ChooseController',
    controllerAs: 'vm'
  });
}])
.controller('ChooseController', ['$location', 'WEAPONS', ChooseController]);

function ChooseController($location, WEAPONS) {
  var vm = this;
  vm.selected = '';
  vm.onChange = function(weapon) {
    $location.path('/results/' + weapon);
  };
  vm.icon = function(weapon) {
    return WEAPONS[weapon].icon;
  };
  vm.weapons = WEAPONS;
}
