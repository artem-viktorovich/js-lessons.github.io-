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
/*
let userInfo = {
	name: 'Vasy',
	age: 30,
};

//console.log(userInfo.age);

if (userInfo.age) {
	console.log(userInfo.age);  //проверка на наличие свойства в объекте
}
*/

//Цикл for ... in
/*
Для перебора всех свойств объекта используется цикл  for ... in
Этот цикл отличается от изученного цикла for (;;).


for (let key in object) {
	тело цикла выполняется после каждого свойства объекта
}*/
/*
let userInfo = {
	name: 'Vasy',
	age: 30,
	adress: {
		city: 'york',
		street: 'fredom',
	}
};

for ( let key in userInfo) {
	console.log(key);
	console.log(userInfo[key]);
}// выводи каждый ключ и его свойство
*/

//Домашка
/*
let userInfo = {
	name: 'Vasy',
	age: 30,
	'58': '<e,erf',
	showInfo() {
		console.log(`${this.name}`);
	}
}
let user = userInfo;
//userInfo = null;
user.showInfo();
*/

let userInfo = {

};

userInfo.age = 30;
console.log(userInfo);

userInfo.name = 'Vasy';
console.log(userInfo);

userInfo.name = "Лена";
console.log(userInfo);

delete userInfo.name;
console.log(userInfo);