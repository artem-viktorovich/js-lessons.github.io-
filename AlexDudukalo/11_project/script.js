//Объект - способ хранения данных, позволяющий создавать группу параметров (свойств)

//let user1 = {
//ключ - название параметра ( свойства) объекта
//значение - содержимое, которое хранитя в параметре(в свойстве объекта)
//     name: "Таня",
//     year: 1998,
//     city: "Москва",
//     student: true
// }
// console.log(user1);


// let user2 = {
//     name: "Вася",
//     year: 2000,
//     city: "Воронеж",
//     student: false
// }
// console.log(user2);

// let usersArr = [
//0
//     {
//         name: "Таня",
//         year: 1998,
//         city: "Москва",
//         student: true
//     },
//1
//     {
//         name: "Вася",
//         year: 2000,
//         city: "Воронеж",
//         student: false
//     },
//2
//     {
//         name: "Артём",
//         year: 2000,
//         city: "Воронеж",
//         student: false
//     }
// ]

// for (let i = 0; i < usersArr.length; i++) {
//     document.write(`<p>
//     ${i + 1}) 
//     ${usersArr[i].name},
//     ${usersArr[i].year}, 
//     ${usersArr[i].city},
//     ${usersArr[i].student}
//     </p>`)
//данные пользователей хранятся в одном массиве
//}


// console.log(usersArr[1].name);

// usersArr.push(user1, user2)
// console.log(usersArr);

//массив хранения данных заметов

let notesArr = [
    {
        title: "Заметка 1",
        img: "https://w.forfun.com/fetch/e6/e6044cb0b978ce39ff76b57402ebd1de.jpeg",
        desc: "Река",
        done: false
    },
    {
        title: "Заметка 2",
        img: "https://w.forfun.com/fetch/94/94e2c09615bf9c615289fb4a5e8b94f5.jpeg",
        desc: "Тигра",
        done: true
    }
]


//функция создания кнопки
function getAddBtn(text) {
    let buttonAdd = document.createElement("button")
    buttonAdd.textContent = text
    buttonAdd.classList = "btn-add"

    return buttonAdd
}


//функция создания тела карточки
function getCard(card, index) {
    let cardElement = document.createElement("li")
    let cardImg = document.createElement("img")
    let cardTitle = document.createElement("h2")
    let cardDesc = document.createElement("p")
    let cardRemoveBtn = document.createElement("button")
    let cardImportantBtn = document.createElement("button")

    cardElement.classList.add("card")
    if(card.done === true){
        cardElement.classList.add("card_important")
    }
    cardImg.classList.add("card__img")
    cardTitle.classList.add("card__title")
    cardDesc.classList.add("card__desc")
    cardRemoveBtn.classList.add("card__remove")
    cardImportantBtn.classList.add("card__btn")

    cardTitle.textContent = card.title
    cardImg.src = card.img
    //src - путь, который берётся с объекта img
    cardDesc.textContent = card.desc

    //удаление карточки
    cardRemoveBtn.textContent = "Удалить"
    cardRemoveBtn.onclick = function () {
        notesArr.splice(index, 1)
        render(notesArr)
    }
    cardImportantBtn.textContent = "Важное"
    //состояние карточки
    cardImportantBtn.onclick = function () {
        if (cardElement.classList.contains('card_important') === false) {
            cardImportantBtn.textContent = "Не важное"
            cardElement.classList.add("card_important")
            card.done = true
        } else {
            cardImportantBtn.textContent = "Важное"
            cardElement.classList.remove("card_important")
            card.done = false
        }
        console.log(notesArr);
    }

    cardElement.append(cardImg, cardTitle, cardDesc, cardRemoveBtn, cardImportantBtn)

    return cardElement
}
//создаёт список и возвращает ul из функции
function getList() {
    let ul = document.createElement("ul")
    ul.classList.add("list")
    return ul
}

//вызвали список
let list = getList()

//вызвали кнопку
let addBtn = getAddBtn("Добавить заметку")

//обработчки нажатия кнопки и добавление информации
addBtn.onclick = function () {
    let titleValue = prompt("Введите название заметки")
    let imgValue = prompt("Введите путь к изображению")
    let descValue = prompt("Введите описание заметки")

    let newNoteObj = {
        title: titleValue,
        img: imgValue,
        desc: descValue,
        done: false
    }
    notesArr.push(newNoteObj)
    render(notesArr)

}

//обработчик массива
function render(arrNotes) {
    list.innerHTML = ""
    for (let i = 0; i < arrNotes.length; i++) {
        let newcard = getCard(arrNotes[i], i)
        list.append(newcard)
    }
}
render(notesArr)

document.body.append(addBtn, list)