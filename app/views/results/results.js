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
    controller: 'ResultsController',
    controllerAs: 'vm'
  });
}])

.controller('ResultsController', [
  'computerPlayerService',
  'gameLogicService',
  '$routeParams',
  'timerService',
  ResultsController
]);

function ResultsController(
  computerPlayerService,
  gameLogicService,
  $routeParams,
  timerService
) {

  var vm = this;
  var countTotal = 3;
  vm.playerChoice = $routeParams.playerChoice;
  vm.computerChoice = computerPlayerService.computerChoice();
  vm.count = countTotal;
  vm.showResult = false;

  var callback = function(i) {
    vm.count = countTotal - i;
  };

  timerService.timer(callback, countTotal)
    .then(function() {
      vm.result = gameLogicService.getResultAndUpdateScore(vm.playerChoice, vm.computerChoice);
      vm.showResult = true;
    });
}
