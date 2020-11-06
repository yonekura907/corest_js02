// jQueryのコード ------------------- //
$(function () {
    console.log('読み込んだよ');

    $('.tab-menu li').on('click', function () {
        // $('.tab-menu li').removeClass('active');
        $('.tab-menu li').not(this).removeClass('active');
        $(this).addClass('active');

        var indexNumber = $('.tab-menu li').index(this);



        $('.tab-content li').removeClass('active');
        $('.tab-content li').eq(indexNumber).addClass('active');
    });
});
