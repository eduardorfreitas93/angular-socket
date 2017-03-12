'use strict';

/**
 * @ngdoc service
 * @name appsockApp.socket
 * @description
 * # socket
 * Service in the appsockApp.
 */
angular.module('appsockApp')
  .service('chat', function (socketFactory) {
    return socketFactory({
      ioSocket: io.connect('http://localhost:3000/chat')
    });
  })
  .service('messager', function (socketFactory) {
    return socketFactory({
      ioSocket: io.connect('http://localhost:3000/messager')
    });
  })
  .service('grupo', function (socketFactory) {
    return socketFactory({
      ioSocket: io.connect('http://localhost:3000/grupo')
    })
  });
