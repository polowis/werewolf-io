<template>
<div>
    <div class="overlay" v-if="this.user.username.length <= 2">
    <header>
        <h1 style="font-size: 24px;"><br/>
            <p>Werewolf Online</p>
        </h1>
    </header>
    <form id="checkname" @submit.prevent="join">
        <div class="row align-items-center">
            <div class="col"><input class="form-control"  type="text" v-model="username" style="width: 200px; position: relative; margin: auto;" placeholder="What's your name?" id="username" name="username" /></div>
        </div>
        
    </form>
    
    <footer><button @click.prevent="join()">Join the game</button></footer>
    <br>
    <LoaderComponent v-if="loading == true"></LoaderComponent>
    
</div>
<GameOverComponent v-if="gameover" :team="teamWin"></GameOverComponent>
<div class="row align-items-center" v-if="this.status == 'starting'">
    <div style="position: relative; margin: auto; color:white;">The game will start in {{this.readyTime}}</div>
</div>
<div class="row align-items-center" v-if="this.status == 'night'">
    <div style="position: relative; margin: auto; padding-top: 20px; color:white;"><b style="color: #F60564;">Day {{this.days}}</b> : {{this.nightTime}}</div>
</div>
<div class="row align-items-center" v-if="this.status == 'day'">
    <div style="position: relative; margin: auto; padding-top: 20px; color:white;"><b style="color: #F60564;">Day {{this.days}}</b> : {{this.dayTime}}</div>
</div>
<div class="row align-items-center" v-if="this.status != 'not started' && this.status != 'starting'">
    <div style="position: relative; margin: auto; color:red;">You are {{this.getRoleNameById(this.user.role)}}</div>
</div>
<div class="row align-items-center" v-if="this.status != 'not started' && this.status != 'starting'">
    <div style="position: relative; margin: auto; color:yellow;">{{this.getRoleDescById(this.user.role)}}</div>
</div>
<button v-if="this.user.username == 'polowis'" class="btn btn-danger" @click.prevent="countDownReadyTime()">Start</button>
<div v-if="this.user.username.length >= 2" data-elementor-type="wp-page" data-elementor-id="2042" class="elementor elementor-2042" data-elementor-settings="[]">
			<div class="elementor-inner">
				<div class="elementor-section-wrap">
					
        <section class="elementor-element elementor-element-9103471 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="9103471" data-element_type="section">
			<div class="elementor-container elementor-column-gap-default">
				<div class="elementor-row">
				    <div class="elementor-element elementor-element-912cdb9 elementor-column elementor-col-50 elementor-top-column" data-id="912cdb9" data-element_type="column">
			            <div class="elementor-column-wrap  elementor-element-populated" style="overflow: scroll; height: 400px; border-color: white;" id="messageBox">
				            <div class="elementor-widget-wrap">
				                <div class="elementor-element elementor-element-dc76e15 elementor-widget elementor-widget-text-editor" data-id="dc76e15" data-element_type="widget" data-widget_type="text-editor.default">
				                    <div class="elementor-widget-container" v-if="status == 'day'">
                                        
					                    <div class="elementor-text-editor elementor-clearfix" style="color: white;" v-for="message in messages"  :key="message.content">
                                            <div v-if="message.user.startsWith('Werewolf') == false">
                                            <b  :style="{'color': message.user == 'System' ? 'red' : 'white'}">{{message.user}}</b>: {{message.content}}<br>
                                            </div>
                                        </div>
				                    </div>
                                    <div class="elementor-widget-container" v-if="status == 'night' && user.team == 'werewolf'">
					                    <div class="elementor-text-editor elementor-clearfix" style="color: white;" v-for="message in messages" :key="message.id">

                                            <b :style="{'color': message.user.startsWith('Werewolf') || message.user.startsWith('System') ? 'grey' : 'white'}">{{message.user}}</b>: {{message.content}}<br>
                                            
                                        </div>
				                    </div>
                                    <section class="elementor-element elementor-element-d5de5e4 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section elementor-inner-section" data-id="d5de5e4" data-element_type="section">
						                <div class="elementor-container elementor-column-gap-default">
				                            <div class="elementor-row">
				                                <div class="elementor-element elementor-element-4412d6a elementor-column elementor-col-50 elementor-inner-column" data-id="4412d6a" data-element_type="column">
			                                        <div class="elementor-column-wrap  elementor-element-populated" style="border-color: white;">
					                                    <div class="elementor-widget-wrap">
				                                            <div class="elementor-element elementor-element-4b40aeb elementor-widget elementor-widget-text-editor" data-id="4b40aeb" data-element_type="widget" data-widget_type="text-editor.default">
				                                                <div class="elementor-widget-container">
					                                                <div class="elementor-text-editor elementor-clearfix"><p style="color: white;" id="message-content" @input="onMessage" contenteditable="true"></p></div>
                                                                
				                                            </div>
				                                        </div>
						                            </div>
			                                    </div>
		                                    </div>
                                            <div class="elementor-element elementor-element-55e3a38 elementor-column elementor-col-50 elementor-inner-column" data-id="55e3a38" data-element_type="column">
                                                <div class="elementor-column-wrap  elementor-element-populated">
                                                    <div class="elementor-widget-wrap">
                                                        <div class="elementor-element elementor-element-73a2cb5 elementor-view-default elementor-widget elementor-widget-icon" data-id="73a2cb5" data-element_type="widget" data-widget_type="icon.default">
                                                            <div class="elementor-widget-container">
                                                                <div class="elementor-icon-wrapper">
                                                                    <div class="elementor-icon">
                                                                        <i aria-hidden="true" @click.prevent="status == 'day' ? sendMessage() : sendWolfMessage()" style="color: white;" class="fas fa-arrow-alt-circle-right"></i>			
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
						                </div>
		                            </section>
				                </div>
				            </div>
			            </div>
                        
				    </div>
                   
