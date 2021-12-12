/*
Одинарные и двойные кавычки работают, по сути, одиаково, 
а если использовтаь обратные кавычки , то в такую строку можно вставлять произвольные выражения, 
обернув их в $ {...}
*/
/*
let textHi = "Привет!";
let textAll = `${textHi} Я строка!`;
console.log(textAll); //Привет! Я строка!

function someSum(a, b) {
	return a + b;
}
console.log(`Сумма: ${someSum(4, 7)}`); //Cумма: 11

/Многострочная запись

let text = `Привет!
Вы на канале
ФПЖ!`;
console.log(text);
*/

/*
Всё что заключено в любые кавычки будет
иметь тип данных строка 
*/
/*
let someString = "158"
let someSum = 158;
console.log(someString);
console.log(typeof someString);
console.log(someSum);
console.log(typeof someSum);
console.log(someString + someSum);
*/


//Спецсимволы табуляции
// \n - перевод строки . Пример: "Привет!n\Вы на каналеn\Фрилансер по жизни!"
// \n\t один отстут, \n\t\t 2 отступа

//Изменение регистра
/*
toUpperCase - верхний регистр
toLowerCase - нижний регистр
*/