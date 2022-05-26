// export let showBrandIcons = {
//     contentOpen: document.querySelector(".buttons-show-hide"),
//     contentHidden: document.querySelector(".brands__hidden"),
//     mainButtonShow: document.querySelector(".button-brands_show"),
//     mainButtonHide: document.querySelector(".button-brands_hide"),
//     flag: true
// }

export let buttonBrands = document.querySelector(".buttons-show-hide");
export let brandClassChange = document.querySelector(".brands__hidden");
export let brandTextNext = document.querySelector(".button-brands_show");
export let brandTextHide = document.querySelector(".button-brands_hide");
export let numberBrand = 1;

export function toggleBrand () {
    brandClassChange.classList.toggle("brands")
    brandClassChange.classList.toggle("brands__hidden")
    
    if (numberBrand === 1) {
        brandTextNext.style.display = 'none';
        brandTextHide.style.display = 'block';
        numberBrand = 0
        return numberBrand;
    } 
    if (numberBrand === 0) {
        brandTextNext.style.display = 'block';
        brandTextHide.style.display = 'none';
        numberBrand = 1;
        return numberBrand;
    }
}