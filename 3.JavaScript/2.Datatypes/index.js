// declaring the variable
let num = 10;
console.log(num);

// primitive datatypes

// We can store Number, String, Boolean, BigInt, Null, Undefined, Symbol in primitive data types

// Number
let account_balance = 100000;
console.log(account_balance);
console.log(typeof account_balance);

// String
let str = "Krishna";
console.log(str, typeof str);

let comment = "you are awesome";
console.log(comment);

// Boolean
let statement = false;
console.log(statement, typeof statement);

// undefined
let acc;
console.log(acc, typeof acc);

// Null
let balance = null;
console.log(balance, typeof balance);

// BigInt
let number = 9364874977599756897656n;
console.log(number, typeof number);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// non-primitive datatypes
// Arrays, Objects, Functions, Dates etc

// Array

let arr = [10, 20, 30, "name", "kirat", true];
console.log(arr, typeof arr);

// Object
let obj = {
  acc_name: "Akarsh",
  acc_num: "876975846",
  balance: 10000,
  ifsc_code: "SBIN000123",
};
console.log(obj, typeof obj);

let fun=function(){
    console.log('hello from function')
}
fun()
console.log(typeof fun)

// type conversion
 let bal="10"
 let n=Number(bal)
 console.log(n,typeof n)

 let s='123jg'
 console.log(Number(s))

 
// Boolean convert to number
// let x = false;
// console.log(Number(x));

// let account = "100xs";
// let bal = "200s"
// console.log(Number(account));
// console.log(Number(bal));

// null

let x1 = null;
console.log(Number(x1));

// undefined
let x2;
console.log(Number(x2));

// String ke andar convert
// let ab = 20;
// console.log(String(ab));

// let ax = false;
// console.log(typeof false)

// console.log(String(ax));

// Boolean
// let abc = " ";
// console.log(Boolean(abc));

// console.log((((6*(3+18))/6)-9));
// 18+3-9
// Divide Multiply Left to Right
// Add sub Left to right

// Modulous give reminder
// console.log(20%3); 

// ++ increment operator , -- decrement operator
// let sum = 20;
// --sum
// sum++ post increment , sum-- post decrement
// ++sum pre increment , --sum. pre decrement
// let total = ++sum;
// console.log(total);
// console.log(sum);



// Assignment operator

let x = 20;
x+=10;
// x = x+10;
// console.log(x);
// x = x-10;
// x/=10;
// console.log(x);