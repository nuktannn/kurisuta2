//swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    speed: 1000 //自動再生のスピード
},
});

// headerをスクロールすると、色が変わる
jQuery(window).on('scroll', function () {
  if (jQuery('.swiper-slide img').height() < jQuery(this).scrollTop()) {
      jQuery('.js-header').addClass('change-color');
  } else {
      jQuery('.js-header').removeClass('change-color');
  }
});

//drawer
jQuery('.drawer-icon').on('click', function(e){
  e.preventDefault()

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
  
  return false;
 });

//ハンバーガーメニューリンク飛ぶ
   $('#menu a[href]').on('click', function(event) {
   $('.drawer-icon').trigger('click');
 });