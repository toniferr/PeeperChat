var express = require('express');
var app = express();
var server = require('http').Server(app); //metodo http de node
var io = require('socket.io')(server);

app.get('/chat', function(req, res){
    res.status(200).send('start chat');
});

server.listen(6677, function(){
    console.log('Servidor running en http://localhost:6677');
});
