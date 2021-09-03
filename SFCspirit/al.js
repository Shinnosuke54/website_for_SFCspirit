$(function(){
  $('html,body').animate({scrollTop:0},'1');
});

$('.opening').on('animationend', function () {
  $('.menu').css('opacity','0.8');
});


$(function(){
    $(window).scroll(function (){
        $('.figure').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 500){
                $(this).css('opacity','1');
                $(this).css('transform','translate(0, 0)');
            }
            else {
              $(this).css('opacity','0.3');
              $(this).css('transform','translate(0, 60px)');
              $(this).css('transition','all 400ms');

            }
        });
    });
});
$(function(){
    $(window).scroll(function (){
        $('.paragraph').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 150){
                $(this).css('opacity','1');
                $(this).css('transform','translate(0, 0)');
            }
            else {
              $(this).css('opacity','0.3');
              $(this).css('transform','translate(0, 45px)');
              $(this).css('transition','all 300ms');

            }
        });
    });
});
$(function(){
    $(window).scroll(function (){
        $('.header').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 350){
                $(this).css('opacity','1');
                $(this).css('transform','translate(0, 0px)');
            }
            else {
              $(this).css('opacity','0');
              $(this).css('transform','translate(0, 45px)');
              $(this).css('transition','all 450ms');
            }
        });
    });
});
$(document).ready(function() {
   $(window).on('scroll', function() {
    if($(window).scrollTop() < 1000) {
      $('.hero').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
      $('.hero h1').css('top', 35 + ($(window).scrollTop() * .1) + '%');
      $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
    }
  });
});
