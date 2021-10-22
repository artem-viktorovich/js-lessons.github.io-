let userName;
console.log (typeof userName); //получаем тип данных
console.log(userName); //поулчаем значение переменной

// Примеры использования
//  Проверяем определена ли переменная
if (userName === undefined){
	console.log('Переменная НЕ определена');
} else {
	console.log('Переменная определена');
}

if (typeof userName === 'undefined'){  // подойдет для дебагинга
	console.log('Переменная НЕ определена');
} else {
	console.log('Переменная определена');
}

//=====================================

// let userName = null; //содержит только одно значение
// console.log(userName);

//Обратимся к элементу., которого нет

let block = document.querySelector('.block');

//Получим null
console.log(block);

//Вернем тип object
console.log(typeof block);



/* Boolean*/
let willYouMarryMe = false;
if (willYouMarryMe) {
	console.log(':)');
} else {
	console.log(':(');
}

//Также переменная может сама получать, одно из этих значений
let trueOrFalse = 6 < 18;
console.log(trueOrFalse);

//Number
/*
let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(userHeight);
console.log(typeof userAge);
console.log(typeof userHeight);
*/
//String
// '' от "" не имеют разницы, но обратные`` используют для формул

let userAge = 20;
let userAgeInfo =`Возраст: ${userAge}`;
console.log(userAgeInfo);

