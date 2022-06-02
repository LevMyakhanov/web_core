// export let showBrandIcons = {
//     contentOpen: document.querySelector(".buttons-show-hide"),
//     contentHidden: document.querySelector(".brands__hidden"),
//     mainButtonShow: document.querySelector(".button-brands_show"),
//     mainButtonHide: document.querySelector(".button-brands_hide"),
//     flag: true
// }

let buttons = document.querySelectorAll(".buttons-show-hide");

export let listenBrand = function () {
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            let brandList = button.parentElement.querySelector('.brands__list')
            let brandTextNext = button.querySelector(".button-brands_show");
            let brandTextHide = button.querySelector(".button-brands_hide");

            brandList.classList.toggle("brands")
            brandList.classList.toggle("brands__hidden")
            
            if (brandTextNext) {
                brandTextNext.style.display = 'none';
                brandTextHide.style.display = 'block';
                return brandTextHide;
            }
            if (brandTextHide) {
                brandTextNext.style.display = 'block';
                brandTextHide.style.display = 'none';
                return brandTextNext;
            }
        })
    });
}