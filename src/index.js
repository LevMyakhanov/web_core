import mySwiper from './block1.5.js'
import "./index.html";
import "./block1.3.html";
import "./block1.5.html";
import "./menu.html";
import './style.css'



let button = document.querySelector(".main__button");
let mainText = document.querySelector(".main__text");
let mainTextNext = document.querySelector(".main__text_next");
let mainTextHide = document.querySelector(".main__text_hide");
let number = 1;

function toggleText () {
    mainText.classList.toggle("main__text")
    mainText.classList.toggle("main__text_revive")
    
    if (number === 1) {
        mainTextNext.style.display = 'none';
        mainTextHide.style.display = 'block';
        number = 0
        return number;
    } 
    if (number === 0) {
        mainTextNext.style.display = 'block';
        mainTextHide.style.display = 'none';
        number = 1;
        return number;
    }
}

button.addEventListener("click", toggleText);

// for (let i = 0; i < thumbnails.length; i++) {
    
// }

// console.log();