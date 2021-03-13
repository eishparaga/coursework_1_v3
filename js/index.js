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

const swiper = new Swiper('.gallery__right .swiper-container', {
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
// Swiper Publication
//-------

const swiperSecond = new Swiper('.publication__right-side .swiper-container', {
// Optional parameters
  slidesPerView: 3,
  slidesPerColumn: 1,
  autoHeight: false,
  spaceBetween: 50,
  slidesPerGroup: 2,
  
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
// TABS
//-------

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.tabs__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.tabs_path;
      
      document.querySelectorAll('.country__tabs__content').forEach(function(tabContent) {
        tabContent.classList.remove('tab__content__active');
      });

      document.querySelectorAll('.tabs__btn').forEach(function(tabsBtnClass){
        tabsBtnClass.classList.remove('tabs__btn_active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('tab__content__active');
      document.querySelector(`[data-tabs_path="${path}"]`).classList.add('tabs__btn_active');
    });
  });
});

// ----

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.item__link').forEach(function(tabsLink){
    tabsLink.addEventListener('click', function(e){
      const v = e.currentTarget.dataset.tabs_author;

      document.querySelectorAll('.tabs_disable').forEach(function(tabsAuthor){
        tabsAuthor.classList.remove('author-content__tabs_active');
      });

      document.querySelectorAll('.item__link').forEach(function(tabsLinkClass){
        tabsLinkClass.classList.remove('item__link__is_active');
      });

      document.querySelector(`[data-target="${v}"]`).classList.add('author-content__tabs_active');
      document.querySelector(`[data-tabs_author="${v}"]`).classList.toggle('item__link__is_active');    
    });
  });
});

//-------
// ACCORDION
//-------

$( function() {
  $( "#accordion__one" ).accordion({
    animate: 150,
    collapsible: true,
    heightStyle: "content"
  });
} );

$( function() {
  $( "#accordion__two" ).accordion({
    animate: 150,
    collapsible: true,
    heightStyle: "content"
  });
} );

$( function() {
  $( "#accordion__three" ).accordion({
    animate: 150,
    collapsible: true,
    heightStyle: "content"
  });
} );

$( function() {
  $( "#accordion__four" ).accordion({
    animate: 150,
    collapsible: true,
    heightStyle: "content"
  });
} );

$( function() {
  $( "#accordion__five" ).accordion({
    animate: 150,
    collapsible: true,
    heightStyle: "content"
  });
} );

//-------
// FULL EVENTS
//-------

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('events-btn').onclick = function() {
    document.getElementsByClassName('events__list')[0].classList.add('max_events');
    document.getElementById('events-btn').classList.add('disable');
  };
});