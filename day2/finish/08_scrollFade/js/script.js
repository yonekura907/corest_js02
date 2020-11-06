$(function () {

	console.log('load');
	// var dy = $(this).scrollTop();
	// $(this).scrollTop();　// Y座標
	// console.log(dy);

	// ウインドウの高さ
	let windowHeight = $(window).height();

	// header
	let header = $('header');
	let headerTop = header.offset().top;

	// boxA
	let boxA = $('.boxA');
	let boxATop = boxA.offset().top;
	// console.log(boxATop);


	// .boxの複数の高さを取得
	let boxes = $('.box');
	let boxesTop = [];
	for (let index = 0; index < boxes.length; index++) {
		boxesTop[index] = $(boxes[index]).offset().top;
	}

	// scrollFade();


	$(window).scroll(function () {
		// スクロール値
		var dy = $(this).scrollTop(); // Y座標
		// スクロール値の表示
		// console.log(dy);

		// スクロール値がヘッダの高さを超えたら
		if (dy >= headerTop) {
			header.addClass('fixed');
		} else {
			header.removeClass('fixed');
		}


		// スクロール値がboxAの高さを超えたら
		// if (dy >= boxATop - windowHeight + 100) {
		// 	boxA.addClass('active');
		// }


		// jQuery scroll Fade --------------------------
		// $('.box').each(function () {
		// 	let elemTop = $(this).offset().top;
		// 	if (dy > elemTop - windowHeight + 100) {
		// 		$(this).addClass('active');
		// 	}
		// });


		// Array scroll Fade --------------------------
		for (let index = 0; index < boxes.length; index++) {
			if (dy > boxesTop[index] - windowHeight + 100) {
				$(boxes[index]).addClass('active');
			}
		}

		// scrollFade();

	});



	function scrollFade() {
		// Array scroll Fade --------------------------
		for (let index = 0; index < boxes.length; index++) {
			if (dy > boxesTop[index] - windowHeight + 100) {
				$(boxes[index]).addClass('active');
			}
		}
	}




	// クリックイベント
	$('header li a').on('click', function (evt) {
		// イベントの停止
		evt.preventDefault();
		// リンク先の取得
		var targetName = $(this).attr("href");
		console.log(targetName);
		// targetNameの座標
		var targetPosY = $(targetName).offset().top;
		// console.log(targetPos);
		$('html, body').animate({ scrollTop: targetPosY - 70 }, 500);
	});


});
