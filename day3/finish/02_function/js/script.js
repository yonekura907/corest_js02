
// jQueryのコード ------------------- //
$(function () {

  // グローバル変数 ------------------- //
  const zoogoo = $('.zoogoo');
  let xpos = 0;


  // イベント ------------------- //
  $('.btn1').on('click', function (evt) {
    console.log('evt: ' + $(this).attr('class'));
    let className = $(this).attr('class');
    moveChara(className);
    // moveLeft();
  });

  $('.btn2').on('click', function () {
    let className = $(this).attr('class');
    moveChara(className);
    // moveRight();
  });

  $('.btn3').on('click', function () {
    let className = $(this).attr('class');
    moveChara(className);
    // reset();
  });


  // 関数 ------------------- //
  function moveChara(className) {
    if (className == 'btn1') {
      xpos -= 30;
      if (xpos < -100) {
        xpos = 900;
      }
    } else if (className == 'btn2') {
      xpos += 30;
      if (xpos > 800) {
        xpos = -100;
      }
    } else if (className == 'btn3') {
      xpos = 0;
    }
    setPos(xpos);
  }

  // function moveLeft() {
  //   xpos -= 30;
  //   if (xpos < -100) {
  //     xpos = 900;
  //   }
  //   console.log(xpos);
  //   setPos(xpos);
  // }

  // function moveRight() {
  //   xpos += 30;
  //   if (xpos > 800) {
  //     xpos = -100;
  //   }
  //   console.log(xpos);
  //   setPos(xpos);
  // }

  // function reset() {
  //   xpos = 0;
  //   console.log(xpos);
  //   setPos(xpos);
  // }

  function setPos(xpos) {
    zoogoo.css('left', xpos);
  }

});











// var posNum = 0;
// var aniLeft;
// var zoogoo = document.getElementById('zoogoo');

// document.getElementById('btn1').onclick = function () {
//   moveLeft();
// };

// document.getElementById('btn2').onclick = function () {
//   animeLeft();
// };

// document.getElementById('btn3').onclick = function () {
//   stopAnime();
// }

// function moveLeft() {
//   posNum += 10;

//   if (posNum > 800) {
//     posNum = -100;
//   }
//   zoogoo.style.left = posNum + 'px';
// }

// function animeLeft() {
//   aniLeft = setInterval(moveLeft, 100);
// }

// function stopAnime() {
//   clearInterval(aniLeft);
// }
