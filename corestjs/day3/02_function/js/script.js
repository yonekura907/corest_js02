
// jQueryのコード ------------------- //
$(function () {

  //変数グループ -----------------------
  const chara = $('.zoogoo');
  let pos = 0;

  //イベントグループ --------------------
  $('.btn1').on('click', function () {
    //左へ
    moveLeft();
  });

  $('.btn2').on('click', function () {
    //右へ
    moveRight();
  });
  $('.btn3').on('click', function () {
    reset();
  });

  //関数グループ -------------------------
  function moveLeft() {
    pos = pos - 10;
    if (pos < -100) {
      pos = 800;
    }
    console.log(pos); //10
    setPos(pos);
  }

  function moveRight() {
    pos = pos + 10;
    if (pos > 800) {
      pos = -100;
    }
    console.log(pos);
    setPos(pos);
  }
  function reset() {
    pos = 0;
    setPos(pos);
  }

  function setPos(aPos) {
    chara.css('left', aPos + 'px');
  }

});









