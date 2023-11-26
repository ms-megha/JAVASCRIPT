let passwordBox = document.querySelector('#password')
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let loweCase = 'abcdefghijklmnopqrstuvwxyz'
let number = '0123456789'
let symbol = '~`! @#$%^&*()_-+={[}]|\:;"<,>.?/'
let allChar = upperCase + loweCase + number + symbol
let length = 12
function generateRandomPass(){
    let password =''
    while(length>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)]
    } 
    passwordBox.value = password
}
function copyPass(){
    passwordBox.select()
    document.execCommand("copy")
}