// jQueryのコード ------------------- //
$(function () {
  $('.photo-list li img').on('click', function () {

    console.log('clickしたよ');
    $('.modal').addClass('active');

    //クリックしたimgのsrc属性
    let imgEl = $(this).attr('src');
    console.log(imgEl);

    $('.modal-container img').attr('src', imgEl);



  });


  $('.close').on('click', function () {
    $('.modal').removeClass('active');
  });


});
