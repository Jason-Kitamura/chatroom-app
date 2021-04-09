const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const { users, addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const corsOptions={
    cors: true,
    origins:["http://localhost:3000"],
   }
const io = socketio(server, corsOptions);

io.on('connection', (socket) =>{
    console.log('We have a new connection!!!');

    socket.on('join', ({ name, room }, callback) => {
        // console.log('socket id', socket.id, name, room);
        const { error, user } = addUser({ id: socket.id, name, room});

        if(error) return callback(error);

        // socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});
        // socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has entered the chat!`});

        socket.join(user.room);

        callback();
    });

    socket.on('enter', async ({ name, room}, callback) => {
        console.log('socket id', socket.id)
        const user = await getUser(socket.id);
        console.log('user', user);
 
        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}`});
        socket.broadcast.to(user.room).emit('message', {user: 'admin', text: `${user.name}, has entered the chat!`});


        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.name, text: message});

        callback();
    });

    socket.on('leave', () =>{
        console.log('Use has left!!!');
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left the chat`});
        }
    });
    socket.on('disconnect', () =>{
        console.log('Use has left!!!');
        const user = removeUser(socket.id);

        if(user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.name} has left the chat`});
        }
    });
});

app.use(router);

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));