export let button = document.querySelector(".main__button");
export let mainText = document.querySelector(".main__text_hidden");
export let mainTextNext = document.querySelector(".main__text_next");
export let mainTextHide = document.querySelector(".main__text_hide");
export let number = 1;

export function toggleText () {
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