// jQueryのコード ------------------- //
$(function () {

  let headerTag = $('header'); //headerタグを変数に保存
  //headerタグの高さ
  let headerY = headerTag.offset().top;
  // console.log(headerY);

  //.boxAの高さを取る
  // let boxTag = $('.boxA');
  // let boxAY = boxTag.offset().top;
  // console.log(boxAY);

  //windowの高さを
  let windowH = $(window).height();

  //スクロールしたら
  $(window).on('scroll', function () {

    //スクロール座標を変数に保存
    let scrollY = $(this).scrollTop();
    // console.log(scrollY + 'scrollしたよ');

    //もしscrollYがheaderYを超えたら
    if (scrollY > headerY) {
      // headerTagにaddClass fiexed
      headerTag.addClass('fixed');
    } else {
      headerTag.removeClass('fixed');
    }

    //もしscrollYが.boxAの高さを超えたら
    // if (scrollY > boxAY - windowH + 50) {
    //   //.boxAにaddClass active
    //   boxTag.addClass('active');
    // }

    //繰り返し
    $('.box').each(function () {
      //boxの高さ
      let boxY = $(this).offset().top;
      if (scrollY > boxY - windowH + 50) {
        $(this).addClass('active');
      }
    });
  });

});
