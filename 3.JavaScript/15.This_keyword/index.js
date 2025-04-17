// console.log(this)

// global object: Object
// chrome browser : window , we can use it's properties directly don't need to write window.Math.random(), even the variable which we declare become part of global object

// nodejs:global
// as the name of the global objectis different in different environment, it become confusing thats why they introduced a common keyword which represents the global object in all the environment, ant that keyword is globalThis

// console.log(`Hello this`);
// console.log(Math.random());
// setInterval()
// new Object()
// new String('Sunny')

// let obj = {
//   name: "sunny",
//   age: 12,
// };
// console.log(globalThis)
// console.log(global.Math.random())

// The this keyword in JavaScript is a special keyword that refers to 
// the context in which the current code is being executed. 
// Its value depends on how the function where this is used is called.

// 1: Global Context (Outside Any Function)
// In browsers: window 
// In Node.js: Module's exports object 

// console.log(this);

// ****************************************************************

// 2:Inside a Function 
// i: (Non-Strict Mode)
// When this is used inside a regular function, it refers to the global object.
// ii: Strict Mode
// this will be undefined inside a function.


// function greet(){
//     console.log(this);
// }

// greet();
// window.greet();

// ****************************************************************

// 3: Inside a Method (Object Context)
// When this is used inside an object’s method, it refers to the object that owns the method.

// const obj ={
//     name:"Rohit",
//     age:20,
//     meet: function(){
//         console.log(this.name);
//     }
// }

// obj.meet();

// ****************************************************************

// Arrow functions don’t have their own this. 
// Instead, they inherit this from the surrounding (lexical) scope.

// let obj = {
//     name:"rohit",
//     age:11,
//     greet: ()=>{
//         console.log(this);
//     }
// }

// obj.greet();


// let obj = {
//     name:"rohit",
//     age:11,
//     greet: function(){
        
//         let ab = ()=>{
//             console.log(this);
//         };

//         ab();
//    }
// }

// obj.greet();

// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }



// let a = new Person("Rohit", 20);
// console.log(a);



// let greet = ()=>{
//     console.log(this);
// }

// greet();

"use strict"

let meet = function(){
    console.log(this);
}

meet();




