// Dark mode

const darkToggle = document.getElementById("darkModeToggle")

darkToggle.onclick = function(){
document.body.classList.toggle("dark-mode")
}

// Mobile menu

const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

menuToggle.onclick = function(){
navLinks.classList.toggle("show")
}

// typing animation

const text = " | Web Developer | System Developer"
let i = 0

function typing(){

if(i < text.length){

document.querySelector(".typing").textContent += text.charAt(i)

i++

setTimeout(typing,100)

}

}

typing()