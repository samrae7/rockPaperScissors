'use strict';
angular.module('computerPlayerService', ['myApp'])
  .service('computerPlayerService', function(weapons) {
    var choices = Object.keys(weapons);

    this.computerChoice = function() {
      var randomDecimal = (Math.random() * choices.length);
      var randomIndex = Math.floor(randomDecimal);
      return choices[randomIndex];
    }
  });
