<template>
    <div class="overlay" v-if="this.user.username.length <= 2">
    <header>
        <h1><br/>
            <p>Werewolf Online</p>
        </h1>
    </header>
    <form id="checkname">
        <div class="row align-items-center">
            <div class="col"><input class="form-control" type="text" v-model="username" style="width: 200px; position: relative; margin: auto;" placeholder="What's your name?" id="username" name="username" /></div>
        </div>
    </form>
    <footer><button @click.prevent="join()">Join the game</button></footer>
</div>



</template>
<script>
export default {
    data(){
        return {
            maxNumberOfPlayers: 2,
            minNumberOfPlayers: 1,
            readyTime: 10,
            dayTime: 30,
            nightTime: 30,
            username: '',
            messages: [],
            day: false,
            user: {
                isDead: false,
                username: '',
                role: '',
                ready: true
            },
            users: [],
            status: 'not started'
        }
    },
    created(){
        socket.on('update user', (users) => {
            this.users = users
            console.log(this.users)
        })

        socket.on('ready time', (time) => {
            this.readyTime = time
        })

        socket.on('new user', (data) =>{
            this.users = data.users
            this.users.push(data.user)
        })
    },
    
    methods: {
        join(){
            if(this.users.length == 16){
                return;
            }
            for(let i = 0; i < this.users.length; i++){
                if(this.users[i].username == this.username){
                    console.log('username taken')
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
            this.user.username = this.username
            
            this.users.push(this.user)
            socket.emit('update user', this.users)
            if(this.users.length >= this.minNumberOfPlayers){
                this.countDownReadyTime()
            }
            
        },

        setCountDownReadyTime(time) {
            this.readyTime = time
        },

        countDownReadyTime() {
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

        ready(){
            if(this.users.length < this.minNumberOfPlayers){
                this.setCountDownReadyTime(10)
                return this.countDownReadyTime()
            }
            socket.emit('join room', this.users)
            this.status = 'started'
            console.log(this.users)
           
        }

    }
}
</script>