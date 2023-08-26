//создание элементов

// document.write('<p>Привет, я параграф</p>')
// document.write('<h1>Привет, я заголовок</h1>')
// document.write('<ul><li>Элемент 1</li><li>Элемент 2</li></ul>')
// document.write('<button>я кнопка</button>')


// let title = document.createElement("h1")
// //createElement - созданный объект элемента.
// title.textContent = 'Я заголовок'
// //textContent - добавление контента в тег
// document.body.append(title)
// //добавление элемента в body

// console.log(title);


// let paragraph = document.createElement("p")
// paragraph.textContent = 'Я параграф'
// document.body.append(paragraph)


// let counter = 0
// let list = document.createElement("ul")

// let listItem1 = document.createElement("li")
// counter++
// listItem1.textContent = `Элемент ${counter}`
// let listItem2 = document.createElement("li")
// counter++
// listItem2.textContent = `Элемент ${counter}`
// let listItem3 = document.createElement("li")
// counter++
// listItem3.textContent = `Элемент ${counter}`
// list.append(listItem1,listItem2,listItem3)
// document.body.append(list)


//prepend - добавляет элемент в начало 

// document.body.append(list)

//интерактивность



// let action = document.createElement("button")
// action.textContent = "Кнопка"

// action.onclick = function(){
//     title.textContent = "Клик"
//     title.classList.add('text')

//     let listItem = document.createElement("li")
//     counter++
//     listItem.textContent = `Элемент ${counter}`
//     list.append(listItem)

// }

// //onclick - слежка нажатия (слушатель события)

// document.body.append(action)


// Программа
let counter = 0
let yearThis = 2023
let divElements = document.createElement("div")

let nameInp = document.createElement("input")
nameInp.placeholder = "Введите имя"
nameInp.type = "text"

let yearInp = document.createElement("input")
yearInp.placeholder = "Введите  год рождения"
yearInp.type = "number"

let addBtn = document.createElement("button")
addBtn.textContent = "Добавить пользователя"

let listUsers = document.createElement("ul")

function getAge(year){
    return yearThis - year
}

function createNewUserItem(index, userName, userYear){
    let itemLi = document.createElement("li")
    itemLi.textContent = `${index}) ${userName}, год рождения: ${userYear}, возраст ${getAge(userYear)}`
    return itemLi
}

addBtn.onclick = function(){
    counter++
    let userName = nameInp.value
    let userYear = Number(yearInp.value)
    let newItem = createNewUserItem(counter, userName, userYear)
    nameInp.value = ""
    yearInp.value = ""
    listUsers.append(newItem)
}


divElements.append(nameInp, yearInp, addBtn)
document.body.append(divElements)
document.body.append(listUsers)