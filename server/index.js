var express = require('express');
var app = express();
var server = require('http').Server(app); //metodo http de node
var io = require('socket.io')(server);

app.use(express.static('client')); //todos los html de la carpeta client

app.get('/chat', function(req, res){
    res.status(200).send('start chat');
});

io.on('connection', function(socket){
    console.log("El cliente con ip: "+socket.handshake.address+ " se ha conectado");
});

server.listen(6677, function(){
    console.log('Servidor running en http://localhost:6677');
});
