'use strict';
angular.module('scoreService', [])
  .service('scoreService', function() {
    var service = this;

    service.scores = {player: 0, computer: 0};

    service.incrementPlayer = function() {
      service.scores.player += 1;
    };

    service.incrementComputer = function() {
      service.scores.computer += 1;
    }
  });
