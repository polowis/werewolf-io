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
const cors = require('cors')
const port = process.env.PORT || 3000;
const indexRoute = require('./routes/index');
const {Game} = require('./logic/index')
const redisAdapter = require('socket.io-redis');
const redis = require('redis');
const client = redis.createClient()
require('dotenv').config()
io.adapter(redisAdapter({ host: 'localhost', port: 6379 }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(session({
    secret : "mysecret",
    resave: true,
    saveUninitialized: true

}));
client.on("error", function(error) {
    console.error(error);
});
const rooms = [{
    name: "defaultRoom",
    users: [],
    messages: [],
    status: "not started"
}]
client.set("rooms", JSON.stringify(rooms))

app.use('/', indexRoute);
app.use(express.json())
app.use(express.urlencoded({extended: false}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: (app.get('env') === 'development') ? err : {}
    });
});


app.get('/rooms', (req, res, next)=>{
    client.get("rooms", function(err, value){
        if(err) throw err;
        res.json(JSON.parse(value))

    })
})
function getModel(){
    client.get("rooms", function(err, value){
        if(err) throw err;
        return JSON.parse(value);
    })
}
function updateRoom(roomDetails, roomName="defaultRoom"){
    client.get("rooms", function(err, value){
        if(err) throw err;
        let data = JSON.parse(value)
        for(let i = 0; i < data.length; i++){
            if(data[i].name == roomName){
                data[i].messages = roomDetails.messages
                data[i].users = roomDetails.users
                data[i].status = roomDetails.status
            }
        }
        client.set("rooms", JSON.stringify(data))
    })
}

function checkAlivePlayers(users){
    let aliveUsers = []
    let userWithHighestVote;
    let highestVote = 0
    for (let i = 0; i < users.length; i++){
        if(users[i].isDead == false){
            aliveUsers.push(users[i])
            if(users[i].vote > highestVote){
                highestVote = users[i].vote
                userWithHighestVote = users[i].username
            }
        }
    }
    console.log('user with highest vote', userWithHighestVote)
    console.log('number of vote: ', highestVote)

    if(highestVote > aliveUsers.length / 2 ){
        client.get("rooms", function(err, value){
            if(err) throw err;
            let data = JSON.parse(value)
            for(let i = 0; i < data.length; i++){
                if(data[i].name == "defaultRoom"){
                    for(let j = 0; j < data[i].users.length; j++){
                        if(data[i].users[j].username == userWithHighestVote){
                            data[i].users[j].isDead = true
                        }
                    }
                    
                    
                }
            }
            client.set("rooms", JSON.stringify(data))
        })
        return userWithHighestVote;
    } else{
        return null;
    }
}


io.on('connection', function(socket){
    socket.on('disconnect', () =>{
        client.get("rooms", function(err, value){
            if(err) throw err;
            let data = JSON.parse(value);
            for(let i = 0; i < data.length; i++){
                let users = data[i].users
                for(let j = 0; j < users.length; j++){
                    
                    users.splice(users.indexOf(socket.id), 1)
                    
                }
            }
            client.set("rooms", JSON.stringify(data))
        })
        
        
        
        
    })
    socket.on('join room', function(data){
        let users = new Game(data)
        io.emit('update user', users)
        //io.emit('update list', task)
        
    })
    socket.on('update user', function(data){
        io.emit('update user', data)
    })

    socket.on('ready time', function(time) {
        io.emit('ready time', time)
    })

    socket.on('night time', function(time) {
        io.emit('night time', time)
    })

    socket.on('check vote', (users) => {
        let userWithHighestVote = checkAlivePlayers(users)
        io.emit('message to player with highest vote', userWithHighestVote)
    })

    socket.on('day time', function(time) {
        io.emit('day time', time)
    })

    socket.on('start', (data) => {
        let users = new Game(data)
        /*
        client.get("rooms", function(err, value){
            if(err) throw err;
            let data = JSON.parse(value)
            for(let i = 0; i < data.length; i++){
                if(data[i].name == "defaultRoom"){
                    data[i].users = users.players
                }
            }
            client.set("rooms", JSON.stringify(data))
        })*/
        io.emit('ready', users.players)
    })

    socket.on('join', (data) => {
    
        socket.join(data.roomName)
        updateRoom(data)
        client.get("rooms", function(err, value){
            if(err) throw err;
            let data = JSON.parse(value)
            for(let i = 0; i < data.length; i++){
                if(data[i].name == "defaultRoom"){
                   io.emit('update user', data[i].users)
                }
            }
            
        })
        
    })

    socket.on('new user', (data)=>{
        io.emit('new user', {user: data.user, users: data.users})
    })

    socket.on('room status', (status) =>{
        client.get("rooms", function(err, value){
            if(err) throw err;
            let data = JSON.parse(value)
            for(let i = 0; i < data.length; i++){
                if(data[i].name == "defaultRoom"){
                    data[i].status = status
                }
            }
            client.set("rooms", JSON.stringify(data))
        })
        io.emit('room status', status)
    })


    socket.on('message update', (msg) =>{
        client.get("rooms", function(err, value){
            if(err) throw err;
            let data = JSON.parse(value)
            for(let i = 0; i < data.length; i++){
                if(data[i].name == "defaultRoom"){
                    data[i].messages = msg
                }
            }
            client.set("rooms", JSON.stringify(data))
        })
        io.emit('message update', msg)
    })
  });


http.listen(port, '0.0.0.0', () => {
    console.log(`App is listening on port ${port}`);
});


