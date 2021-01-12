

// jQueryのコード ------------------- //
$(function () {

  //変数グループ ---------------------
  const containerEl = $('.container');
  const fruit = ['apple', 'orange', 'banana', 'kiwi'];
  const animals = ['img/risu.png', 'img/kuma.png', 'img/shika.png', 'img/usagi.png'];
  //空の配列宣言
  let shuffleAnimals = [];

  console.log(animals);
  // console.log(shuffleAnimals);
  //イベントグループ ----------------------
  $('.btn1').on('click', function () {
    console.log('クリックしたよ');
    addRisu();
  });

  $('.btn2').on('click', function () {
    shuffleAnimals = _.shuffle(animals);
    addAnimal();
  });

  //関数グループ ------------------------
  function addAnimal() {
    console.log('addAnimal呼ばれたよ');
    for (let i = 0; i < animals.length; i++) {
      // 1 imgタグを作る
      const imgTag = $('<img>');
      //2 src属性を追加する
      imgTag.attr('src', shuffleAnimals[i]);
      //3 containerElにimgタグを追加する
      containerEl.append(imgTag);

    }
  }


  function addRisu() {
    console.log('addRisu呼ばれました');

    for (let i = 0; i < 10; i += 1) {
      console.log(i);
      // 1 imgタグを作る
      const imgTag = $('<img>');

      //2 src属性を追加する
      imgTag.attr('src', 'img/risu.png');

      //3 containerElにimgタグを追加する
      containerEl.append(imgTag);
    }


  }




});

