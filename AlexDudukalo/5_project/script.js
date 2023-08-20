
document.write("<h1>Список студентов</h1>")
let index = 0;


function StudentParam(nameStudent, ageStudent, yearStudent, faculty) {
    index++
    document.write(`<p>${index}) <strong>
    имя студента:</strong> ${nameStudent}, <strong>
    возраст студента:</strong> ${ageStudent}, <strong>
    год рождения студента:</strong>${yearStudent}, <strong>
    факультет:</strong> ${faculty}</p>`)
}

StudentParam("Василий", 20, 1996, "Исторический")
StudentParam("Анастасия", 22, 1996, "Исторический")
StudentParam("Олег", 21, 1995, "Исторический")
StudentParam("Олексей", 12, 1996, "Исторический")





// let index = 0

// function hello(userName, age){
//     index++
//     console.log(index,userName, age);
// }

// hello("Artem", "17")
// hello("anton", "19")
// hello("Nasty", 23)
// hello("Oleg", "147")


//    это позволяет использовать одинаковые переменный, внутри изолированного блока
// {
//     let age = 17;
//     index++
//     console.log(index,userName, age);
// }

// {
//     let age = 19;
//     console.log(userName, age);

// }
