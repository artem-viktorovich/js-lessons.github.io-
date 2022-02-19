$(document).ready(function () {

	//отвечает за нажатие на кнопку
	$('.popup-link').on('click', function () {
		$('.popup-1').fadeIn(300);
	});

	//отвечает за закрытие попапа
	$('.close-popup, .popup__body').on('click', function (e) {
		if (e.target == this) $('.popup').fadeOut(300);
	});


	//отвечает за смену попапа
	// $('form').on('submit', function (e) {
	// 	e.preventDefault();
	// 	var form = $(this);
	// 	if ($(this).find('input').val() == '') {
	// 		$('.popup').fadeOut(300);
	// 	} else {
	// 		form.children('.form__block').fadeOut(300, function () {
	// 			form.children('.form__thenx').fadeIn(300);
	// 		});
	// 	}
	// });

	//код отвечающий за выход мыши
	var flag = false;
	$('body').mouseleave(function (e) {
		if (flag === false) {
			$('.popup-4').fadeIn(300);
			flag = true;
		}
	});

	//код отвечающий за инпуты
	$.mask.definitions["9"] = false;
	$.mask.definitions["5"] = "[0-9]";
	$("input[type=tel]")
		.mask("7(555) 555-5555")
		.on("click", function () {
			$(this).trigger("focus");
		});

});

