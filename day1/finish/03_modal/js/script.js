// jQueryのコード ------------------- //
$(function () {

  //変数を作って.modalを保存
  var modal = $('.modal');
  var modalContainer = $('.modal-container');

  //クリックしたら
  $('.photo-list li').on('click', function () {

    //1 クリックした liの中にあるimgのsrc属性を読む
    var getImgSrc = $(this).find('img').attr('src');

    //2 modal-containerの中のimgタグにsrc属性getImgSrcを入れる
    modalContainer.find('img').attr('src', getImgSrc);

    //classのshowを付与
    modal.addClass('active');
  });

  //closeをクリックしたら
  $('.close').on('click', function () {
    modal.removeClass('active');
  });

});
