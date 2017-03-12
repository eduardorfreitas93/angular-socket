'use strict';

/**
 * @ngdoc overview
 * @name appsockApp
 * @description
 * # appsockApp
 *
 * Main module of the application.
 */
angular
  .module('appsockApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btford.socket-io',
    'oc.lazyLoad'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        resolve: {
          loadMainCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load([
              'scripts/controllers/main.js',
              'scripts/services/socket.js'
            ]);
          }]
        }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        resolve: {
          loadAboutCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            return $ocLazyLoad.load('scripts/controllers/about.js');
          }]
        }
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(false).hashPrefix('');
  });
