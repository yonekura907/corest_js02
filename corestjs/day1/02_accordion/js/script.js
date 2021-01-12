// jQueryのコード ------------------- //

$(function () {

  $('.accordion dt').on('click', function () {
    console.log('clickしたよ');


    $('.accordion dd').toggleClass('show');



  });


});
