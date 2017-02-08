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
  '$interval',
  ResultController
]);

function ResultController(
  computerPlayerService,
  gameLogicService,
  $routeParams,
  $interval
) {

  var vm = this;
  vm.playerChoice = $routeParams.playerChoice;
  vm.computerChoice = computerPlayerService.computerChoice();
  vm.result = gameLogicService.result(vm.playerChoice, vm.computerChoice);
  vm.count = 3;
  vm.showResult = false;

  function timer() {
    return $interval(function(i) {
      vm.count = 3-i;
    }, 1000, 3);
  }

  timer().then(function() {
      vm.showResult = true;
      gameLogicService.updateScore(vm.playerChoice, vm.computerChoice);
    });
}
