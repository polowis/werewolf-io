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
</div>
<div class="row align-items-center" v-if="this.status == 'starting'">
    <div style="position: relative; margin: auto; color:white;">{{this.readyTime}}</div>
</div>
<div class="row align-items-center" v-if="this.status == 'night'">
    <div style="position: relative; margin: auto; padding-top: 20px; color:white;">{{this.nightTime}}</div>
</div>
<div class="row align-items-center" v-if="this.status == 'day'">
    <div style="position: relative; margin: auto; padding-top: 20px; color:white;">{{this.dayTime}}</div>
</div>
<div class="row align-items-center" v-if="this.status != 'not started' && this.status != 'starting'">
    <div style="position: relative; margin: auto; color:red;">You are {{this.user.role}}</div>
</div>
<button v-if="this.user.username == 'polowis'" class="btn btn-danger" @click.prevent="countDownReadyTime()">Start</button>
<div v-if="this.user.username.length >= 2" data-elementor-type="wp-page" data-elementor-id="2042" class="elementor elementor-2042" data-elementor-settings="[]">
			<div class="elementor-inner">
				<div class="elementor-section-wrap">
					<section style="opacity: 0" class="elementor-element elementor-element-01b3345 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="01b3345" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
						<div class="elementor-container elementor-column-gap-wider">
				            <div class="elementor-row">
				                <div class="elementor-element elementor-element-9ab55e3 elementor-column elementor-col-20 elementor-top-column" data-id="9ab55e3" data-element_type="column">
			                        <div class="elementor-column-wrap  elementor-element-populated">
					                    <div class="elementor-widget-wrap">
				                            <div class="elementor-element elementor-element-fc5ba15 elementor-view-default elementor-widget elementor-widget-icon" data-id="fc5ba15" data-element_type="widget" data-widget_type="icon.default">
				                                <div class="elementor-widget-container">
					                                <div class="elementor-icon-wrapper">
			                                            <div class="elementor-icon">
			                                                <i aria-hidden="true" class="fas fa-sync-alt"></i>			
                                                        </div>
		                                            </div>
				                                </div>
				                            </div>
						                </div>
			                        </div>
		                        </div>
				                <div class="elementor-element elementor-element-383cd08 elementor-column elementor-col-20 elementor-top-column" data-id="383cd08" data-element_type="column">
			                        <div class="elementor-column-wrap  elementor-element-populated">
					                    <div class="elementor-widget-wrap">
				                            <div class="elementor-element elementor-element-f2e64b3 elementor-view-default elementor-widget elementor-widget-icon" data-id="f2e64b3" data-element_type="widget" data-widget_type="icon.default">
				                                <div class="elementor-widget-container">
					                                <div class="elementor-icon-wrapper">
			                                            <div class="elementor-icon">
			                                                <i aria-hidden="true" class="fas fa-sync-alt"></i>			
                                                        </div>
		                                            </div>
				                                </div>
				                            </div>
						                </div>
			                        </div>
		                        </div>
				                <div class="elementor-element elementor-element-4818837 elementor-column elementor-col-20 elementor-top-column" data-id="4818837" data-element_type="column">
			                        <div class="elementor-column-wrap  elementor-element-populated">
					                    <div class="elementor-widget-wrap">
				                            <div class="elementor-element elementor-element-85ecb53 elementor-view-default elementor-widget elementor-widget-icon" data-id="85ecb53" data-element_type="widget" data-widget_type="icon.default">
				                                <div class="elementor-widget-container">
					                                <div class="elementor-icon-wrapper">
			                                            <div class="elementor-icon">
			                                                <i aria-hidden="true" class="fas fa-sync-alt"></i>		
                                                        </div>
		                                            </div>
				                                </div>
				                            </div>
						                </div>
			                        </div>
		                        </div>
				                <div class="elementor-element elementor-element-e7024d0 elementor-column elementor-col-20 elementor-top-column" data-id="e7024d0" data-element_type="column">
			                        <div class="elementor-column-wrap  elementor-element-populated">
					                    <div class="elementor-widget-wrap">
				                            <div class="elementor-element elementor-element-d0cf4dc elementor-view-default elementor-widget elementor-widget-icon" data-id="d0cf4dc" data-element_type="widget" data-widget_type="icon.default">
				                                <div class="elementor-widget-container">
					                                <div class="elementor-icon-wrapper">
			                                            <div class="elementor-icon">
			                                                <i aria-hidden="true" class="fas fa-sync-alt"></i>			
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
				                <div class="elementor-element elementor-element-1d7b1eb elementor-column elementor-col-20 elementor-top-column" data-id="1d7b1eb" data-element_type="column">
			                        <div class="elementor-column-wrap  elementor-element-populated">
					                    <div class="elementor-widget-wrap">
				                            <div class="elementor-element elementor-element-0401f7b elementor-view-default elementor-widget elementor-widget-icon" data-id="0401f7b" data-element_type="widget" data-widget_type="icon.default">
				                                <div class="elementor-widget-container">
					                                <div class="elementor-icon-wrapper">
			                                            <div class="elementor-icon">
			                                                <i aria-hidden="true" class="fas fa-sync-alt"></i>		
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
        <section class="elementor-element elementor-element-9103471 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="9103471" data-element_type="section">
			<div class="elementor-container elementor-column-gap-default">
				<div class="elementor-row">
				    <div class="elementor-element elementor-element-912cdb9 elementor-column elementor-col-50 elementor-top-column" data-id="912cdb9" data-element_type="column">
			            <div class="elementor-column-wrap  elementor-element-populated" style="overflow: scroll; height: 400px;" id="messageBox">
				            <div class="elementor-widget-wrap">
				                <div class="elementor-element elementor-element-dc76e15 elementor-widget elementor-widget-text-editor" data-id="dc76e15" data-element_type="widget" data-widget_type="text-editor.default">
				                    <div class="elementor-widget-container">
					                    <div class="elementor-text-editor elementor-clearfix" style="color: white;" v-for="message in messages" :key="message.content">
                                            <b :style="{'color': message.user == 'System' ? 'red' : 'white'}">{{message.user}}</b>: {{message.content}}<br>
                                            
                                        </div>
				                    </div>
                                    <section class="elementor-element elementor-element-d5de5e4 elementor-section-height-min-height elementor-section-boxed elementor-section-height-default elementor-section elementor-inner-section" data-id="d5de5e4" data-element_type="section">
						                <div class="elementor-container elementor-column-gap-default">
				                            <div class="elementor-row">
				                                <div class="elementor-element elementor-element-4412d6a elementor-column elementor-col-50 elementor-inner-column" data-id="4412d6a" data-element_type="column">
			                                        <div class="elementor-column-wrap  elementor-element-populated">
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
                                                                        <i aria-hidden="true" @click.prevent="sendMessage()" style="color: white;" class="fas fa-arrow-alt-circle-right"></i>			
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
                        <!--
                        <div class="elementor-element elementor-element-9fe2ad3 elementor-column elementor-col-50 elementor-top-column" data-id="9fe2ad3" data-element_type="column">
			                <div class="elementor-column-wrap  elementor-element-populated">
					            <div class="elementor-widget-wrap">
				                    <section  class="elementor-element elementor-element-c979d13 elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-inner-section" data-id="c979d13" data-element_type="section">
						                <div class="elementor-container elementor-column-gap-default">
				                            <div class="elementor-row" v-for="user in users" :key="user.username">
				                                <div class="elementor-element elementor-element-ce7db3e elementor-column elementor-col-25 elementor-inner-column" data-id="ce7db3e" data-element_type="column" style="width: 100px;">
			                                        <div class="elementor-column-wrap  elementor-element-populated">
					                                    <div class="elementor-widget-wrap">
				                                            <div class="elementor-element elementor-element-c502b23 elementor-widget elementor-widget-heading" data-id="c502b23" data-element_type="widget" data-widget_type="heading.default">
				                                                <div class="elementor-widget-container">
			                                                        <h2 class="elementor-heading-title elementor-size-default">{{user.username}}</h2>		
                                                                </div>
				                                            </div>
				                                            <div class="elementor-element elementor-element-234de9a elementor-widget elementor-widget-image" data-id="234de9a" data-element_type="widget" data-widget_type="image.default">
				                                                <div class="elementor-widget-container">
					                                                <div class="elementor-image">
										                                <img src="https://avatars0.githubusercontent.com/u/39208974?s=88&u=48aef927b291ab830fea070bd6b9b5acd9a67b80&v=4" title="Team-5.png" alt="8" />											
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
                        </div> -->
                        
				    </div>
                   
