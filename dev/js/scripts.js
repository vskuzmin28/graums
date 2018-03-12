// call popup

$('.link-call-expert').click(function(e){
  e.preventDefault();
  $('.call-expert').bPopup({
    closeClass:'popup__icon-close',
      amsl: 0,
      positionStyle: 'fixed',
    })
})

// functional call form

$('.call-expert, .manager-consultation, .make-an-order, .popup-thanks').hide();

$('.send-form').submit(function() {
      $.post($(this).attr('action'), $(this).serialize(), function(res) {         
     if (res.success == 1) {
         $('.call-expert, .manager-consultation, .make-an-order').bPopup().close();
           $('.popup-thanks').bPopup({
             closeClass:'сlose',
                 amsl: 0
            })
           setTimeout(function(){$('.popup-thanks').bPopup().close();}, 3000);
       }else{
       alert(res.text)
       }
    }, 'json');
    return false;
  })

// scroll smooth

var easeInQuad = new SmoothScroll('[data-easing="easeInQuad"]', {easing: 'easeInQuad'});

// wow animate elements

new WOW().init()

// sliders

// portfolio

$('.portfolio-block').responsiveSlides({
  auto: false,
  pager: true,
  nav: true,
  speed: 500,
  maxwidth: 1040,
  //namespace: "centered-controls"
})

// reviews

$('.projects-block').responsiveSlides({
  auto: false,
  pager: false,
  nav: true,
  speed: 500,
  maxwidth: 1040,
  //namespace: "centered-controls"
})

// view full review in slider

$('.review-show').click(function(e){
  e.preventDefault();
  $('.review-full').toggle();
  $('.review-show').hide();
})

// mobile icon menu

$('.mobile-icon-menu').click(function(e){
  e.preventDefault();
  $('.mobile-menu-content').toggle();
})

// device points logic

$('.home-device__house__point-one').click(function(){
  $('.home-device-show-1').toggle();
})

$('.home-device__house__point-two').click(function(){
  $('.home-device-show-2').toggle();
})

$('.home-device__house__point-three').click(function(){
  $('.home-device-show-3').toggle();
})

$('.home-device__house__point-four').click(function(){
  $('.home-device-show-4').toggle();
})

$('.home-device__house__point-five').click(function(){
  $('.home-device-show-5').toggle();
})

$('.home-device__house__point-six').click(function(){
  $('.home-device-show-6').toggle();
})

// tabs

$('.portfolio__item__tabs__tab-content-two').hide();

$('.portfolio__item__tabs__tab-one').click(function(e){
  e.preventDefault();
  $('.portfolio__item__tabs__tab-content-one').show();
  $('.portfolio__item__tabs__tab-content-two').hide();
})

$('.portfolio__item__tabs__tab-two').click(function(e){
  e.preventDefault();
  $('.portfolio__item__tabs__tab-content-one').hide();
  $('.portfolio__item__tabs__tab-content-two').show();
})