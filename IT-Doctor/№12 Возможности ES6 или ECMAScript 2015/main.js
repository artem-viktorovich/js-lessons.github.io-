// function sum(a+b) {
//     return a+b
// }
// let date = [4,8];
// sum(...date)

// let sum = (a,b,c) =>{
//     return a+b+c
// }
// undefined
// sum(5,2,3)
// 10

// function Person(){
//     this.age = 0;
//     setInterval(function grow(){
//         this.age++; -
//         console.log(this.age);
//     }, 1000);
// }
// var p = new Person();

// function Person(){
//     this.age = 0;
//     setInterval(() =>{
//         this.age++; -
//         console.log(this.age);
//     }, 1000);
// }
// var p = new Person();

// let a = "NaN";
// let b = NaN;
// let c = "hello";
// let d = 12;
// console.log(Number.isNaN(a));
// console.log(Number.isNaN(b));
// console.log(Number.isNaN(c));
// console.log(Number.isNaN(d));

// console.log(Math.sinh(0));
// console.log(Math.cosh(0));
// console.log(Math.tanh(0));
// console.log(Math.asinh(0));
// console.log(Math.acosh(1));
// console.log(Math.atanh(0));
// console.log(Math.hypot(2,2,1));

// console.log(Math.log2(16));
// console.log(Math.log10(1000));
// console.log(Math.log1p(0));
// console.log(Math.expm1(0));
// console.log(Math.cbrt(8));

// console.log(Math.sign(16));
// console.log(Math.sign(-16));
// console.log(Math.sign(0));

// let a = 'Str'.repeat(3);

// let arr = [5,6,7,8]
// arr.fill(0)
// console.log(arr);

// let arr = ['a', 'b', 'c']
// let entries = arr.entries()
// let keys = arr.keys()
// let values = arr.values()

// console.log(...entries);
// console.log(...keys);
// console.log(...values);


// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(1);
// console.log(set);
// console.log(set.has("4"));
// console.log(set.size);
// set.delete(2);
// console.log(set);
// set.clear()
// console.log(set);

let arr = [4,5,6,7,89,5,3,2,1,1];
let arr2 = [...new Set(arr)];

console.log(arr);
console.log(arr2);