<table class="table table-sm table-dark">
  <thead>
    
  </thead>
  <tbody>
    <tr v-for="player in users" :key="player.username">
      <td :id="player.username" @click.prevent="activate(player)"><b style="color: green;" v-if="player.username == user.username">You </b>{{player.username}}</td>
      <td><i style="color: blue;" class="fas fa-vote-yea" @click.prevent="status == 'night' ? nightVote(player) : dayVote(player)"></i></td>
      <td v-if="user.team == 'werewolf' && status == 'night'" :style="{'color': usersGetVote == player.username ? 'red' : 'white'}">{{player.vote}}</td>
      <td v-if="(player.username == user.username) || (player.team == user.team && user.team == 'werewolf')"><i :style="{'color': abilityActivate == true ? 'red' : 'white'}" :class="getRoleIconById(player.role)" @click.prevent="useAbility(player)"></i></td> 
      <td v-else></td>
      <td v-if="status == 'day'">{{player.vote}}</td>
    </tr>
  </tbody>
</table>

				</div>
			</div>
        </section>
				</div>
			</div>
				</div>
</div>

				
                    
                    
                       

</template>
<script>

import * as role from '../role.js'
import LoaderComponent from './LoaderComponent'
import GameOverComponent from './GameOverComponent'
import * as util from '../util.js'

