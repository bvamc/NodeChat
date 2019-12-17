//Make Connection
let socket = io.connect('http://localhost:3000');

//Query
let message = document.getElementById('message');
let handle = document.getElementById('handle');
let btn = document.getElementById('send');
let output = document.getElementById('output');

//Emit Events
btn.addEventListener('click',function () {
    socket.emit('msg', {
        message: message.value,
        handle: handle.value
    });
});


//Listening events
socket.on('msg', function (data) {
    output.innerHTML += '<p><strong>'+data.handle+': </strong>'+data.message + '</p>';
});