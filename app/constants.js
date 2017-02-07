angular.module('constants', [])
  .constant('WEAPONS', {
    rock: {
      beats: {
        scissors: true
      },
      icon: 'fa-hand-rock-o'
    },
    paper: {
      beats: {
        rock: true
      },
      icon: 'fa-hand-paper-o'
    },
    scissors: {
      beats: {
        paper: true
      },
      icon: 'fa-hand-scissors-o'
    }
  });
