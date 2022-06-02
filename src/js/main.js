let button = document.querySelector(".main__button");
let mainText = document.querySelector(".main__text_hidden");
let mainTextNext = document.querySelector(".main__text_next");
let mainTextHide = document.querySelector(".main__text_hide");
let number = 1;

function toggleText () {
    mainText.classList.toggle("main__text")
    mainText.classList.toggle("main__text_hidden")
    
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

export let listenMain = function () {
    if(button) {
        button.addEventListener('click', toggleText)
    }
}

let menuButtons = document.querySelectorAll(".menu-button-header");
let menu = document.querySelector(".menu");
let menuBack = document.querySelector(".back");

function showMenu () {
    menu.style.left = 0;
    menuBack.style.left = 0;
}

export let listenMenu = function () {
    for (let index = 0; index < menuButtons.length; index++) {
        menuButtons[index].addEventListener('click', showMenu)
    }
}



let menuButtonCancel = document.querySelector(".menu__cancel");

function hideMenu () {
    menu.style.left = '-320px';
    menuBack.style.left = '-100%';
}

export let listenMenu2 = function () {
    menuButtonCancel.addEventListener('click', hideMenu)
    menuBack.addEventListener('click', hideMenu)
}

