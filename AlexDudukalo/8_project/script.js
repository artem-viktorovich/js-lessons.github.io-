// let age = Number(prompt("Введите возраст"))
// document.write(`Возраст пользователя: ${age} </br>`)

// if  - выполняет блок кода, если условие выполняется

// if (age === 28) {
//     document.write(`Пользователю 28 лет`)
// } else {
//     document.write(`Пользователь не определён`)
// }

// if (age >= 6){
//     if(age <= 18){
//         document.write('Пользователь школьник')
//     } else{
//         document.write('Пользователь студент')
//     }
// }

//cделаем рефакторинг 

// if (age >= 6 && age <= 18){
//     document.write('Пользователь школьник')
// } else{
//     document.write(`Пользователь студент`)

// }

// && - оператор и

// || - оператор или

// let age = Number(prompt("Введите возраст"))
// let height = Number(prompt("Введите рост"))
// document.write(`Возраст пользователя: ${age} </br>`)
// document.write(`Рост пользователя: ${height} </br>`)

// || - оператор или

// if (age >= 16 || height >= 180){                                            
//     document.write(`Пользователь проходит отбор`)
// }else{
//     document.write(`Пользователь не проходит отбор`)
// }


// Работа со списком студентов


//получить возраст
function getAge(year) {
    let result = 2023 - year
    if (result >= 18) {
        return `${result} (совершеннолетний)`
    }


    return result
}


//создать элемент студента
function getStudentli(index, name, year, heigth) {
    let li = document.createElement('li') //создали лишку
    let textSpan = document.createElement('span') //создали спан
    textSpan.textContent = `${index++}) ${name}, год рождения: ${year}. рост студента: ${heigth}, возраст: ${getAge(year)}`//добавили текст в спан
    let removeBtn = document.createElement("button")
    removeBtn.textContent = "Удалить"
    removeBtn.onclick = function () {
        li.remove()
    }
    let checkHeight = document.createElement("button")
    checkHeight.textContent = "Проверить"
    checkHeight.onclick = function () {  //проверка студента на заданный критерий
        if (year >= 2001 && heigth >= 175) {
            textSpan.textContent = `${textSpan.textContent} (отбор пройден)`
        }
    }
    li.append(textSpan, checkHeight, removeBtn) //добавили элемент в лишку
    return li
}

//получить ul
function getStudentListUl() {
    let ul = document.createElement('ul')
    return ul
}
let studentListUl = getStudentListUl()

//получить блоск инпутов
function getAddStudentBlock() {
    let counter = 0

    let box = document.createElement('div')

    let nameInp = document.createElement("input")
    nameInp.placeholder = "Имя"
    nameInp.type = "text"

    let yearInp = document.createElement("input")
    yearInp.placeholder = "Год рождения"
    yearInp.type = "number"

    let heightInp = document.createElement("input")
    heightInp.placeholder = "Рост"
    heightInp.type = "number"
    let addBtn = document.createElement("button")
    addBtn.textContent = "Добавить"
    addBtn.onclick = function () {
        counter++ //добавляется на клике кнопки
        let nameValue = nameInp.value
        let yearValue = Number(yearInp.value)
        let heightValue = Number(heightInp.value)

        let newStudent = getStudentli(counter, nameValue, yearValue, heightValue)
        studentListUl.append(newStudent)
        nameInp.value = ""
        yearInp.value = ""
        heightInp.value = ""
    }

    box.append(nameInp, yearInp, heightInp, addBtn)

    return box

}

let addStubentBlock = getAddStudentBlock()
document.body.append(addStubentBlock, studentListUl)




