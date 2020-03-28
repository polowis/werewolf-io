let {ROLES} = require('./roles')

const roleNumber = {
    WEREWOLF: 0,
    ALPHAWEREWOLF: 1,
    SEER: 2,
    HUNTER: 3,
    PRIEST: 4
}
const users = [{
    username: 'username',
    role: '',
    isDead: false

},
{
    username: 'usernameddd',
    role: '',
    isDead: false
}]

const WOLFTEAM = ['werewolf', 'alphawerewolf', 'werewolf seer']

class Game{
    constructor(users){

        this.players = []
        const playerArray = [];
        for(let i = 0; i < users.length; i ++){
            playerArray[i] = users[i]
        }

        let targetLength = playerArray.length - 1;
        let state = 1;
        while(playerArray.length > 0){
            const index = Math.floor(Math.random() * playerArray.length)
            const username = playerArray[index].username

            playerArray[index].role = this.getRoleByNumber(state)
            this.players.push(playerArray[index])

            playerArray.splice(index, 1)

            if(playerArray.length == targetLength){
                state += 1
                targetLength = playerArray - 1
                /*if(state == roleNumber.SEER) {targetLength = playerArray - num_seer}
                else if (state == roleNumber.HUNTER) {targetLength = playerArray - num_hunter}
                else if (state == roleNumber.PRIEST) {targetLength = playerArray - num_priest}*/
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