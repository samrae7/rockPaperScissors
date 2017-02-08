'use strict';

function ChooseController($location, weapons) {
  var vm = this;
  vm.onChange = function(weapon) {
    $location.path('/results/' + weapon);
  };
  vm.weapons = weapons;
}

angular.module('choose', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/choose', {
      templateUrl: '/views/choose/choose.html',
      controller: 'ChooseController',
      controllerAs: 'vm'
    });
  }])
  .controller('ChooseController', ['$location', 'weapons', ChooseController]);
