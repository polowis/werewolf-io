class Ability{
    /**
     * Use seer ability
     * @param {Array} userslist 
     * @param {String} target 
     * @return string 
     */
    static useSeerAbility(userslist, target){
        let role = userslist.find(user => user.username == target.username).role
        if(role == 'wolfman'){
            return { targetRole: 'villager', targetName: target.username}
        }
        else if(role == 'lycan'){
            return {targetRole: 'werewolf', targetName: target.username}
        }
        return { targetRole: role == 'wolfman' ? 'villager' : role, targetName: target.username}
    }

    /**
     * use serial killer Ability
     * @param {*} userslist 
     * @param {*} target 
     */
    static useSerialKillerAbility(userslist, target){
        let player = userslist.find(user => user.username == target.username)
        if(player.isProtected) return;
        player.isDead = true
        return userslist;
    }

    /**
     * Use Wolf seer ability
     * @param {*} userslist 
     * @param {*} target 
     */
    static useWolfSeerAbility(userslist, target){
        let role = userslist.find(user => user.username == target.username).role
        return { targetRole: role, targetName: target.username}
    }

    static useBodyGuardAbility(userslist, target){
        userslist.find(user => user.username == target.username).isProtected = true
    }

}

module.exports.Ability = Ability;