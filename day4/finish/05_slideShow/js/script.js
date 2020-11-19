// jQueryのコード ------------------- //
$(function () {


  //変数グループ ----------------------------------------------
  const mainImg = [
    'img/photo01.jpg',
    'img/photo02.jpg',
    'img/photo03.jpg',
    'img/photo04.jpg',
    'img/photo05.jpg'
  ];



  //グローバル変数
  const slideShow = $('.slide-show');
  const slideLength = mainImg.length;
  const slideNav = $('.slide-nav');

  // 現在の番号
  let currentIndex = -1;
  // 時間を制御する変数
  let timer;




  //イベントグループ ----------------------------------------
  // クリックイベント
  slideNav.find('li').each(function (index) {
    $(this).on('click', function () {
      // liの押した番号をchangeSlideに渡す
      changeSlide(index);
    });
  });





  //関数グループ --------------------------------------------------
  //初期化
  init();

  function init() {
    //HTMLの生成
    for (let i = 0; i < slideLength; i++) {
      slideShow.append('<li><img src="' + mainImg[i] + '" alt=""></li>');
      slideNav.append('<li></li>');
    }
    //最初の1回目
    changeSlide(0);
  }



  // 画像を切り替える関数
  function changeSlide(newIndex) {
    // 現在の番号は飛ばすように（押せないように）
    if (currentIndex === newIndex) {
      return; // ここで終わり
    }

    if (timer) {
      clearTimeout(timer); // 一旦タイマーを停止
      timer = null; // timerの値を空にする
    }

    if (currentIndex >= 0) {
      // 現在表示している写真を１秒でopacity:０にする
      slideShow.find('li').eq(currentIndex).removeClass('show');
    }
    // 次の写真（newIndex）を１秒でopacity:1にする
    slideShow.find('li').eq(newIndex).addClass('show');

    //自分の番号を次の番号に更新
    currentIndex = newIndex;

    // ページングの指定
    slideNav.find('li').each(function (index) {
      $(this).removeClass('selected');
      if (index === currentIndex) {
        $(this).addClass('selected');
      }
    });

    // タイマー
    timer = setTimeout(() => {
      nextIndex();
    }, 4000);
  }



  // 番号を進める関数
  function nextIndex() {
    let newIndex = currentIndex + 1; //現在の値に1足す
    if (newIndex >= slideLength) {
      newIndex = 0;
    }
    changeSlide(newIndex);
  }





});
