angular.module('scoreCard', ['scoreService'])
  .component('scoreCard', {
    templateUrl: 'components/scoreCard/scoreCard.html',
    controller: ScoreCardController,
    controllerAs: 'vm',
    bindings: {
    }
  });

function ScoreCardController(scoreService) {
  this.scores = scoreService.scores;
}
