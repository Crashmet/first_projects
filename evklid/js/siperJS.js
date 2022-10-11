const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    hide: true,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  autoplay: {
    delay: 4000,
  },
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-job__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
        const path = event.currentTarget.dataset.path

        document.querySelectorAll('.section-job__content').forEach(function(tabContent) {
          tabContent.classList.remove('section-job__content-active')
        })
        document.querySelector(`[data-target="${path}"]`).classList.add('section-job__content-active')
    })
  })
})



$( function() {
  $( "#accordion" ).accordion({
    heightStyle: "content"
  });
} );

$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );

document.querySelector('#burger').addEventListener('click' ,function() {
   document.querySelector('#menu').classList.toggle('header__menu-active')
})

document.querySelector('#none_menu').addEventListener('click' ,function() {
  document.querySelector('#menu').classList.toggle('header__menu-active')
})
