// let index = 1

// let name1 = prompt(`Введите имя ${index}`)
// document.write(`<p>${index}) ${name1}</p>`)
// index++ //команда инкремента
// let name2 = prompt(`Введите имя ${index}`)
// document.write(`<p>${index}) ${name2}</p>`)
// index++ //команда инкремента
// let name3 = prompt(`Введите имя ${index}`)
// document.write(`<p>${index}) ${name2}</p>`)
// index++ //команда инкремента
// let name4 = prompt(`Введите имя ${index}`)
// document.write(`<p>${index}) ${name2}</p>`)

//Циклы

//for - конструкция, которая позволит обозначить и настроить цикл

// for(счётчик; условия выполнения;) {опции выполнения цикла
//     блок, который будет повторяться
// }

// for (let index = 1; index <= 4; index++) {
//     let name = prompt(`Введите имя ${index}`)
//     document.write(`<p>${index}) ${name}</p>`)
// }

//Массивы 
// Массивы - упоряжоченный набор элементов с указанием индекса


// let nameArray = ["Оля", "Таня", "Юра", "Олег"];

// let index = 3;

// nameArray[index] = "Константин"; //перезапись переменной данного индекса

// console.log(nameArray[index]);

// nameArray.push("Саша") //добавление имени в конце массива

// console.log(nameArray);


//порядок обращения к индексу элемента массива
//элемент массива - отдельная переменная, входящая в массив с порядковым номером(индексом)


// let nameArray = ["Оля", 123, true, "Олег"];
// nameArray.push("Ваня")
// nameArray.push("Санчо")
// console.log(nameArray.length); //длина массива
// let index = 0;

// document.write(`${index}) ${nameArray[index]}`)
// index++
// document.write(`${index}) ${nameArray[index]}`)

//for(let i = 0; i<nameArray.length; i++){ //таким способом, не меняя индекс, контролируем количествао срабатывания цикла
//  document.write(`${i}) ${nameArray[i]}</br>`)
//}


// function getOpenBtn() {
//     let openBtn = document.createElement("button");
//     openBtn.classList.add('open-btn');
//     openBtn.textContent = 'Открыть меню'
//     открытие меню
//     openBtn.onclick = function () {
//         if (menu.classList.contains("open") == true) { //если есть true, удаляется класс open
//             openBtn.textContent = 'Открыть меню'
//             menu.classList.remove("open")
//         } else { //если нет класса open, false
//             openBtn.textContent = 'Закрыть меню'
//             menu.classList.add("open")
//         }
//         (menu.classList.contains("open")); //проверяет наличие класса у элемента. Возвращает true, если класс есть и false, если нет
//     }

//     return openBtn
// }

// let menuArray = ["Главная", "О нас", "Услуга", "Контакты", "Вход"]
// let hrefArray = ["https://dzen.ru", "https://dzen.ru", "https://dzen.ru", "https://dzen.ru", "https://dzen.ru"]

// function getMenu(itemsArray, hrefArray) {
//     let menuList = document.createElement("ul")
//     menuList.classList.add("menu")

//     for (let i = 0; i < itemsArray.length; i++) {
//         let item = document.createElement("li")
//         item.classList.add("menu__item")
//         let link = document.createElement("a")
//         link.classList.add("menu__link")
//         link.href = hrefArray[i];
//         link.textContent = itemsArray[i]; //присваиваем элемент массива menuArray

//         item.append(link)
//         menuList.append(item)
//     }

//     return menuList
// }

// let menu = getMenu(menuArray, hrefArray)

// document.body.append(getOpenBtn(), menu)
//sllice()- команда удаления набора элементов массива

//хранение данных в массиве
let usersName = []
let usersYear = []


//создаём инпуты
function getInput(placeholder, type) {
    let input = document.createElement("input")
    input.placeholder = placeholder
    input.type = type

    return input
}
//создаём кнопки
function getAddBtn(text) {
    let btn = document.createElement("button")
    btn.textContent = text
    return btn
}

//создаём див
function getBox() {
    let div = document.createElement("div")
    return div
}

//создаём таблицу
function getTable() {
    let table = document.createElement("table")
    let thead = document.createElement("thead")
    let tr = document.createElement("tr")
    let tbody = document.createElement("tbody")

    let nameTd = document.createElement("td")
    nameTd.textContent = "Имя пользователя"

    let yearTd = document.createElement("td")
    yearTd.textContent = "Год рождения"

    let ageTd = document.createElement("td")
    ageTd.textContent = "Возраст"

    let removeTd = document.createElement("td")
    removeTd.textContent = "Удалить"

    tr.append(nameTd, yearTd, ageTd, removeTd)
    thead.append(tr)
    table.append(thead)
    table.append(tbody)
    document.body.append(table)

    return tbody
}


//функция создания tr
function getUserTr(userName, userYear, index) {
    let age = getAge(userYear)

    let tr = document.createElement("tr")
    let nameTd = document.createElement("td")
    let yearTd = document.createElement("td")
    let ageTd = document.createElement("td")
    let removeTd = document.createElement("td")

    let removeBtn = document.createElement("button")
    removeBtn.textContent = "Удалить"

    removeBtn.onclick = function(){
       usersName.splice(index,1) //удаляем имя
       usersYear.splice(index,1) //удаляем год
       render(usersName,usersYear)//перерисовываем массив
    }

    nameTd.textContent = userName
    yearTd.textContent = userYear
    ageTd.textContent = age
    removeTd.append(removeBtn)
    tr.append(nameTd, yearTd, ageTd, removeTd)

    return tr
}


//расчёт возраста
function getAge(year) {
    return 2023 - year
}

let box = getBox();
let addBtn = getAddBtn("Добавить пользователя")
let userNameInp = getInput("Имя", "text")
let userYearInp = getInput("Год рождения", "number")

box.append(userNameInp, userYearInp, addBtn) //добавляем в объекты в див

document.body.append(box)
let usersTable = getTable()

addBtn.onclick = function () {
    let nameValue = userNameInp.value
    
    let yearValue = Number(userYearInp.value)

    usersName.push(nameValue) //передаём имя в массив
    usersYear.push(yearValue) //передаём год в массив


    render(usersName,usersYear)
    userNameInp.value = ""
    userYearInp.value = ""
}

function render(nameArr, yearArr){
    usersTable.innerHTML = ""
    for(let i=0; i < nameArr.length; i++){
        let newUserTr = getUserTr(nameArr[i], yearArr[i], i)
        usersTable.append(newUserTr)
    }
}