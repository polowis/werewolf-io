'use strict'
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 3000;
const indexRoute = require('./routes/index');
const {Game} = require('./logic/index')
const redisAdapter = require('socket.io-redis');
io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(session({
    secret : "mysecret",
    resave: true,
    saveUninitialized: true

}));

app.use('/', indexRoute);
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: (app.get('env') === 'development') ? err : {}
    });
});

io.on('connection', function(socket){
    socket.on('join room', function(data){
        let users = new Game(data)
        io.emit('update user', users.players)
        //io.emit('update list', task)
    })
    socket.on('update user', function(data){
        io.emit('update user', data)
    })
    socket.on('ready time', function(time) {
        io.emit('ready time', time)
    })

    socket.on('join', (room) => {
      socket.join(room)
    })

    socket.on('new user', (data)=>{
        io.emit('new user', {user: data.user, users: data.users})
    })
  });


http.listen(port, () => {
    console.log(`App is listening on port ${port}`);
  });

