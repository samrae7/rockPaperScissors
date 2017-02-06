'use strict';

angular.module('resultsView', [
  'ngRoute',
  'myApp.computerPlayer',
  'gameLogicService'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/results/:playerChoice', {
    templateUrl: 'views/results/results.html',
    controller: 'ResultController',
    controllerAs: 'vm'
  });
}])

.controller('ResultController', [
  'ComputerPlayerService',
  'gameLogicService',
  '$routeParams',
  ResultController
]);

function ResultController(
  computerPlayerService,
  gameLogicService,
  $routeParams
) {

  var vm = this;

  vm.playerChoice = $routeParams.playerChoice;
  vm.computerChoice = computerPlayerService.computerChoice();
  vm.result = gameLogicService.result(vm.playerChoice, vm.computerChoice);
}
