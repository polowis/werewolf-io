class Ability{
    /**
     * 
     * @param {Array} userslist 
     * @param {String} target 
     * @return string 
     */
    static useSeerAbility(userslist, target){
        let role = userslist.find(user => user.username == target.username).role
        return { targetRole: role == 'wolfman' ? 'villager' : role, targetName: target.username}
    }
}

module.exports.Ability = Ability;