//синтаксис

//создание объекта

//let userInfo = new Object(); //синтаксис "конструктор объекта"

//синтаксис "литерал объекта"
/*
let userInfo = {
	name: 'Vasy',
	age: 30,
	'likes JS': true,
}; 
console.log(userInfo);
console.log(userInfo.name); //объект, имя свойства
console.log(userInfo.['likes JS']); //особенность свойства записи с 2х и более слов
*/

//Имена свойств

//Вычисляемое либо передаваемое имя

//Вычисляем имя
/* 
let firstPart = 'likes';
let userInfo = {
	name: 'Vasy',
	age: 30,
	[firstPart + ' JS']: true,
};
console.log(userInfo['likes JS']); 
Эта функция помогает определить правильность получения имени




//Преимущества квадратных скобок
let key = 'name';
console.log(userInfo[key]); //с помощью этой функции можно вывести имя
*/
/*
function makeUserInfo (name, age) {
	return {
		name: name,
		age: age,
	}
};

let user = makeUserInfo( 'Dfcz', 30); //Своего рода конструктор для рефакторинга, но не конструктор
console.log(user);

*/

//Изменение объекта, "удаление"
/*
let userInfo ={
	name: "Вася",
	age: 30,
	'likes JS': true,
}
console.log(userInfo);

delete userInfo.age;

console.log(userInfo);

delete userInfo['likes JS'];

console.log(userInfo);*/

/*
Изменение объекта
Копирование
При копировании объекта в другую переменную сам объект не дубоируется,
 а копируется только ссылка на него
*/
/*
let userInfo = {
	name: 'Vasy',
	age: 30,
};

console.log(userInfo);

let user = userInfo; //скопирована сама ссылка
console.log(user);
user.age = 18;
console.log(userInfo);
*/
//с помощью копирования можно добиться изменения свойств 
//внутри объекта, даже в константе

//Дублирование объекта
//Синтаксис
//Object.assign(куда(объект), что (свойство#1), что (свойсво #2), ...);
/*
let userInfo = {
	name: 'Vasy',
	age: 30,
};

let user = Object.assign({}, userInfo); //создаю пустой объект с указанием ссылки

user.age = 18;

console.log(userInfo);
console.log(user);
*/

//Проверка существования свойства

let userInfo = {
	name: 'Vasy',
	age: 30,
};

//console.log(userInfo.age);

if (userInfo.age) {
	console.log(userInfo.age);  //проверка на наличие свойства в объекте
}