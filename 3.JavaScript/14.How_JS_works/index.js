// "use strict";
// console.log(x);
// var x = 10;
// let y
// console.log(y)

// js creates an execution context which is divided into two phases 
// 1 - memory allocation
// 2 - code execution 

// during memory allocation phase undefined is assigned to var vut let and const are not assigned any value( temporal dead zone)

// temporal dead zone: memory is allocated to let and const variable but they'll be inside temporal dead zone till the value is initialized to them, we can't access variable when they are inside tdz.

// Hoisting : it is a concept to make developer understand not the actual implementation 
// every functions declaration and variable declaration are hoisted in js but in case of var it assigns undefined, but let and const variables are nor assigned any value and we can't access it before initialization