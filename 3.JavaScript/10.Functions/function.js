// functions in javascript

console.log(`Hello from function`);

// function greet(){
//     console.log(`Hello from function1`)
//     console.log(`Hello from function2`)
//     console.log(`Hello from function3`)
// }

// greet()

// function to add 2 number
// function add(n1,n2){   // parameter
//     console.log(n1+n2)
// }
// add(45,12) // arguments
// add(34,65)

// multiply function

// function multiply(n1,n2){
//     return n1*n2
// }
// console.log(multiply(43,45))

// const fun=function(){
//     console.log(`Hello from function expression`)
//     return 1
// }

// let ret=fun()
// console.log(ret)

// Arrow function

// const arrFn = (n, m) => {
//   return n * m;
// };
// console.log(arrFn(5, 6));

// const sum = (a, b) => a + b;

// console.log(sum(43, 76));

// const cube = (num) => num ** 3;
// console.log(cube(5))

// const sum = function (...arg) {
//   let total = 0;
//   for (let i = 0; i < arg.length; i++) {
//     total += arg[i];
//   }
//   return total;
// };
// console.log(sum(1, 2, 3, 4, 5));

let obj = {
  name: "raman",
  age: 23,
  balance: 3748,
};

// function fun(obj){
//     console.log(obj.name,obj.age)
// }
// to check pass by value or pass by reference
// function fun({name,balance}){ // pass by value as destructuring create local instance of name
//     console.log(name,balance)
//     name='mohan'
// }

function fun(obj){
    obj.name='Mohan' // pass by reference
}
fun(obj)
console.log(obj)

console.log(fun.prototype.__proto__.__proto__)
console.log(String.prototype.__proto__.__proto__)
console.log(String.prototype.__proto__)