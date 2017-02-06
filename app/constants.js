angular.module('constants', [])
  .constant('WEAPONS', {
    rock: {
      beats: {
        scissors: true
      }
    },
    paper: {
      beats: {
        rock: true
      }
    },
    scissors: {
      beats: {
        paper: true
      }
    }
  });
