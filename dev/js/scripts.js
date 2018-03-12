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

// mobile icon menu

$('.mobile-icon-menu').click(function(e){
  e.preventDefault();
  $('.mobile-menu-content').toggle();
})

// algo tabs

$('.tab-contentTwo, .tab-contentThree').hide();

$('.tab-linkOne').click(function(e){
  e.preventDefault();
  $('.tab-linkOne').addClass('tabs-links__active');
  $('.tab-linkTwo, .tab-linkThree').removeClass('tabs-links__active');
  $('.tab-contentOne').show();
  $('.tab-contentThree, .tab-contentTwo').hide();
})

$('.tab-linkTwo').click(function (e) {
  e.preventDefault();
  $('.tab-linkTwo').addClass('tabs-links__active');
  $('.tab-linkOne, .tab-linkThree').removeClass('tabs-links__active');  
  $('.tab-contentTwo').show();
  $('.tab-contentOne, .tab-contentThree').hide();
})

$('.tab-linkThree').click(function (e) {
  e.preventDefault();
  $('.tab-linkThree').addClass('tabs-links__active');
  $('.tab-linkOne, .tab-linkTwo').removeClass('tabs-links__active');    
  $('.tab-contentThree').show();
  $('.tab-contentOne, .tab-contentTwo').hide();
})

// algo machine

$('.full-machineTwo, .full-machineThree').hide();

$('.previewOne').click(function (e) {
  e.preventDefault();
  $('.full-machineOne').show();
  $('.full-machineThree, .full-machineTwo').hide();
})

$('.previewTwo').click(function (e) {
  e.preventDefault();
  $('.full-machineTwo').show();
  $('.full-machineOne, .full-machineThree').hide();
})

$('.previewThree').click(function (e) {
  e.preventDefault();
  $('.full-machineThree').show();
  $('.full-machineOne, .full-machineTwo').hide();
})

