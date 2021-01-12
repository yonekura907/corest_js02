// jQueryのコード ------------------- //
$(function () {

  $('.wrap-nav').on('click', function () {
    console.log('クリックしたよ');
    $('.drawer').toggleClass('active');
  });

  $('.drawer').on('click', function () {
    $(this).removeClass('active');
  });


});
