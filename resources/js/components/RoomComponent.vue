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
        socket.on('message to player with highest vote', (userWithHighestVote) => {
            if(this.user.username == userWithHighestVote){
                this.user.isDead = true;
                document.querySelector('body').style.filter = 'grayscale(80%)'
                this.messages.push({user: 'System', content: `${this.user.username} was killed last night`})
                socket.emit('message update', this.messages)
            }
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
            this.send("System", `${this.user.username} has joined`)
            

            

            if(this.users.length >= this.minNumberOfPlayers){
                this.countDownReadyTime()
            }
            
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
            this.status = 'day'
            socket.emit('room status', 'day')
            setTimeout(this.scrollToEnd, 100);
            console.log(this.dayTime)
            if(this.dayTime <= 0){
                socket.emit('check villager vote', this.users)
                this.send('System', 'Night has started')
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
            /**
             * 
             * Will check if the number of players meet the minimum
             */
            if(this.users.length < this.minNumberOfPlayers && this.user.username != 'polowis'){
                this.setCountDownReadyTime(10)
                return this.countDownReadyTime()
            }
            socket.emit('start', this.users)
            this.setStatus('started')
            this.send("System", "Night has started")
            this.countDownNightTime()
           
        },
        /**
         * Send and update messages
         */
        send(author, msg){
            this.messages.push({user: author, content: msg})
            socket.emit('message update', this.messages)
            setTimeout(this.scrollToEnd, 100);
        },

        setStatus(status){
            this.status = status
            socket.emit('room status', status)
        },

        sendMessage(){
            /**
             * Grab text message from input, than fire the event message
             * 
             */
            if(this.user.isDead) return;
            this.messageContent = document.getElementById('message-content').textContent
            if(this.messageContent.length > 1){
                this.messages.push({user: this.user.username, content: this.messageContent})
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
            if(this.day == false) {
                if(this.user.role != 'werewolf' && this.user.role != 'alphawereworf'){
                    return;
                }
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

        dayVote(user){
            
            socket.emit('update user', this.users)
            if((this.user.isDead) || (user.isDead)) return;
            if(this.day) {
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
            this.usersGetVote = ''
            socket.emit('update user', this.users)
        }
        

    }
}
</script>