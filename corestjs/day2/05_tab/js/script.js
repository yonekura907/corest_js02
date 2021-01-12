// jQueryのコード ------------------- //
$(function () {

  // tab-menuのliをクリックしたら
  $('.tab-menu li').on('click', function () {
    console.log('クリックしたよ');

    //何番目をクリックしたかを変数に保存
    let indexNumber = $('.tab-menu li').index(this);
    console.log(indexNumber);

    //tab-menuのliからactiveを一旦全部外す
    $('.tab-menu li').removeClass('active');
    $('.tab-menu li').eq(indexNumber).addClass('active');


    //tab-contentのliからactiveを一旦全部外す
    $('.tab-content li').removeClass('active');
    $('.tab-content li').eq(indexNumber).addClass('active');

  });

});
