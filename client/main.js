var socket = io.connect('http://192.168.1.22:6677', {'forceNew':true}); //fuerza la conexion

socket.on('messages', function(data){
    console.log(data);
    render(data);
});

function render(data){
    var html = data.map(function(message, index){
        return (`
            <div class="message">
                <strong>${message.nickname}</strong> dice:
                <p>${message.text}</p>
            </div>
        `); //comilla inversas permite interpolar en varias lineas
    }).join(' ');
    var div_msgs = document.getElementById('messages')
    div_msgs.innerHTML = html;
    div_msgs.scrollTop = div_msgs.scrollHeight;
}

function addMessage(e){
    var message = {
        nickname: document.getElementById('nickname').value,
        text: document.getElementById('text').value
    }

    document.getElementById('nickname').style.display = 'none'; //asi no se peude cambiar nickname
    socket.emit('add-message', message);
    return false;
}