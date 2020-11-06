
// jQueryのコード ------------------- //
$(function () {

	const ballObj = $('.ball');

	$('.btn1').on('click', function () {
		console.log('クリックしたよ');
		ballObj.css({
			'color': '#FFF',
			'background-color': '#06F'
		});
	});

	$('.btn2').on('click', function () {
		ballObj.css({
			'width': '160px',
			'height': '160px',
			'border-radius': '80px'
		})
	});


	$('.reset').on('click', function () {
		ballObj.css({
			'color': '#000',
			'background-color': '#F60',
			'width': '80px',
			'height': '80px',
			'border-radius': '40px',
			'left': '0px',
			'top': '0px',
		})
	});


	$('.move').on('click', function () {
		let sizeXNum = $('.numBoxX').val();
		let sizeYNum = $('.numBoxY').val();
		ballPos(sizeXNum, sizeYNum);
	});

	function ballPos(x, y) {
		ballObj.css({
			'left': x + 'px',
			'top': y + 'px'
		})
	}
});






// window.onload = function () {

// 	document.getElementById('btn1').onclick=changeColor;
// 	document.getElementById('btn2').onclick=changeSize;


// 	function changeColor() {
// 		ballOjt.style.color='#FFF';
// 		ballOjt.style.backgroundColor = '#06F';
// 	}

// 	function changeSize() {
// 		ballOjt.style.width = '160px';
// 		ballOjt.style.height = '160px';
// 		ballOjt.style.borderRadius = '80px';

// 	}
// 	function changeReset(){
// 		ballOjt.style.color='#000';
// 		ballOjt.style.backgroundColor = '#F60';
// 		ballOjt.style.width = '80px';
// 		ballOjt.style.height = '80px';
// 		ballOjt.style.borderRadius = '40px';
// 		ballOjt.style.top = '0px';
// 		ballOjt.style.left = '0px';
// 	}

// 	function movePos(xpos,ypos){
// 		ballOjt.style.top = ypos+'px';
// 		ballOjt.style.left = xpos+'px';
// 	};
// };
