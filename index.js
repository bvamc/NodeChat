const express = require('express');
const socket = require('socket.io');
const port = 3000;
//Setup App
const app = express();
let server = app.listen(port, function () {
    console.log(`listening to port ${port}`);
});

//static files
app.use(express.static('public'));

//Setup socket
let io = socket(server);

io.on('connection', function (socket) {
    console.log('Socket connection established');
});

