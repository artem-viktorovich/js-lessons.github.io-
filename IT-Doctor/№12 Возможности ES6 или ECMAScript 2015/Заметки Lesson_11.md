=========================================
Данная связка является прототипом друг другу
В объекте user есть прототип родительского объекта admin
let admin = {
    ryles: 777
}

let user = {
    name: "Ivan",
    age: 20,
    __proto__: admin
}
=========================================
user.toString()
'[object Object]'
обращение и связь с объектом остаются и позволяют работать с ним

Принцип наследовани работает снизу вверх и позволяет взаимодействовать между ними

=========================================
Объекты по типу user можно сделать разными и в достаточно разном количестве

Создаём конструктор, который будет генерировать и передавать параметры объекта
function User(name,age){
    this.name = name;
    this.age = age;
}
Создаём переменную и прописываем параметры

let u1 = new User("rere", 21)

u1 - после вызова переменной, получаем наш объект
User 
    {name: 'rere', age: 21}
    age: 21
    name: "rere"
    [[Prototype]]: Object
=========================================
Сделаем связку с admin и дадим ему метод
Метод это функция внутри объекта, которая помогает взаимодействовать с его свойствами

let admin = {
    rules: 777,
    isAdmin(){
        console.log('я админ, мои права'+this.rules);
    }
}

function User(name,age){
    this.name = name;
    this.age = age;
    this.__proto__ = admin;
}

let u1 = new User("rere", 21)
let u2 = new User("efef", 22)

После вызова, получим объект
Теперь можем обращаться через методы isAdmin

u1

	1.  User {name: 'rere', age: 21}
	
	1.  age: 21
	2.  name: "rere"
	3.  [[Prototype]]: Object
	
	1.  isAdmin: ƒ isAdmin()
	2.  rules: 777
	3.  [[Prototype]]: Object
=========================================
let admin = {
    rules: 777,
    isAdmin(){
        console.log("я админ "+this.name+" мои права"+this.rules); - вставив имя с User команда будет полноценно работать
    }
}
 
function User(name,age){
    this.name = name;
    this.age = age;
    this.__proto__ = admin;
}
let u1 = new User("rere", 21)
let u2 = new User("efef", 22)

u1.isAdmin()
	я админ rere мои права777
	
Также со вторым объектом
u2.isAdmin()
	я админ efef мои права777 (имена меняются)
=========================================
let admin = {
    rules: 777,
    isAdmin(){
        console.log("я админ "+this.name+" мои права"+this.rules);
    }
}

  function User(name,age){
    this.name = name;
    this.age = age;
    this.myInfo = function(){ - для объекта нужно прописывать метод через this
        console.log("Меня зовут "+this.name+", мне "+this.age+" лет");
   }
    this.__proto__ = admin;
}

u1.myInfo()
	Меня зовут rere, мне 21 лет
=========================================
_Классы_
Классы, это щаблон кода, который позволяет легко создавать объекты, примеру также как с помозью конструктора.

У класса есть свой конструктор, который является метордом и выполняет туже работу, что и функция

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    myInfo () {
        console.log("Меня зовут " + this.name + ", мне " + this.age + " лет");
    };
}
При вызове метода, конструкция работает также, как в предыдущем примере

u1.myInfo()
	Меня зовут rere, мне 21 лет

=========================================
Для указания отдельного свойства, не нужно писать this,  достаточно указать его название

class User {
    admin = true; - пример
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    myInfo () {
        console.log("Меня зовут " + this.name + ", мне " + this.age + " лет");
    };
}

  
let u1 = new User("rere", 21)
let u2 = new User("efef", 22)

И теперь все объекты также выводится в консоли ввиде свойств

=========================================
class User {
    constructor(name, age, admin=false) {
        this.name = name;
        this.age = age;
        this.admin = admin;
    }
    myInfo () {
        console.log("Меня зовут " + this.name + ", мне " + this.age + " лет");
    };
}
  
При такой конструкции, admin всегда false

User {name: 'rere', age: 21, admin: false}

Но если в вызове переменной указать true,то выводится 

__User {admin: true, name: 'efef', age: 22}__


=========================================
Более функциональный блок

class User {
    constructor(name, age, admin=false) {
        this.name = name;
        this.age = age;
        this.admin = admin;
    }
    myInfo () {
        console.log("Меня зовут " + this.name + ", мой возраст " + this.age + " ");
        if(this.admin == true){
            console.log('Я админ');
        }
    };
}

Результат:
  u2.myInfo()
		Меня зовут efef, мой возраст 22 
		 Я админ
=========================================

С помощью extends можем сделать связь с родительским классом, тем самым получить доступ к его данным и создавать свои 

class User {
    constructor(name, age, admin=false) {
        this.name = name;
        this.age = age;
        this.admin = admin;
    }

    myInfo () {
        console.log("Меня зовут " + this.name + ", мой возраст " + this.age + " ");
        if(this.admin == true){
            console.log('Я админ');
        }
    };
}

class Moderator extends User {
    addPost(){
        console.log('New Post');
    }
}

=========================================
Переопределим конструктор



class User {
    constructor(name, age, admin=false) {
        this.name = name;
        this.age = age;
        this.admin = admin;
    }
    myInfo () {
        console.log("Меня зовут " + this.name + ", мой возраст " + this.age + " ");
        if(this.admin == true){
            console.log('Я админ');
        }
    }
}

  class Moderator extends User {
    constructor(name, age, admin=false, moder=true) {
        super(name, age, admin=false)  - с помощью метода делаем связь с методами родительского метода
        this.moder = moder; - прописываем новый метод
    }
    addPost(){
        console.log('New Post');
    }
    myInfo () {
        super.myInfo();
        console.log('Я модератор');
    }
}


  let md = new Moderator ("egegeg", 22) - true уберём, дабы видеть, что это блок модератора

md
Moderator {name: 'egegeg', age: 22, admin: false, moder: true}

=========================================
static - статические методы

  static addPost(){
        console.log('New Post');
    }
    С помощью статического метода можно сделать обращение к конкретному элементу внутри конструктора не влияя на связь с родительским. Но для самого объекта это свойство не доступно
=========================================
<h1 style="color:red">Практика</h1>

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
       this.name.f = name[0][0].toUpperCase() + name[0].splite(1) - преобразование в нижный регистр, и перевод первого индекса в верхний и добавление остальной части в индекс
        this.name.i = name[1][0].toUpperCase() + name[1].splite(1)
        this.name.o = name[2][0].toUpperCase() + name[2].splite(1)

          let date = birthday.split(".");
        this.date = {};
        this.date.d = +date[0]
        this.date.m = +date[1]
        this.date.y = +date[2]

        this.numbers = numbers.split(", ")
          this.room = +room
    }
}

  let people1 = new People ("ВоаррО ИСматл ГАсаныч", "24.24.2222", "444, 444, 586", 456)
  
=========================================
=========================================
=========================================
=========================================