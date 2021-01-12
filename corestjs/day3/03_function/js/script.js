
// jQueryのコード ------------------- //
$(function () {

  //変数
  const chara = $('.zoogoo');
  let pos = 0; //座標
  let numValLeft; //フォームの値
  let numValRight; //フォームの値


  //イベント
  $('.btn1').on('click', function () {
    setVal1();
  })

  $('.btn2').on('click', function () {
    setVal2();
  })

  $('.btn3').on('click', function () {
    moveReset();
  })


  //関数
  function setVal1() {
    numValLeft = $('.numBoxLeft').val(); //左への移動距離取得

    //文字列の値を数値に変換
    numValLeft = parseInt(numValLeft);

    console.log(numValLeft);
    moveLeft();
  }


  function setVal2() {
    numValRight = $('.numBoxRight').val(); //右への移動距離取得
    numValRight = parseInt(numValRight);
    console.log(numValRight);
    moveRight();
  }


  function moveLeft() { //左に移動
    pos = pos - numValLeft;
    if (pos < -100) {
      pos = 800;
    }
    console.log(pos);
    chara.css('left', pos + 'px');
  }



  function moveRight() { //右に移動
    pos = pos + numValRight;
    if (pos > 800) {
      pos = -100;
    }
    console.log(pos);
    chara.css('left', pos + 'px');
  }


  function moveReset() { //リセット
    pos = 0;
    console.log(pos);
    chara.css('left', pos + 'px');
  }


});









