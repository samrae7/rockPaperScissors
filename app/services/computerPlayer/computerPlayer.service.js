'use strict';
angular.module('myApp.computerPlayer', [])
  .service('ComputerPlayerService', function() {
    var choices = ['rock', 'paper', 'scissors'];
    this.computerChoice = function() {
      var randomDecimal = (Math.random() * choices.length);
      var randomIndex = Math.floor(randomDecimal);
      return choices[randomIndex];
    }
  });
