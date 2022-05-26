import './style.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import {button, toggleText} from './js/main';
import {buttonBrands, toggleBrand} from './js/brands';


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

  
  buttonBrands.addEventListener('click', toggleBrand)
  button.addEventListener('click', toggleText)
