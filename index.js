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
const {Ability} = require('./logic/ability')
const redisAdapter = require('socket.io-redis');

require('dotenv').config()


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(session({
    secret : "mysecret",
    resave: true,
    saveUninitialized: true

}));

const rooms = [{
    name: "defaultRoom",
    users: [],
    messages: [],
    status: "not started"
}]

 
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



function updateRoom(roomDetails, roomName="defaultRoom"){
    let room = rooms.find(x => x.name == roomName);
    room.users.push(roomDetails.users)
    room.status = roomDetails.status

    /*
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
    })*/
}

function checkWereWolfVote(users){
    let numberOfAliveWerewolf = 0
    let userWithHighestVote;
    let highestVote = 0
    for(let i = 0; i < users.length; i++){
        if(users[i].isDead == false && users[i].team == 'werewolf'){
            numberOfAliveWerewolf += 1
        }
        if(users[i].vote > highestVote){
            highestVote = users[i].vote
            userWithHighestVote = users[i].username
        }
    }

    console.log(userWithHighestVote)
    if(highestVote > numberOfAliveWerewolf / 2){
        let users = rooms.find(roomName => roomName.name == 'defaultRoom').users
        for(let i = 0; i < users.length; i++){
            if(users[i].username == userWithHighestVote){
                if(users[i].isProtected) return;
                users[i].isDead = true
            }
        }
        return userWithHighestVote;
    } else{
        return null
    }
    
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
        let users = rooms.find(roomName => roomName.name == 'defaultRoom').users
        for(let i = 0; i < users.length; i++){
            if(users[i].username == userWithHighestVote){
                if(users[i].isProtected) return;
                users[i].isDead = true
            }
        }
       
        return userWithHighestVote;
    } else{
        return null;
    }
}

function useRoleAbility(roleName, target, users){
    if(roleName == 'seer'){
        let res = Ability.useSeerAbility(users, target)
        io.emit('seer-ability', res)
    }
    if(roleName == 'bodyguard'){
        let res = Ability.useBodyGuardAbility(users, target)
        io.emit('bodyguard-ability', res)
    }
    if(roleName == 'wolfseer'){
        let res = Ability.useWolfSeerAbility(users, target)
        io.emit('wolfseer-ability', res)
    }
}

io.on('connection', function(socket){
    socket.on('disconnect', () =>{
        for(let i = 0; i < rooms.length; i++){
            let users = rooms[i].users
            for(let j = 0; j < users.length; j++){
                users.splice(users.indexOf(socket.id), 1)
            }
            if(users.length == 0){
                rooms[i].messages = []
                rooms[i].status = 'not started'
            }
        }
        
        /*
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
        })*/
        
        
        
        
    })

    socket.on('fetch data', function(){
        let room = rooms.find(room => room.name == 'defaultRoom')
        socket.emit('fetch data', {users: room.users, message: room.messages, status: room.status})
    })

    socket.on('days', (day) => {
        io.emit('days', day)
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

    socket.on('check werewolf vote', (users) => {
        let userWithHighestVote = checkWereWolfVote(users)
        io.emit('werewolf kill', userWithHighestVote)

    })

    socket.on('check vote', (users) => {
        let userWithHighestVote = checkAlivePlayers(users)
        io.emit('message to player with highest vote', userWithHighestVote)
    })

    socket.on('day time', function(time) {
        io.emit('day time', time)
    })

    socket.on('day', (time) => {
        io.emit('day', time)
    })

    socket.on('night', (time) => {
        io.emit('night', time)
    })

    socket.on('start', (data) => {
        let users = new Game(data)
        
        io.emit('ready', users.players)
    })

    socket.on('use ability', (data) => {
        return useRoleAbility(data.role, data.target, data.users)

    })

    socket.on('join', (data) => {
        
        socket.join(data.roomName)
        updateRoom(data)
        
        io.emit('update user', rooms.find(roomName => roomName.name == data.roomName).users)
        io.emit('message update', rooms.find(roomName => roomName.name == data.roomName).messages)
        /*
        client.get("rooms", function(err, value){
            if(err) throw err;
            let data = JSON.parse(value)
            for(let i = 0; i < data.length; i++){
                if(data[i].name == "defaultRoom"){
                   io.emit('update user', data[i].users)
                }
            }
            
        })*/
        
    })

    socket.on('new user', (data)=>{
        io.emit('new user', {user: data.user, users: data.users})
    })

    socket.on('room status', (status) =>{
        rooms.find(x => x.status).status = status
        /*
        client.get("rooms", function(err, value){
            if(err) throw err;
            let data = JSON.parse(value)
            for(let i = 0; i < data.length; i++){
                if(data[i].name == "defaultRoom"){
                    data[i].status = status
                }
            }
            client.set("rooms", JSON.stringify(data))
        })*/
        io.emit('room status', status)
    })


    socket.on('message update', (msg) =>{
        rooms.find(x => x.name == 'defaultRoom').messages = msg
        /** 
        client.get("rooms", function(err, value){
            if(err) throw err;
            let data = JSON.parse(value)
            for(let i = 0; i < data.length; i++){
                if(data[i].name == "defaultRoom"){
                    data[i].messages = msg
                }
            }
            client.set("rooms", JSON.stringify(data))
        })*/
        io.emit('message update', msg)
    })
  });


http.listen(port, '0.0.0.0', () => {
    console.log(`App is listening on port ${port}`);
});


