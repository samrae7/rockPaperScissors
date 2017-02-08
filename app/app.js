'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ngRoute',
    'choose',
    'resultsView',
    'scoreCard'
  ])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.otherwise({redirectTo: '/choose'});
  }])
  .constant('paths', {
    choose: '/choose/',
    results: '/results/'
  })
  .constant('weapons', {
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
