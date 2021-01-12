// jQueryのコード ------------------- //
$(function () {

  //変数グループ ----------------------------------------------
  const mainPCImg = ['img/photo01.jpg', 'img/photo02.jpg', 'img/photo03.jpg', 'img/photo04.jpg', 'img/photo05.jpg'];

  const mainSPImg = ['img/photo01s.jpg', 'img/photo02s.jpg', 'img/photo03s.jpg', 'img/photo04s.jpg', 'img/photo05s.jpg'];

  const shufflePCImg = _.shuffle(mainPCImg);
  const shuffleSPImg = _.shuffle(mainSPImg);

  const slideShow = $('.slide-show');
  const slideNav = $('.slide-nav');


  //現在の番号
  let currentIndex = -1;

  //時間を制御する変数
  let timer;

  //ウインドウ幅
  let windowWidth;


  //イベントグループ ----------------------------------------
  $(slideNav).find('li').each(function () {
    $(this).on('click', function () {
      console.log('liクリック');
    });
  });


  //関数グループ --------------------------------------------------
  init();

  //初期化
  function init() {
    //受け取り用の配列
    let seletImg = [];
    //ウインドウ幅を調べる
    windowWidth = $(window).width();
    if (windowWidth < 767) {
      seletImg = shuffleSPImg; //スマホ
    } else {
      seletImg = shufflePCImg; //PC
    }

    //liの作成
    for (let i = 0; i < seletImg.length; i++) {
      slideShow.append('<li><img src="' + seletImg[i] + '"></li>');
      slideNav.append('<li></li>');
    }
    changeSlide(0);
  }

  //画像を切替える関数
  function changeSlide(newIndex) {

    //現在の番号と同じ場合はスキップ
    if (currentIndex == newIndex) {
      return;
    }

    //一旦タイマー止める
    if (timer) {
      clearTimeout(timer); //停止
      timer = null; //タイマーの値を空に
    }

    slideShow.find('li').eq(currentIndex).removeClass('show');
    slideShow.find('li').eq(newIndex).addClass('show');

    //自分の番号を次の番号に更新
    currentIndex = newIndex;

    //ページングの指定
    slideNav.find(`li`).each(function (index) {
      $(this).removeClass('selected'); //一旦外す
      if (index == currentIndex) {
        $(this).addClass('selected');
      }
    });

    //タイマー始動
    timer = setTimeout(function () {
      nextIndex();
    }, 4000);

  }

  //番号を進める関数
  function nextIndex() {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= mainPCImg.length) {
      nextIndex = 0;
    }
    changeSlide(nextIndex);
  }

});