<table class="table table-sm table-dark">
  <thead>
    
  </thead>
  <tbody>
    <tr v-for="player in users" :key="player.username">
      <td style="color: white;">{{player.username}}</td>
      <td><i style="color: blue;" class="fas fa-vote-yea" @click.prevent="day == false ? nightVote(player) : dayVote(player)"></i></td>
      <td v-if="user.team == 'werewolf' && day == false">{{player.vote}}</td>
      <td v-if="day == true">{{player.vote}}</td>
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
export default {
    data(){
        return {
            hasVote: false,
            usersGetVote: [],
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
                team: ''
            },
            users: [],
            status: 'not started',
            roomInfo: ''
        }
    },
    created(){
        socket.on('update user', (users) => {
            this.users = users
            console.log(this.users)
        })

        socket.on('ready time', (time) => {
            this.readyTime = time;
        })

        socket.on('night time', (time) => {
            this.nightTime = time;
        })

        socket.on('day time', (time) => {
            this.dayTime = time;
        })

        socket.on('new user', (data) =>{
            this.users = data.users
            this.users.push(data.user)
        })

        socket.on('room status', (status) =>{
            this.status = status
        })

        socket.on('ready', (users) =>{
            this.users = users
            this.fetchRole()

        })

        socket.on('message update', (msg) =>{
            this.messages = msg
            setTimeout(this.scrollToEnd, 100);
        })
    },
    
    methods: {
        onMessage(e){
            console.log(e.target.innerText);
        },
        join(){
            axios.get('/rooms').then(response => {
                let data = response.data
                for(let i = 0; i < data.length; i++){
                    if(data[i].name == this.roomName){
                        this.users = data[i].users
                        this.messages = data[i].messages
                        this.status = data[i].status
                    }
                }
            })
            if(this.users.length == 16){
                return;
            }
            this.user.username = this.username
            this.user.socketId = socket.id
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].username == this.user.username){
                    this.user.username = ''
                    return;
                }
            }
            if(this.status != 'not started'){
                console.log('game has started')
                return;
            }

            if(this.username.length <= 1){
                return;
            }
           
            this.users.push(this.user)
            

            socket.emit('join', {roomName: this.roomName, users: this.users, messages: this.messages, status: this.status})
            socket.emit('update user', this.users)
            this.messages.push({user: 'System', content: this.user.username + ' has joined'})

            socket.emit('message update', this.messages)

            setTimeout(this.scrollToEnd, 100);

            if(this.users.length >= this.minNumberOfPlayers){
                this.countDownReadyTime()
            }
            
        },

        setCountDownReadyTime(time) {
            this.readyTime = time
        },

        countDownReadyTime() {
            this.messages.push({user: 'System', content: `The game will be started in ${this.readyTime}`})
            socket.emit('message update', this.messages)
            this.status = 'starting'
            socket.emit('room status', 'starting')
            setTimeout(this.scrollToEnd, 100);
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
            this.status = 'night'
            socket.emit('room status', 'night')
            setTimeout(this.scrollToEnd, 100);
            console.log(this.nightTime)
            if(this.nightTime <= 0){
                socket.emit('check vote', this.users)
                this.messages.push({user: 'System', content: `Day has started`})
                socket.emit('message update', this.messages)
                this.resetData()
                this.status = 'day'
                this.countDownDayTime()
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
            //this.messages.push({user: 'System', content: `The game will be started in ${this.readyTime}`})
            //socket.emit('message update', this.messages)
            this.day = true;
            this.status = 'day'
            socket.emit('room status', 'day')
            setTimeout(this.scrollToEnd, 100);
            console.log(this.dayTime)
            if(this.dayTime <= 0){
                this.messages.push({user: 'System', content: `Night has started`})
                socket.emit('message update', this.messages)
                this.resetData()
                this.status = 'night'
                this.countDownNightTime()
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
            
            if(this.users.length < this.minNumberOfPlayers && this.user.username != 'polowis'){
                this.setCountDownReadyTime(10)
                return this.countDownReadyTime()
            }
            socket.emit('start', this.users)
            this.status = 'started'
            socket.emit('room status', 'started')
            this.messages.push({user: 'System', content: `Night has started`})
            socket.emit('message update', this.messages)
            this.countDownNightTime()
           
        },

        sendMessage(){
            this.messageContent = document.getElementById('message-content').textContent
            if(this.messageContent.length > 1){
                this.messages.push({user: this.user.username, content: this.messageContent})
                document.getElementById('message-content').textContent = ''
                socket.emit('message update', this.messages)
                setTimeout(this.scrollToEnd, 100);
            }
        },

        scrollToEnd()
        {
            
            document.getElementById('messageBox').scrollTo(0,99999);

        
        },

        fetchRole(){
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].username == this.user.username){
                   this.user.role = this.users[i].role
                   this.user.team = this.users[i].team
                }
            }
        },

        nightVote(user){
            
            socket.emit('update user', this.users)

            if(this.user.isDead) return;
            if(this.day == false){
                if(this.user.role != 'werewolf' && this.user.role != 'alphawereworf'){
                    return;
                }
                console.log('you just voted this person')
                if(this.hasVote == true){
                    user.vote = 0
                    socket.emit('update user', this.users)
                    this.hasVote = false
                    return;
                }
                user.vote += 1
                this.hasVote = true;
                socket.emit('update user', this.users)
                /*for(let i = 0; i < this.usersGetVote.length; i++){
                    if(this.usersGetVote[i] == user.username){
                        user.vote = 0
                        this.usersGetVote.splice(this.usersGetVote.indexOf(user.username), 1)
                        socket.emit('update user', this.users)
                        return;
                    }
                }    
                this.usersGetVote.push(user.username)
                user.vote += 1
                socket.emit('update user', this.users)*/
                
                
            }
        },

        dayVote(user){
            return;
        }, 

        checkForAliveStatus(){
            let voteCount = 0
            let userWithHighestVote = ''
            let userIndex;
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].vote > voteCount){
                    voteCount = this.users[i].vote
                    userWithHighestVote = this.users[i].username
                    userIndex = i
                }
            }

            for(let i = 0; i < this.users.length; i++){
                console.log(voteCount)
                if(this.users[i].vote == voteCount && this.users[i].username != userWithHighestVote){
                    console.log('tie');
                    return;
                }
            }
            console.log(userWithHighestVote)
            this.users[userIndex].isDead = true
            socket.emit('update user', this.users)
            return;
            
        },

        resetData(){
            for(let i = 0; i < this.users.length; i++){
                this.users[i].vote = 0
            }
            this.hasVote = false;
            socket.emit('update user', this.users)
        }
        

    }
}
</script>