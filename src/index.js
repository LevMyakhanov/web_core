import './style.css';
import Swiper, { Navigation, Pagination } from 'swiper';
import {listenMain, listenMenu, listenMenu2} from './js/main';
import {listenBrand} from './js/brands';
import {listenModal, listenModal2} from './js/modal';

Swiper.use([Navigation, Pagination]);

const brandSlider = new Swiper('.swiper-brands', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-brands__swiper-pagination',
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


const pricesSlider = new Swiper('.swiper-devices', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-devices__swiper-pagination',
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

const deviceSlider = new Swiper('.swiper-prices', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-prices__swiper-pagination',
    clickable: true
  },
  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev'
  // },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  spaceBetween: 16,
});


listenMain();
listenMenu();
listenMenu2();
listenBrand();
listenModal();
listenModal2();