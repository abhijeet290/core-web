// for of loop

// const arr=[32,65,74,74,89]
// for(let val of arr){
//     console.log(val)
// }

// let str='hello from advance loops'
// for(let char of str){
//     console.log(char)
// }

//  never use for of loop with objects as objects are not iterable( means we can't go one by one or symbol.iterable is not defined for object)
// const obj = { name: "sunny", age: 20 };
// for(let val of obj){
//     console.log(val)
// }
// for(let val of Object.values(obj) ){ // we give an array of keys to iterate
//     console.log(val)
// }

// callback function
// function main(cb) {
//   console.log(`I am main function`);
//   cb();
// }

// function callback() {
//   console.log(`I am callback function`);
// }
// main(callback);

// real world usecase
// function fetchData() {
//   console.log(`This function is fetching data from backend`);
// }
// setInterval(() => {
//   fetchData();
// }, 1000);
// forEach loop: used to iterate over each element of an array
// arr = [23, 54, 67, 56, 12];
// arr.forEach((Element, index,array)=>console.log(Element,index,array))

// arr.forEach(function(num){
//     num*3
// })

// arr.forEach((n,i,ar) => {ar[i]=n+2});
// console.log(arr)

// filter
// arr = [23, 54, 67, 56, 12];
// let even = arr.filter((n) => n % 2 == 0);
// console.log(even);

const students = [
  { name: "Rohan", age: 21, rollNo: "A101", marks: 89, city: "Delhi" },
  { name: "Priya", age: 22, rollNo: "A102", marks: 75, city: "Mumbai" },
  { name: "Aman", age: 20, rollNo: "A103", marks: 95, city: "Bangalore" },
  { name: "Sneha", age: 23, rollNo: "A104", marks: 88, city: "Kolkata" },
  { name: "Vikas", age: 21, rollNo: "A105", marks: 60, city: "Chennai" },
];
// const passed = students.filter(({ marks }) => marks > 75);
// console.log(passed);

// map
arr = [23, 54, 67, 56, 12, 50, 22];
const result = arr.map((n, index) => n + index);
console.log(result);

const sq = arr.filter((num) => num % 2 == 0).map((n) => n * n);
console.log(sq);
