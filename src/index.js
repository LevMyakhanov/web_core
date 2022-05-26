import './style.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import {showMainText, mainButton} from './js/main';
import {showBrandIcons, buttonsBrands} from './js/brands';


Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    spaceBetween: 16,
  });

  

let showHideContent = function (object) {


  object.contentHidden.classList.toggle(object.contentHidden)
  object.contentHidden.classList.toggle(object.contentOpen)
  

  if (object.flag) {
    object.mainButtonShow.style.display = 'none';
    object.mainButtonHide.style.display = 'block';
    object.flag = false;
    return object.flag;
  } 
  if (object.flag) {
    object.mainButtonShow.style.display = 'block';
    object.mainButtonHide.style.display = 'none';
    object.flag = true;
    return object.flag;
  }
}


mainButton.addEventListener('click', showHideContent(showMainText))
buttonsBrands.addEventListener('click', showHideContent(showBrandIcons))