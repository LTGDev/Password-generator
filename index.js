//note
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordBTN1 = document.getElementById("passwordbtn1")
let passwordBTN2 = document.getElementById("passwordbtn2")

function generatePassword() {
let password1 = [];
let rand1 = characters[Math.floor(Math.random()*characters.length)]
console.log(rand1)
   for (let i = 0; i <15; i++) {
       password1.push(characters[Math.floor(Math.random()*characters.length)])
   }
   passwordBTN1.textContent = password1


let password2 = [];
let rand2 = characters[Math.floor(Math.random()*characters.length)]
console.log(rand2)
   for (let i = 0; i <15; i++) {
       password2.push(characters[Math.floor(Math.random()*characters.length)])
   }
passwordBTN2.textContent = password2
}

