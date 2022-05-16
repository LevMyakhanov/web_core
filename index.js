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