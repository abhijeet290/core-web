'use strict'
let a = 10; // part of global scope but not global object
var c=30

console.log(this);
console.log(this === window); // in global
console.log(this.a);
console.log(this.c)

// inside function
function greet(){
    console.log(this) // refers to window in non-strict mode and undefined in strict mode
}
greet() 