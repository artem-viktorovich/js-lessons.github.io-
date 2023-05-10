
// class User {
//     constructor(name, age, admin=false) {
//         this.name = name;
//         this.age = age;
//         this.admin = admin;
//     }
//     myInfo () {
//         console.log("Меня зовут " + this.name + ", мой возраст " + this.age + " ");
//         if(this.admin == true){
//             console.log('Я админ');
//         }
//     }
// }

// class Moderator extends User {
//     constructor(name, age, admin=false, moder=true) {
//         super(name, age, admin=false)
//         this.moder = moder;
//     }
//     static addPost(){
//         console.log('New Post');
//     }
//     myInfo () {
//         super.myInfo();
//         console.log('Я модератор');
//     }
// }

// let u1 = new User("rere", 21)
// let u2 = new User("efef", 22, true)
// let md = new Moderator ("egegeg", 22)

class People{
    /**
     * 
     * @param {String} fio по формату "Фамилия Имя Отчество"
     * @param {String} birthday день рождения по формату "24.11.1996"
     * @param {String} numbers "номер", если больше 2 номеров, то по формату "номер1, номер2"
     * @param {Number} room комната
     */
    constructor(fio, birthday,numbers,room){
        let name = fio.toLowerCase().split(" ");
        this.name = {};
        this.name.f = name[0][0].toUpperCase() + name[0].slice(1)
        this.name.i = name[1][0].toUpperCase() + name[1].slice(1)
        this.name.o = name[2][0].toUpperCase() + name[2].slice(1)

        let date = birthday.split(".");
        this.date = {};
        this.date.d = +date[0]
        this.date.m = +date[1]
        this.date.y = +date[2]

        this.numbers = numbers.split(", ")

        this.room = +room;


    }
    static month = ["января", "февраля", "марта", "апрела", "мая", "июня", "июля", "августа", "сентября", "октября", 
                            "ноября", "декабря"];


         /** Вывести ФИО
         * @return {String} Строка формата "Фамилия Имя Отчество"
         */
         getFio() {
            return `${this.name.f} ${this.name.i} ${this.name.o}`
         }

         /**
          * Вывести день рождения
          * @return {String} Строка формата "24 июл 1994"
          */
         getBirthday() {
            return `${this.date.d} ${People.month[this.date.m-1]} ${this.date.y}`
         }
}

let people1 = new People ("ВоаррО ИСматл ГАсаныч", "24.09.2023", "444, 444, 586", 456)
let people2 = new People ("Амбасадо Кукусь ГАсаныч", "27.12.2023", "444, 586", 456)
console.log(people1.getFio());
console.log(people2.getFio());