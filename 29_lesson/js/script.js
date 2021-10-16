"use strict"

document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('form'); //перехватываем элемент для отправки
	form.addEventListener('submit', formSend);  //при отправке формы, должны перейти в функцию formSend

	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form); //переход в функци 
		if (error = 0){

		}else{
			alert('Заполните обязательные поля');
		}

	}

	function formValidate(form) {
			let error = 0;
			let formReq = document.querySelectorAll('._req'); //класс который обведёт незаполненные поля

			for (let index = 0; index < formReq.length; index++) { //для работы получения событий с input
				const input = formReq[index];
				formRemoveError(input); //чтобы приступить к работе, надо убирать класс error

				if(input.classList.contains('_email')){
					if(emailTest(input)){
						formAddError(input);
						error++;
					}

				}else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
					formAddError(input);
						error++;
				}else{ //проверка на заполненность формы
					if (input.value === ' '){
						formAddError(input);
						error++;
					}
				}
			}
			return error;
	}

	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) { //функция для проверки наличия ненужных символов в инпуте
		return !/^\w([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value); 
	}

});