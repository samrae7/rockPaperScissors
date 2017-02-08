'use strict';
angular.module('timerService', [])
  .service('timerService', function($interval) {
    var service = this;

    service.timer = function(callback, countTotal) {
      return $interval(callback, 1000, countTotal);
    }
  });
