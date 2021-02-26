//-------
// Кастомный Select
//-------

const castomSelect = () => {
  const element = document.querySelector('.js-choice');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
  });
};

castomSelect();

//-------
// Swiper Gallery
//-------

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  slidesPerView: 3,
  slidesPerColumn: 2,
  autoHeight: false,
  spaceBetween: 50,
  slidesPerGroup: 3,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//-------
// ACCORDION
//-------

