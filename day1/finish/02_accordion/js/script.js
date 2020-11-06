// jQueryのコード ------------------- //

$(function () {

  //分岐の目安になる旗（フラグ）になる変数
  // var flag = false;

  $('.accordion dt').on('click', function () {
    // .accordionの中のdtをクリックしたら
    console.log('dtクリックしたよ');

    $('.accordion dt').toggleClass('active');
    $('.accordion dd').toggleClass('active');

    //簡単な方法
    // $(this).toggleClass('active');
    // $(this).next().slideToggle();

    //プログラミング的な方法
    // if (flag == false) {
    //   $(this).addClass('open');
    //   $(this).next().slideDown();
    //   flag = true;
    // } else if (flag == true) {
    //   $(this).removeClass('open');
    //   $(this).next().slideUp();
    //   flag = false;
    // }

  });
});
