//Получаем объект
const textElement = document.querySelector('.content');

//Получаем содержимое объекта

const textElementContent = textElement.innerHTML;
console.log(textElementContent);

//Дописываем содержимое
textElement.innerHTML =
	`<p>${textElementContent}</p> <p>Живи, а работай в <span class='yellow'>свободное время</span></p>`;
	console.log(textElement.innerHTML);