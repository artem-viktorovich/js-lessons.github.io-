/*Шестнадцатиричные, двоичные и восьмиричные числа
Шестнадцатиричные числа широко используются в JS
для представления цветов, кодировки символов и многого другого
*/

console.log(0xFF); // 0xFF  = 255

//реже используются двоичные и восьмиричные числа

console.log(0b11111111);
console.log(0o377);

/*
Метод toString(base)
Метод num.toStruing(base) возвращаем строковое представление числа
в той или иной системе счисления (base).
base может принимтаь значения от 2 до 36 (по умолчанию 10)
*/

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));


/*Окрегление чисел   
Math.floor - округление чисел в меньшую сторону
Math.ceil - округление в большую сторону
Math.round - округление до ближайшего целого
toFixed - округление число до n знаков после запятой и возвращает строковое представление результата
Пример: было 5.854 станет 5.9
*/