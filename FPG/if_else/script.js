// let message = 'ФПЖ';
// let number = 10;
// if (number>1) {
// 	console.log(message);
// } else {
// 	console.log ('Условие не выполнено');
// }

// if (number > 50) {
// 	console.log ('5 больше 50');
// } else if (number > 30) {
// 	console.log ('5 больше 30');
// } else if (number > 10) {
// 	console.log ('5 больше 10');
// } else if (number > 1) {
// 	console.log ('5 больше 1');
// } else {
// 	console.log ('Условие не выполнено');
// }



// let message = "Привет";
// let messageEnd;
// let number = 6;

// if (number > 1) {
// 	messageEnd = ", Вася!";
// } else {
// 	messageEnd = ", Оля!";
// }
// message += messageEnd;
// console.log(message);

//короткая запись форулы выше
// let messageEnd = (1 > 1) ? ', Вася!' : ', Оля!';
// message += messageEnd;
// console.log(message);

// ? - условный оператор
// let message = 'Привет';

// let messageEnd;
// let number = 35;
// let messageEnd = 5>4 ? ', Вася!' : ', Оля!';
// message += messageEnd;
// console.log(message);

//более сложное использование условного оператора ?
let message = 'Привет';
let messageEnd;
let number = 5;

if (number > 50) {
	messageEnd = ', Вася!';
} else if (number > 30) {
	messageEnd = ', Оля!';
} else if (number > 10) {
	messageEnd = ', Миша!';
} else if (number > 1) {
	messageEnd = ', Андрей!';
} else {
	messageEnd = ', Иннокентий!';
}
messageEnd = number > 5 ? ', Вася! ' :
	number > 30 ? ', Оля!' :
		number > 10 ? ', Миша!' :
			number > 15 ? ', Андрей!' : ' Иннокентий!';

message += messageEnd;
console.log(message);


//Синтаксис
// let message = 'Привет фрилансер';

// if (true) {
// 	console.log(message);
// 	console.log(typeof message);
// };