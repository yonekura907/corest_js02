// jQueryのコード ------------------- //
$(function () {
  //ハンバーガーをクリックしたら
  $('.wrap-nav').on('click', function () {

    let drawerMenu = $('.drawer');

    console.log('クリックしたよ');
    drawerMenu.toggleClass('active'); //drawer出てくる
    $('.cover').toggleClass('active'); //cover出てくる
    $('.header-nav').toggleClass('active'); //Xになる
  });

  // $('.drawer').on('click', function () {
  //   $(this).removeClass('active');
  //   $('.cover').removeClass('active');
  //   $('.header-nav').removeClass('active');
  // });

  //coverをクリックしたら
  $('.cover').on('click', function () {
    drawerMenu.removeClass('active'); //drawerが消える
    $(this).removeClass('active'); //coverが消える
    $('.header-nav').removeClass('active');
  });


});
