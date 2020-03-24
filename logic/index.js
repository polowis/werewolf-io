let {roles} = require('./roles')

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

class Game{
    constructor(users){
        const num_werewolf = 1;
        const num_seer = 1;
        const num_hunter = 1;
        const num_priest = 1;    
        const num_alphawerewolf = 1;

        this.players = []
        const playerArray = [];
        for(let i = 0; i < users.length; i ++){
            playerArray[i] = users[i]
        }

        let targetLength = playerArray.length - num_werewolf;
        let state = roleNumber.WEREWOLF;
        while(playerArray.length > 0){
            const index = Math.floor(Math.random() * playerArray.length)
            const username = playerArray[index].username

            playerArray[index].role = this.getRoleByNumber(state)
            this.players.push(playerArray[index])

            playerArray.splice(index, 1)

            if(playerArray.length == targetLength){
                state += 1
                if(state == roleNumber.SEER) {targetLength = playerArray - num_seer}
                else if (state == roleNumber.HUNTER) {targetLength = playerArray - num_hunter}
                else if (state == roleNumber.PRIEST) {targetLength = playerArray - num_priest}
            }
        }
        console.log('Roles complete')
        for(let i = 0; i< this.players.length; i++){
            console.log(`${this.players[i].username} is ${this.players[i].role}`)
        }
    }

    getRoleByNumber(number){
        if(number == 0) return 'werewolf';
        if(number == 1) return 'alphawereworf'
        if(number == 3) return 'seer'
    }
}

module.exports.Game = Game;