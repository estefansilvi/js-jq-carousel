$(document).ready(function(){

  $('.next').click(function(){
    $('img.active').removeClass('active').next().addClass('active');

    if ($('img.active').hasClass('first')=== true){
      $('img.first').removeClass('active');
      $('img.last').addClass('active');
    }
  })

  $('.prev').click(function(){
    $('img.active').removeClass('active').prev().addClass('active');
    if ($('img.active').hasClass('last')=== true){
      $('img.last').removeClass('active');
      $('img.first').addClass('active');
    }
  })


})
