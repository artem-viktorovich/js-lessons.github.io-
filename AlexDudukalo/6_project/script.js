//расчёт возраста

// let result

// function getAge(){
//     let currentYear = 2023;
//     let year = 1996;
//     result = currentYear - year;
// }

// getAge();
// console.log(result);

//усовершенствуем функцию

// function getAge(){
//     let currentYear = 2023;
//     let year = 1996;
//     return currentYear - year;
// }
//===========
// return завершает работу функции
//==============
// console.log(getAge());

//выведем переменную в объект

// function getAge(year = 0){
//     let currentYear = 2023;
//     return currentYear - year;
// }

// console.log(getAge(1996));

// function getAge(year = 0){
//     let currentYear = 2023
//     return currentYear - year
// }

// document.write(`Возраст пользователя: ${getAge(1996)}`);

//другой вид зависи через переменную


//  let getAge = function (year = 0){
//     let currentYear = 2023
//     return currentYear - year 
// }

// document.write(`Возраст пользователя: ${getAge(1996)}`);

function strong(text) {
    return `<strong>${text}</strong>` // выводим из вне
}


function printProduct(productName, count, price) {
    let totalPrice = count * price
    document.write(`
        <p>
            ${strong('Наименование товара:')} ${productName}, 
            ${strong('Количество товара:')} ${count},  
            ${strong('Стоимость товара:')} ${price}р, 
            ${strong('Общая стоимость:')} ${totalPrice}
        </p>
`)
    return totalPrice
}
let total = 0
total = total + printProduct(' Картофель', 2, 230)
total = total + printProduct(' Яблоки', 2, 600)
console.log(total);