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

let message = "Привет";
let messageEnd;

if (5 > 1) {
	messageEnd = ", Вася!";
} else {
	messageEnd = ", Оля!";
}

message += messageEnd;
console.log(message);