/*
 * socket.emit('message', "this is a test"); // Envia apenas para o remetente-cliente
 * socket.broadcast.emit('message', "this is a test"); // Envio para todos os clientes, exceto remetente
 * socket.broadcast.to('game').emit('message', 'nice game'); // Envio para todos os clientes em sala de jogo (canal), exceto remetente
 * socket.to('game').emit('message', 'enjoy the game'); // Envia para o cliente remetente, somente se eles estiverem no quarto 'jogo' (canal)
 * socket.broadcast.to(socketid).emit('message', 'for your eyes only'); // Envio para socketid individual
 * io.emit('message', "this is a test"); // Envia para todos os clientes, incluindo remetente
 * io.in('game').emit('message', 'cool game'); // Envia para todos os clientes em sala de jogo (canal), incluem remetente
 * io.of('myNamespace').emit('message', 'gg'); // Envia para todos os clientes no namespace 'myNamespace', inclua o remetente
 * socket.emit(); //enviar para todos os clientes conectados
 * socket.broadcast.emit(); //enviar para todos os clientes conectados, exceto aquele que enviou a mensagem
 * socket.on(); //listener de evento, pode ser chamado no cliente para executar no servidor
 * io.sockets.socket(); //para emitir para clientes específicos
 * io.sockets.emit(); //enviar para todos os clientes conectados (o mesmo que socket.emit)
 * io.sockets.on() ; //conexão inicial de um cliente.
 */


var server = require('http').createServer();
var io = require('socket.io')(server);

/* Set namespace para a conexão */
var chat = io.of('/chat');

/* Cada socket e um usuário conectado no servidor */
chat.on('connection', function (socket) {
  console.log('chat');
  chat.emit('chat', 'chat');

});

var messager = io.of('/messager');
messager.on('connection', function (socket) {
  console.log('message');
  messager.emit('message', 'message');
});

var grupo = io.of('/grupo');
grupo.on('connection', function (socket) {

  socket.on('sck:teste', function (data) {
    socket.in(data.gr).emit('sck:teste', data.teste);
  });

  socket.on('setCat', function (data) {
    /* Set grupo que o usuário faz parte */
    socket.join(data);
  })

});

server.listen(3000);
