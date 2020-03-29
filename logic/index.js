let {ROLES} = require('./roles')





class Game{
    constructor(users){

        this.players = []
        const playerArray = [];
        for(let i = 0; i < users.length; i ++){
            playerArray[i] = users[i]
        }
        this.players = users

        let targetLength = playerArray.length - 1;
        let state = 1;
        while(playerArray.length > 0){
            const index = Math.floor(Math.random() * playerArray.length)
            const username = playerArray[index].username

            playerArray[index].role = this.getRoleByNumber(state)
            this.players[this.players.indexOf(playerArray[index])].role = this.getRoleByNumber(state)
            
            playerArray.splice(index, 1)

            if(playerArray.length == targetLength){
                state += 1
                targetLength = playerArray.length - 1
                
            }
        }
        console.log('Roles complete')
        for(let i = 0; i< this.players.length; i++){
            let isWolf = ROLES.find(role => role.id == this.players[i].role).isWolf

            if(isWolf){
                this.players[i].team = 'werewolf'
            } else{
                this.players[i].team = 'villager'
            }
            console.log(`${this.players[i].username} is ${this.players[i].role} belong to ${this.players[i].team}`)
        }
        
    }

    getRoleByNumber(number){
        return ROLES.find(role => role.value == number).id
    }
}

module.exports.Game = Game;