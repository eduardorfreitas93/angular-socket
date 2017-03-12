'use strict';

/**
 * @ngdoc function
 * @name appsockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appsockApp
 */
angular.module('appsockApp')
  .controller('MainCtrl', function (chat, messager, grupo) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    var main = this;
    main.tt = {};
    main.tt.teste = '';

    chat.on('chat', function (data) {
      main.frase = data;
    });

    messager.on('message', function (data) {
      main.frase2 = data;
    });

    main.enviar = function () {
      grupo.emit('sck:teste', main.tt);
    };

    main.setCat = function () {
      grupo.emit('setCat', main.tt.gr);
    };

    grupo.on('sck:teste', function (data) {
      main.h2 = data;
    });

  });
