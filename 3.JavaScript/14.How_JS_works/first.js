greet();

function greet() {
  console.log(`Hello from hoisting`);
}
// memory allocation
// greet: function code
// code execution
// meet()
// memory allocation
// meet: nothing inside
// code execution , it cant access if called before initialization
meet() // in this case undefined is inside the function, which is not a function
var meet=function(){
    console.log(`function Expression`)
}
// let meet=function(){
//     console.log(`function Expression`)
// }

// meet() // in this case function will be inside this variable and executed in code phase
// global execution context
// execution context divided into 2 part memory allocation phase and code execution phase
// function gets called after that execution context gets created then memory and code gets executed
// all these tasks is performed in stack also called call stack in which every task is listed one after another and gets executes, once they finished they are removed from the stack