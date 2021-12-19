//Создание массива
/*
let arr = new Array(); // Используется редко

/let arr = [ ]; /используется чаще

/Значение массива

let arrOne = [
	'Вано',
	'Дьякон',
	'Петр', //висячая запятая
];
let arrOne_2 = ['Вано', 'Дьякон', 'Петр',]; //чаще записыватеся

let arrTwo = [
	'Петр', //строчный значения
	{
		type: 'JS',
		age: 36 //отдельный объект
	},
	true, //булевый тип
	function () { //отдельная функция в объекте
		console.log('Привет, я Коля')
	}
];

/Многомерные массивы
let matrix = [
	[1, 2, 3],
	[4, 5, 6,],
	[7, 8, 9]
];


//Получение значений
let arrOne = [
	'Вано',
	'Дьякон',
	'Петр',
];
console.log(arrOne[0]);
//Создание массива

let arr = new Array(); // Используется редко

/let arr = [ ]; /используется чаще

/Значение массива

let arrOne = [
	'Вано',
	'Дьякон',
	'Петр', //висячая запятая
];
let arrOne_2 = ['Вано', 'Дьякон', 'Петр',]; //чаще записыватеся

let arrTwo = [
	'Петр', //строчный значения
	{
		type: 'JS',
		age: 36 //отдельный объект
	},
	true, //булевый тип
	function () { //отдельная функция в объекте
		console.log('Привет, я Коля')
	}
];

/Многомерные массивы
let matrix = [
	[1, 2, 3],
	[4, 5, 6,],
	[7, 8, 9]
];


/Получение значений
let arrOne = [
	'Вано',
	'Дьякон',
	'Петр',
];
console.log(arrOne[0]);
/console.log(arrOne[5]); /undefined

let matrix = [
	[1, 2, 3],
	[4, 5, 6,],
	[7, 8, 9]
];
console.log(matrix[0][2]); // 3
*/

//Изменение значений массива
/*
let arr = ['Ваня', "Оля", "Коля",];
console.log(arr);
//Замена существующего
arr [0]= 'Иван';
console.log(arr);

arr [3]= 'Базука';
console.log(arr);
*/
/*
Методы массивов
Первый из них это очередб или упорядоченная коллекция элементов.
Очередь поддерживает два вида операций:
1. добавлние элемента в конец очереди
2. удаление элемента в начале, сдвигая очередь так, что второй
элемент становится первым

Другой варинт применения для массива - структура данных,
називаемая стек.
Стек поддерживает два вида операций:
1. добавление элемента в конец
2. удаление последнего элемента

Массивы в js могут работать и как очередь, и как стек.
Мы можем добавлять/удалять элементы как в начало, так и в конец массива.
И в этом помогут след. методы:
*/

// let arr = ['Ваня', 'Колян', 'Лопата',];
// console.log(arr);
// arr.push('Uvasy'); //добавляем элемент в конец массива
// console.log(arr);


// let arr = ['Ваня', 'Колян', 'Лопата',];
// arr.shift(); //удаляет первый элемент массива
// console.log(arr);

// let arr = ['Ваня', 'Колян', 'Лопата',];
// arr.pop(); //удаляет последний элемент массива
// console.log(arr);

// let arr = ['Ваня', 'Колян', 'Лопата',];
// arr.unshift('Any'); // добавляет элемент в начало массива сдвигая предыдущие
// console.log(arr);
// arr.unshift('Baby', 'Sveta');
// console.log(arr);

/*
Методы push/pop выполняюются быстро, а методы shift/unshift - медленно
Просто взять и добавить элемент с номеров 0 недостаточно.
Нужно также заново пронумеровать остальные элементы.

Операция unshift должна выполнить 3 действия:
1. Добавить элемент с индексом 0 
2. Сдвинуть все элементы вправо, заново пронумеровать их, 
заменив 0 на 1, 1 на 2 и т.д.
3. Обновить свойсто length.

Чем больше элементов содержит массив, тем больше
времени потребуется для того, чтобы их переместить,
больше операций с памятью.

А вот чтобы добавить элемент в конец массива (push) 
не нужно ничего перемещать.
Так же не нужно заново нумеровать элементы. Достаточно увеличить значение length.
*/

//Удаление/добавление/изменение конкретных элементов

// let arr = ['Ваня', 'Колян', 'Лопата',];

// delete arr[1]; //удаление конкретного жлемента массива
// console.log(arr);
// console.log( arr[1]); //undefined
// console.log(arr.length); //длина строки

//Метод splice. Позволяет добавлять, удалять и заменять элементы.
//Синтаксиси arr.splice(index[,deleteCount, element, ..., elemN])

/*
//Удаляем элемент
let arrOne = ['Ваня', 'Колян', 'Лопата',];
//НАчиная с первой позиции, удаляем 1 элемент
arrOne.splice(1, 1);
console.log(arrOne);

//Удаляем элемент и возвращаем его в переменную - removed
let arrTwo = ['Ваня', 'Колян', 'Лопата',];
let removed = arrTwo.splice(1, 1);
console.log(removed);

//Заменяем элементы

let arrThree = ['Ваня', 'Колян', 'Лопата',];
//Начиная с нулевой позиции (Ваня), заменяем один элемент
arrThree.splice(0, 1, 'Саня');
console.log(arrThree); //['Саня', 'Колян', 'Лопата',];

//Добавляем элементы
let arrFour = ['Ваня', 'Колян', 'Лопата',];
//Начиная с первой позиции (перед Колян), добавляем 2 элемента
arrFour.splice(1, 0, 'Дочка', 'Почка',) ;
console.log(arrFour);


//Удаляем элемент
let arrFive = ['Ваня', 'Колян', 'Лопата',];
arrFive.splice(-1, 1); //удалится Лопата
console.log(arrFive);*/

//Метод slice
/*
Созаем новый массив, в который копирует часто либо весь массив
Синтаксис arr.slice{[start], [end] не включая [end ]}

*/
/*
//Задаем массив
let arrOne = ['Ваня', 'Колян', 'Лопата',];

//Начиная с первой позиции Колян до 2ой Лопата (не включая Лопата)
let arrtwo = arrOne.slice(1, 2);
console.log(arrtwo);

//Копирование наоборот справа налево
let arrThee = arrOne.slice(-2,-1);
console.log(arrThee);

//Копируем весь массив 
let arrFour = arrOne.slice();
console.log(arrFour);*/

//Метод - concat
/*
Создает новый массив, в который копирует данные их других массивов
и дополнительные значения (в конц массива)
Синтаксис arr.concat(arg1, arg2 ...)
*/
/*
let arrOne = ['Ваня', 'Колян', 'Лопата',];
let arrTwo = arrOne.concat('Петя');
console.log(arrTwo);
*/
//Методы indexOf/lastIndexOf и includes - аналоги строковым методам

/*
1. arr.indexOf(item, from) ищет item, начиная с индекса from, 
и возвращает индекс, на котором был найден искомый элемент, в противном случае - 1.
2. arr.lastIndexOf(item, from)- те же функции. но поиск производит справа налево.
3. arr.includes(item, from) - ищет item, начиная с индекса from, и возвращает true, если поиск успешен
*/

let arrOne = ['Ваня', 'Колян', 'Лопата',];
//indexOf
console.log(arrOne.indexOf('Колян'));
console.log(arrOne.indexOf('Вася'));
console.log(arrOne.indexOf('Вася' , 2));
//includes
console.log(arrOne.includes('Колян'));
console.log(arrOne.includes('Вася'));
console.log(arrOne.includes('Вася' , 2));
