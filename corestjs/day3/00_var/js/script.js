
console.log('読み込んだよ');

//変数　名前numA 10数値を保存 再宣言できる
var numA = 10;
var numA = 20;

//変数  再宣言できない
// let numB = 20;
let numB = 30;

//定数 値の上書きができない
const numC = 50;
// numC = 100;


// jQueryのコード ------------------- //
$(function () {

  // 変数のグループ -------------------------
  let numVal;
  let numTaxVal;
  const txt = $('.output');

  // イベントのグループ ---------------------------
  //1 .btnをクリックしたら
  $('.btn').on('click', function () {
    getVal();
  });

  //関数のグループ --------------------------------
  //新規の関数
  function getVal() {
    //変数に保存
    numVal = $('.numBox').val(); //inputの値の取り方
    numTaxVal = Math.floor(numVal * 1.1);
    setVal();
  }

  function setVal() {
    console.log(numTaxVal);
    txt.text(numTaxVal);
  }



});



