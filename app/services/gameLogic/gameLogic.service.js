'use strict';
angular.module('gameLogicService', ['constants'])
  .service('gameLogicService', function(WEAPONS) {
    var service = this;
    function playerWins(playerChoice, computerChoice) {
      // console.log('weapons', WEAPONS[playerChoice]);
      return WEAPONS[playerChoice] && !!WEAPONS[playerChoice].beats[computerChoice];
    }
    service.result = function(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return 'It\'s a tie'
      } else if (playerWins(playerChoice, computerChoice)){
        return 'You win!'
      } else {
        return 'You lose!'
      }
    }
  });
