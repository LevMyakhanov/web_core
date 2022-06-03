// export let showBrandIcons = {
//     contentOpen: document.querySelector(".buttons-show-hide"),
//     contentHidden: document.querySelector(".brands__hidden"),
//     mainButtonShow: document.querySelector(".button-brands_show"),
//     mainButtonHide: document.querySelector(".button-brands_hide"),
//     flag: true
// }

let buttons = document.querySelectorAll(".buttons-show-hide");

export let listenBrand = function (number) {
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let brandList = button.parentElement.querySelector('.brands__list')
            brandList.classList.toggle("brands")
            brandList.classList.toggle("brands__hidden")
            
            
            function ww () {
                let brandTextNext = button.querySelector(".button-brands_show");
                let brandTextHide = button.querySelector(".button-brands_hide");
                if (number === 1) {
                    brandTextNext.style.display = 'none';
                    brandTextHide.style.display = 'block';
                    return number = 0
                } 
                if (number === 0) {
                    brandTextNext.style.display = 'block';
                    brandTextHide.style.display = 'none';
                    return number = 1;
                }
            }
            ww();
        })
    });
}