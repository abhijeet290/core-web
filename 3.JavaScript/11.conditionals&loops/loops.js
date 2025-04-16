// for loop

// for (let i = 1; i <= 10; i++) {
//  console.log(i)

// }

// global scope
// let globalVar = "I am global";

// function test() {
//     console.log(globalVar); // accessible
// }

// test();
// console.log(globalVar); // accessible

// local scope / functional scope
// function greet() {
//     let message = "Hello!";
//     console.log(message); // accessible here
//   }

//   greet();
// console.log(message); // Error: message is not defined

//   block scope
// {
//     let a = 10;
//     const b = 20;
//     console.log(a, b); // accessible inside block
//   }
// console.log(a, b); // Error: a, b not defined outside block

// scope chain(lexical scope)
// let x = 10;

// function outer() {
//   let y = 20;
//   function inner() {
//     console.log(x, y); // Can access both x (global) and y (outer function)
//   }
//   inner();
// }

// outer();

// let amount = 30;

// if (true) {
//   let amount = 20;
//   console.log(amount);
// }

/****************************** While loops **********************************/

// let i = 1;
// while (i <= 20) {
//   console.log(`iteration no. ${i}`);
//   i++;
// }

/****************************** Do while loops **********************************/

// let j = 1;
// do {
//   console.log(`iteration no. ${j}`);
//   j++;
// } while (j <= 20);

// const obj = {
//     name: "akarsh",
//     age: 18,
//     gender: "male",
//     hobby: "coding",
//     address: "delhi",
//     job: "developer",
//   };
//   console.log(Object.keys(obj));
//   console.log(Object.values(obj));
//   const keys = Object.keys(obj);
//   for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i]);
//   }
  // for(let key in obj){
  //   console.log(key)
  // }
  