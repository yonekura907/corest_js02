// jQueryのコード ------------------- //
$(function () {

  var mainPhoto = $('.main-photo img');

  $('.photo-list li').on('click', function () {

    $('.photo-list li').removeClass('active');
    $(this).addClass('active');

    var getPhoto = $(this).find('img').attr('src');
    console.log(getPhoto);

    mainPhoto.attr('src', getPhoto);

  });

});
