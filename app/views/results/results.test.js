'use strict';

describe('resultsView module', function() {
  var $routeParams,
    constants,
    $controller,
    timerService,
    $rootScope,
    $q,
    $interval,
    computerPlayerService,
    gameLogicService,
    $scope;

  beforeEach(function() {
    module('resultsView');
    $routeParams = {};
    constants = {}
  });

  beforeEach(inject(function(
    _$controller_,
    _$rootScope_,
    _$q_,
    _$interval_
  )
  {
    $rootScope =  _$rootScope_;
    $scope = $rootScope.$new();
    $controller = _$controller_;
    $interval = _$interval_;
    $q = _$q_;
    timerService = {
      timer: function() {
        return $q.resolve($q.resolve());
      }
    };
    computerPlayerService = {
      computerChoice: function() {}
    };
    gameLogicService = {
      getResultAndUpdateScore: function (playerChoice, computerChoice) {}
    };
    $routeParams = {
      playerChoice: ''
    }
  }));

  describe('results controller', function() {

    describe('WHEN the controller is instantiated', function() {

      var vm;
      var timer;
      var computerPlayerServiceComputerChoice;
      var gameLogicServiceGetResultAndUpdateScore;
      var mockPlayerChoice = 'foo';
      var mockComputerChoice = 'bar';
      var mockResultValue = 'The result is FooBar';

      beforeEach(function() {
        timer = spyOn(timerService, 'timer').and.callThrough();
        computerPlayerServiceComputerChoice = spyOn(computerPlayerService, 'computerChoice').and.returnValue(mockComputerChoice);
        gameLogicServiceGetResultAndUpdateScore = spyOn(gameLogicService, 'getResultAndUpdateScore').and.returnValue(mockResultValue);
        $routeParams.playerChoice = mockPlayerChoice;

        vm = $controller('ResultsController', {
          computerPlayerService: computerPlayerService,
          gameLogicService: gameLogicService,
          $routeParams: $routeParams,
          timerService: timerService
        });

        $scope.$digest()
      });

      it('should call the timer service', function() {
        expect(timer).toHaveBeenCalled();
      });

      it('should set computerChoice using computerPlayerService.result', function() {
        expect(computerPlayerServiceComputerChoice).toHaveBeenCalled();
        expect(vm.computerChoice).toEqual(mockComputerChoice);
      });

      it('should set the player choice to match the routeParam', function() {
        expect(vm.playerChoice).toEqual(mockPlayerChoice);
      });

      it('should call gameLogicService.getResultAndUpdateScore with correct args, on next digest cycle', function() {
        expect(gameLogicServiceGetResultAndUpdateScore).toHaveBeenCalledWith(mockPlayerChoice, mockComputerChoice);
      });

      it('should set vm.result to the return value of gameLogicService.getResultAndUpdateScore', function() {
        expect(vm.result).toEqual(mockResultValue);
      });
    });
  });
});
