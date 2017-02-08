'use strict';
angular.module('gameLogicService', ['constants', 'scoreService'])
  .service('gameLogicService', function(WEAPONS, scoreService) {
    var service = this;

    function playerWins(playerChoice, computerChoice) {
      return WEAPONS[playerChoice] && WEAPONS[playerChoice].beats[computerChoice];
    }

    service.updateScore = function(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return;
      } else if (playerWins(playerChoice, computerChoice)) {
        scoreService.incrementPlayer();
      } else {
        scoreService.incrementComputer();
      }
    };

    service.result = function(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
      } else if (playerWins(playerChoice, computerChoice)){
        return 'You win!';
      } else {
        return 'You lose!';
      }
    };
  });
