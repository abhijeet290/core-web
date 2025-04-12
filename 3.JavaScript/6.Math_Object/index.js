// let num=222
// let num2=new Number(222)
// let num3=new Number(222)
// console.log(num==num2) // both will be converted to number with equal values
// console.log(num2==num3) // both are reference addresses no need to convert

// let num=345.234
// console.log(num.toFixed(2)) // total digit after decimal
// console.log(num.toFixed(4))
// console.log(num.toPrecision(5)) // how many digit we want
// console.log(num.toExponential(2))
// console.log(typeof num.toString())

// Math

// console.log(Math.E)
// console.log(Math.LN10)
// console.log(Math.PI)
// console.log(Math.LOG10E)

console.log(Math.random() * 9); // genetater no between 0 to 1, 0<=value<1

// floot and ceil
let num = 54.4647;
console.log(Math.floor(num));
console.log(Math.ceil(num));

console.log(Math.floor(Math.random() * 10) + 1);

// min=40 max=50
// console.log(Math.floor(Math.random()*(max-min+1)+min))
console.log(Math.floor(Math.random()*11))