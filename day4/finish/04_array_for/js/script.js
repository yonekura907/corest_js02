

// jQueryのコード ------------------- //
$(function () {

  //変数グループ ----------------------------------------------

  const containerEl = $('.container');
  const animals = ['img/risu.png', 'img/shika.png', 'img/kuma.png', 'img/usagi.png'];



  //イベントグループ ----------------------------------------
  $('.btn1').on('click', () => {
    addRisu();
  });

  $('.btn2').on('click', () => {
    addAnimal();
  });



  //関数グループ --------------------------------------------------

  function addRisu() {
    for (var i = 0; i < 10; i++) {
      // 1. imgタグを生成
      const imgTag = $('<img>');
      // 2. src属性を追加
      imgTag.attr('src', 'img/risu.png');
      // 3. divタグにimgタグを追加
      containerEl.append(imgTag);
    };
  }



  function addAnimal() {
    for (var i = 0; i < animals.length; i++) {
      // 1. imgタグを生成
      const imgTag = $('<img>');
      // 2. src属性を追加
      imgTag.attr('src', animals[i]);
      // 3. divタグにimgタグを追加
      containerEl.append(imgTag);
    };
  }


});




// jQuery使わないバージョン --------------------------------------------------------

// const animals = ['img/risu.png', 'img/shika.png', 'img/kuma.png', 'img/usagi.png', 'img/haa.png'];
// const idContainer = document.querySelector('.container');


// document.querySelector('.btn1').addEventListener('click', function () {
//   addRisu();
// });

// document.querySelector('.btn2').addEventListener('click', function () {
//   addChara();
// });



// function addRisu() {
//   for (let i = 0; i < animals.length; i++) {
//     // 1. imgタグを生成
//     let imgTag = document.createElement('img');
//     // 2. src属性を追加
//     imgTag.setAttribute('src', animals[i]);
//     imgTag.setAttribute('width', '150px');
//     // 3. divタグにimgタグを追加
//     idContainer.appendChild(imgTag);
//   };
// }


// function addAnimal() {
//   for (let i = 0; i < 10; i++) {
//     // 1. imgタグを生成
//     let imgTag = document.createElement('img');
//     // 2. src属性を追加
//     imgTag.setAttribute('src', 'img/risu.png');
//     imgTag.setAttribute('width', '100px');
//     // 3. divタグにimgタグを追加
//     idContainer.appendChild(imgTag);
//   };
// }
