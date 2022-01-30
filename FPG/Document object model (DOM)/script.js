//Получаем объект
/*
const textElement = document.querySelector('.content');

//Получаем содержимое объекта

const textElementContent = textElement.innerHTML;
console.log(textElementContent);

//Дописываем содержимое
textElement.innerHTML =
	`<p>${textElementContent}</p> <p>Живи, а работай в <span class='yellow'>свободное время</span></p>`;
	console.log(textElement.innerHTML);*/


//data
//содержимое текстового узла/документа

//Получаем объект
/*
const textElement = document.querySelector('.content');
const qetComment = textElement.nextSibling;

console.log(qetComment);
console.log(qetComment.data);*/

//Создание элементов и узлов

//Создание нового элемента (тега)

// const textElement = document.querySelector('.lesson__text');

// const newElement = document.createElement('div'); //создаем новый div

//Наполняем его контентом
// newElement.innerHTML = 'Живи, а работай в <span class=\'yellow\'>свободное время</span>';
// console.log(newElement);
/*
	const newText = document.createTextNode('Hello');
	console.log(newText);
	*/

// textElement.after(newElement);

const element = document.querySelector('.lesson');

element.style.color = "red";