export default {
    components:{
        LoaderComponent,
        GameOverComponent
    },
    data(){
        return {
            gameover: false,
            teamWin: '',
            loading: false,
            days: 1,
            alreadyUsedAbility: 0,
            dayUsedAbility: false,
            nightUsedAbility: false,
            abilityUsedTime: 0,
            abilityActivate: false,
            hasVote: false,
            usersGetVote: '',
            roomName: 'defaultRoom',
            messageContent: '',
            maxNumberOfPlayers: 16,
            minNumberOfPlayers: 10,
            readyTime: 10,
            dayTime: 30,
            nightTime: 30,
            username: '',
            messages: [],
            day: false,
            user: {
                socketId: '',
                isDead: false,
                username: '',
                role: '',
                ready: true,
                vote: 0,
                team: '',
                isMuted: false,
                isProtected: false,
                isDraggedByHunter: false
            },
            users: [],
            status: 'not started',
            roomInfo: ''
        }
    },
    created(){
        socket.on('fetch data', (data) => {
            this.users =  data.users;
            this.messages = data.messages;
            this.status = data.status;
            
        })

        socket.on('game over', (data) => {
            this.gameover = true;
            this.teamWin = data
        })

        socket.on('update user', (users) => {
            if(this.user.username.length <= 1) return;
            this.users = users;
            
        })

        socket.on('ready time', (time) => {
            if(this.user.username.length <= 1) return;
            this.readyTime = time;
        })

        socket.on('night time', (time) => {
            if(this.user.username.length <= 1) return;
            this.nightTime = time;
        })

        socket.on('day time', (time) => {
            if(this.user.username.length <= 1) return;
            this.dayTime = time;
        })

        socket.on('new user', (data) =>{
            
            this.users = data.users
            this.users.push(data.user)
        })

        socket.on('room status', (status) =>{
            if(this.user.username.length <= 1) return;
            this.status = status
        })

        socket.on('ready', (users) =>{
            if(this.user.username.length <= 1) return;
            this.users = users
            this.fetchRole()

        })

        socket.on('seer-ability', (res) => {
            if(this.user.username.length <= 1) return;
            if(this.user.role == 'seer'){
                document.getElementById(res.targetName).innerHTML = res.targetRole
                this.sleep(2000).then(() => {  document.getElementById(res.targetName).innerHTML = res.targetName});
            }
        })

        socket.on('wolfseer-ability', (res) => {
            if(this.user.username.length <= 1) return;
            if(this.user.role == 'wolfseer'){
                document.getElementById(res.targetName).innerHTML = res.targetRole
                this.sleep(2000).then(() => {  document.getElementById(res.targetName).innerHTML = res.targetName});
            }
        })

        socket.on('werewolf kill', (user) => {
            if(this.user.username.length <= 1) return;
            if(user == null) return;
            if(this.user.username == user){
                this.user.isDead = true;
                document.querySelector('body').style.filter = 'grayscale(80%)'
                this.messages.push({user: 'System', content: `${this.user.username} was killed last night`})
                socket.emit('message update', this.messages)
            }
        })

        socket.on('day', (time)=>{
            if(this.user.username.length <= 1) return;
            this.dayTime = time
        })

        socket.on('days', (day)=> {
            if(this.user.username.length <= 1) return;
            this.days = day 
            this.send('System', `Day ${this.days}`)
        })

        socket.on('night', (time) => {
            if(this.user.username.length <= 1) return;
            this.nightTime = time
        })

        socket.on('message update', (msg) =>{
            if(this.user.username.length <= 1) return;
            this.messages = msg
            setTimeout(this.scrollToEnd, 100);
        })
        socket.on('message to player with highest vote', (userWithHighestVote) => {
            if(this.user.username.length <= 1) return;
            if(userWithHighestVote == null) return;
            if(this.user.username == userWithHighestVote){
                this.user.isDead = true;
                document.querySelector('body').style.filter = 'grayscale(80%)'
                this.messages.push({id: util.generateId(), user: 'System', content: `${this.user.username} was executed by the villagers`})
                socket.emit('message update', this.messages)
            }
        })
    },
    
    methods: {
        sleep(ms) {
           return new Promise(resolve => setTimeout(resolve, ms));
        },
        getRoleNameById(id){
            return role.getRoleNameById(id)
        },

        getRoleIconById(id){
            return role.getRoleIconById(id)
        },

        getRoleDescById(id){
            return role.getRoleDescriptionById(id)
        },

        onMessage(e){
            
        },

        useAbility(user){
            if(this.abilityActivate){
                this.abilityActivate = false;
                return;
            }
            if(user.username != this.user.username) return;
            if(this.user.isDead || this.user.isMuted || this.alreadyUsedAbility == this.days) return;
            if(role.canUseAbility(this.user.role, this.abilityUsedTime, this.status)){
                this.abilityActivate = true
            }

        },

        checkWinCondition(){
            socket.emit('check win condition', this.users)
        },

        activate(user){
            if(this.abilityActivate == false || this.user.username == user.username) return;
            this.abilityUsedTime += 1
            this.abilityActivate = false
            this.alreadyUsedAbility += this.days
            socket.emit('use ability', {role: this.user.role, target: user, users: this.users})
        },

        join(){
            
            this.loading = true
            socket.emit('fetch data')
            if(this.users.length == 16){
                return;
            }
           
            this.user.socketId = socket.id
            this.sleep(2000).then(() => {  
                this.loading = false
                for(let i = 0; i < this.users.length; i++){
                if(this.users[i].username == this.username){
                    this.user.username = ''
                    this.username = ''
                    alert('username taken')
                    return;
                    }
                }
                this.user.username = this.username
                if(this.status != 'not started'){
                    this.user.username = ''
                    this.username = ''
                    alert('game has started')
                    return;
                }

                if(this.username.length <= 1){
                    this.user.username = ''
                    this.username = ''
                return;
                }
           
            

                socket.emit('join', {roomName: this.roomName, users: this.user, messages: this.messages, status: this.status})
            
                this.send("System", `${this.user.username} has joined`)
            });
            /*
            
            if(this.users.length >= this.minNumberOfPlayers){
                this.countDownReadyTime()
            }*/
            
            
        },

        setCountDownReadyTime(time) {
            this.readyTime = time
        },

        countDownReadyTime() {
            this.send('System', `The game will be started in ${this.readyTime}`)
            this.status = 'starting'
            socket.emit('room status', 'starting')
            console.log(this.readyTime)
            if(this.readyTime <= 0){
                this.ready()
            }
            if(this.readyTime > 0){
                setTimeout(() => {
                    this.readyTime -= 1
                    this.countDownReadyTime()
                    socket.emit('ready time', this.readyTime)
                }, 1000)
            }
        },
        countDownNightTime() {
            //this.messages.push({user: 'System', content: `The game will be started in ${this.readyTime}`})
            //socket.emit('message update', this.messages)
            this.day = false;
            this.setStatus('night')
            
            console.log(this.nightTime)
            if(this.nightTime <= 0){
                this.checkWinCondition()
                socket.emit('day', 30)
                this.dayTime = 30
                socket.emit('check werewolf vote', this.users)
                this.send('System', 'Day has started')
                this.resetData()
                this.setStatus('day')
                return this.countDownDayTime()
            }
            if(this.nightTime > 0){
                setTimeout(() => {
                    this.nightTime -= 1
                    this.countDownNightTime()
                    socket.emit('night time', this.nightTime)
                }, 1000)
            }
        },

        countDownDayTime() {
            /**
             * Set the room status to day and start to count recursively, at the same time
             * show the message to all users within the rooms. if the numbers
             * reaches 0, we begin night time
             * 
             * 
             */

            //this.messages.push({user: 'System', content: `The game will be started in ${this.readyTime}`})
            //socket.emit('message update', this.messages)
            this.day = true;
            this.setStatus('day')
            
            console.log(this.dayTime)
            if(this.dayTime <= 0){
                this.checkWinCondition()
                
                this.days += 1
                socket.emit('days', this.days)
                socket.emit('night', 30)
                this.nightTime = 30
                socket.emit('check vote', this.users)
                this.send('System', 'Night has started')
                this.resetData()
                this.setStatus('night')
                return this.countDownNightTime()
                //socket.emit('check villager vote', this.users)
                /*
                this.send('System', 'Night has started')
                socket.emit('message update', this.messages)
                this.resetData()
                this.setStatus('night')
                this.countDownNightTime()*/
            }

            if(this.dayTime > 0){
                setTimeout(() => {
                    this.dayTime -= 1
                    this.countDownDayTime()
                    socket.emit('day time', this.dayTime)
                }, 1000)
            }
        },

        ready(){
            /**
             * 
             * Will check if the number of players meet the minimum
             */
            if(this.users.length < this.minNumberOfPlayers && this.user.username != 'polowis'){
                this.setCountDownReadyTime(10)
                return this.countDownReadyTime()
            }
            socket.emit('start', this.users)
            this.setStatus('night')
            this.send("System", "Night has started")
            return this.countDownNightTime()
           
        },
        /**
         * Send and update messages
         */
        send(author, msg){
            this.messages.push({id: util.generateId() ,user: author, content: msg})
            socket.emit('message update', this.messages)
            setTimeout(this.scrollToEnd, 100);
        },

        setStatus(status){
            this.status = status
            socket.emit('room status', status)
        },

        sendWolfMessage(){
            if(this.user.team != 'werewolf') return;
            if(this.user.isDead) return;
            this.messageContent = document.getElementById('message-content').textContent
            if(this.messageContent.length > 1){
                this.messages.push({id: util.generateId(), user: `Werewolf ${this.user.username}`, content: this.messageContent})
                document.getElementById('message-content').textContent = ''
                socket.emit('message update', this.messages)
                setTimeout(this.scrollToEnd, 100);
            }
        },

        sendMessage(){
            /**
             * Grab text message from input, than fire the event message
             * 
             */
            if(this.status == 'night' && this.user.team != 'werewolf') return;
            if(this.user.isDead) return;
            this.messageContent = document.getElementById('message-content').textContent
            if(this.messageContent.length > 1){
                this.messages.push({id: util.generateId(), user: this.user.username, content: this.messageContent})
                document.getElementById('message-content').textContent = ''
                socket.emit('message update', this.messages)
                setTimeout(this.scrollToEnd, 100);
            }
        },

        /**
         * 
         * Scroll message to the bottom of the box automatically
         */
        scrollToEnd()
        {
            
            document.getElementById('messageBox').scrollTo(0,99999);

        
        },

        /**
         * 
         * Fetch all data from redis server
         */
        fetchRole(){

            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].username == this.user.username){
                   this.user.role = this.users[i].role
                   this.user.team = this.users[i].team
                }
            }
        },

        /**
         * Night vote
         */
        nightVote(user){
            /**
             * 
             * Logic work like this:
             * First we check if the user belongs to werewolf team, return false otherwise.
             * Then the user will get a chance to vote, if the player get voted, we set user's property
             * hasVoted to true and store the player got voted along with it.
             * 
             * In case the user decide to vote again, if the user has voted and the player get vote is the same as 
             * the player got voted previously, the player got voted previously will get their number of votes deducted
             * by 1 and reset user vote setting to default
             * 
             * else, if the player vote a different player and the hasVoted propety is true, we reset the previous player vote
             * and update with the new one
             * 
             */
            socket.emit('update user', this.users)

            if((this.user.isDead) || (user.isDead)) return;
            if(this.status == 'night') {
                if(this.user.team != 'werewolf'){
                    return;
                }
                if(user.team == 'werewolf' || user.username == this.user.username) return;
                console.log('you just voted this person')
                if(this.hasVote == true) {
                    if(user.username == this.usersGetVote) {
                        // if user get voted is the same as the previous user, just reset the info
                        this.hasVote = false
                        this.usersGetVote = ''
                        if(this.user.role == 'alphawerewolf'){
                            user.vote -= 2
                        } else{
                            user.vote -= 1
                        }
                        
                        socket.emit('update user', this.users)
                        return;

                    } else{
                        // if the user get voted is different from the previous one, reset her/his info and 
                        // update the new on
                        for(let i = 0; i < this.users.length; i++){
                            if(this.users[i].username == this.usersGetVote){
                                if(this.user.role == 'alphawerewolf'){
                                    this.users[i].vote -= 2
                                } else{
                                    this.users[i].vote -= 1;
                                }
                                
                            }
                        }
                        
                        this.usersGetVote = user.username
                        if(this.user.role == 'alphawerewolf'){
                            user.vote += 2
                        } else{
                            user.vote += 1
                        }
                        socket.emit('update user', this.users)
                        return;
                        
                    }
                }
                this.usersGetVote = user.username

                if(this.user.role == 'alphawerewolf'){
                    user.vote += 2
                } else{
                    user.vote += 1
                }
                
                this.hasVote = true;
                socket.emit('update user', this.users)
               
                
                
            }
        },

        dayVote(user){
            
            socket.emit('update user', this.users)
            if((this.user.isDead) || (user.isDead)) return;
            if(user.username == this.user.username) return;
            if(this.status == 'day') {
                console.log('you just voted this person')
                if(this.hasVote == true) {
                    if(user.username == this.usersGetVote) {
                        // if user get voted is the same as the previous user, just reset the info
                        this.hasVote = false
                        this.usersGetVote = ''
                        user.vote -= 1
                        
                        socket.emit('update user', this.users)
                        return;

                    } else{
                        // if the user get voted is different from the previous one, reset her/his info and 
                        // update the new on
                        for(let i = 0; i < this.users.length; i++){
                            if(this.users[i].username == this.usersGetVote){
                                this.users[i].vote -= 1;
                                
                            }
                        }

                        
                        this.usersGetVote = user.username
                        user.vote += 1
                        socket.emit('update user', this.users)
                        return;
                        
                    }
                }
                this.usersGetVote = user.username
                user.vote += 1
                this.hasVote = true;
                socket.emit('update user', this.users)
               
                
                
            }
            
        }, 

        

        resetData(){
            for(let i = 0; i < this.users.length; i++){
                this.users[i].vote = 0
            }
            this.hasVote = false;
            this.usersGetVote = ''
            this.abilityActivate = false;
            this.dayUsedAbility = false;
            this.nightUsedAbility = false;
            socket.emit('update user', this.users)
        }
        

    }
}
</script>
