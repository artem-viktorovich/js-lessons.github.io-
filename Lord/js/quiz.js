document.addEventListener("DOMContentLoaded", function () {
	"use strict";


	const form = document.querySelector(".quiz-body__form");
	const formItems = form.querySelectorAll('fieldset');
	const btnNext = form.querySelectorAll('form-button__btn-next');
	const btnPrev = form.querySelectorAll('form-button__btn-prev');

	btnNext.forEach((btn, btnIndex) => {
		btn.addEventListener('click', (event) => {
			event.preventDefault(); //submit отключается, и отменяет стандартное отображение и работу кнопки в браузере
			formItems[btnIndex].style.display = "none";
			formItems[btnIndex + 1].style.display = "block";
		});
	});

	formItems.forEach((formItem, formItemIndex) => {
		//блок который прокрутил и начал работу с масссивом
		if (formItemIndex === 0) {
			formItem.style.display = "block";
		} else {
			formItem.style.display = "none";
		}
		//блок который прокрутил и начал работу с масссивом
		if (formItemIndex !== formItems.length - 1) {
			const inputs = formItem.querySelectorAll("input"); //вывожу все инпуты в блок
			inputs.forEach((input) => {	 //перебор и вывод всех инпутов в form
				const parent = input.parentNode;
				//	parent.classList.remove("active-checkbox"); - для обнуления класса у родителя
				input.checked = false; // checked у всех родителей отключен
			});
		}

	});


});