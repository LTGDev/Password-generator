const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordBTN1 = document.getElementById("password-btn1")
let passwordBTN2 = document.getElementById("password-btn2")

function generatePassword() {
let password1 = "";
let password2 = "";
   for (let i = 0; i <15; i++) {
       const index = Math.floor(Math.random()*characters.length)
       password1 += characters[index]
       console.log(password1)
       passwordBTN1.textContent = password1
   }
       
        for (let i = 0; i <15; i++) {
       const index2 = Math.floor(Math.random()*characters.length)
       password2 += characters[index2]
       console.log(password2)
       passwordBTN2.textContent = password2
   }
}
