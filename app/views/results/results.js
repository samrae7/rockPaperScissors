'use strict';

angular.module('resultsView', [
  'ngRoute',
  'computerPlayerService',
  'gameLogicService',
  'timerService'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/results/:playerChoice', {
    templateUrl: 'views/results/results.html',
    controller: 'ResultController',
    controllerAs: 'vm'
  });
}])

.controller('ResultController', [
  'computerPlayerService',
  'gameLogicService',
  '$routeParams',
  'timerService',
  ResultController
]);

function ResultController(
  computerPlayerService,
  gameLogicService,
  $routeParams,
  timerService
) {

  var vm = this;
  var countTotal = 3;
  vm.playerChoice = $routeParams.playerChoice;
  vm.computerChoice = computerPlayerService.computerChoice();
  vm.result = gameLogicService.result(vm.playerChoice, vm.computerChoice);
  vm.count = countTotal;
  vm.showResult = false;

  var callback = function(i) {
    vm.count = countTotal - i;
  };

  timerService.timer(callback, countTotal)
    .then(function() {
      vm.showResult = true;
      gameLogicService.updateScore(vm.playerChoice, vm.computerChoice);
    });
}
