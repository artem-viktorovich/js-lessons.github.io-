let currenYear = 2023;
let index = 0;

document.write(`<h1>Список пользователей</h1>`);
let userName1 = prompt("Введите имя пользователя");
let userYear1 =Number(prompt("Введите год рождения")) ;

let userAge1 = currenYear - userYear1;
index++

document.write(`<p>${index}) <strong>${userName1}</strong>, год рождения:<strong>${userYear1}</strong> возраст: <strong> ${userAge1}</strong></p>`);

let userName2 = prompt("Введите имя пользователя");
let userYear2 =Number(prompt("Введите год рождения")) ;

let userAge2 = currenYear - userYear2;
index++
document.write(`<p>${index}) <strong>${userName2}</strong>, год рождения:<strong>${userYear2}</strong> возраст: <strong> ${userAge2}</strong></p>`);