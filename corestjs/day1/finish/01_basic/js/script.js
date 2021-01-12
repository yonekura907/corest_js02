
// var h1Tag = document.querySelector('h1');

// h1Tag.style.color = '#FF0000';
// h1Tag.style.backgroundColor = '#CCCCCC';
// h1Tag.style.border = '2px solid #0000FF';
// background-color -> backgroundColor


// document.querySelector('p').style.colo = '#CCCCCC';
// console.log(h1Tag);


$(function () {


    $('.btn').on('click', function () {
        $('h1').css({
            'color': '#FFF',
            'background-color': '#00FFFF',
        });
        $('.discription').addClass('border');
    });




    $('.discription').css('color', '#CCC');
    $('.menu li').eq(2).css('color', '#00FF00');


});
