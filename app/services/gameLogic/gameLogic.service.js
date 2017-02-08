'use strict';
angular.module('gameLogicService', [ 'myApp', 'scoreService'])
  .service('gameLogicService', function(weapons, scoreService) {
    var service = this;

    function playerWins(playerChoice, computerChoice) {
      return weapons[playerChoice] && weapons[playerChoice].beats[computerChoice];
    }

    service.getResultAndUpdateScore = function(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
      } else if (playerWins(playerChoice, computerChoice)){
        scoreService.incrementPlayer();
        return 'You win!';
      } else {
        scoreService.incrementComputer();
        return 'You lose!';
      }
    };
  });
