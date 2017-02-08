'use strict';

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ngRoute',
    'myApp.choose',
    'resultsView',
    'constants',
    'scoreCard'
  ])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.otherwise({redirectTo: '/choose'});
  }]);
