class Ability{
    /**
     * 
     * @param {Array} userslist 
     * @param {String} target 
     * @return string 
     */
    static useSeerAbility(userslist, target){
        return { targetRole: userslist.find(user => user.username == target.username).role, targetName: target.username}
    }
}

module.exports.Ability = Ability;