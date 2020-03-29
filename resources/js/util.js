export function generateId(){
    let length = 32
    let characters = '0123456789abcdefghijklmnopqrstuvwsxyzABCDEFGHIJKLMNOPQRSTUVWSXYZ'
    let res = ''
    for(let i = 0; i < length; i++){
        res += characters[Math.floor(Math.random() * characters.length)]
    }
    return res
}