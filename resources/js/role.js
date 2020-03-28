import {ROLES} from '../../logic/roles'

/**
 * 
 * @param {*} id 
 */
export function getRoleDescriptionById(id) {
    for(let i = 0; i < ROLES.length; i++){
        if(ROLES[i].id == id){
            return ROLES[i].desc
        }
    }
}
/**
 * Get icon
 * @param {*} id 
 */
export function getRoleIconById(id) {
    for(let i = 0; i < ROLES.length; i++){
        if(ROLES[i].id == id){
            return ROLES[i].icon
        }
    }
}
/**
 * 
 * @param {*} id 
 */
export function getRoleNameById(id) {
    for(let i = 0; i < ROLES.length; i++){
        if(ROLES[i].id == id){
            return ROLES[i].name
        }
    }
}

export function canUseAbility(id, numberOfTimesUsed, status){
	let target = ROLES.find(role => role.id == id)
	if(target.hasActiveAbility){
		if(target.nightUsedAbility && status == 'night'){
			if(numberOfTimesUsed == target.numberOfTimeCanUseAbility){
				return false;
			}
			return true;
		}
		if(target.nightUsedAbility == false && status == 'day'){
			if(numberOfTimesUsed == target.numberOfTimeCanUseAbility){
				return false;
			}
			return true;
		}
	}
}


