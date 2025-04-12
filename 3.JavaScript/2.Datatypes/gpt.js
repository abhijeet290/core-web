// Create a variable of each primitive type and log its value and typeof.
let num=10
console.log(num)
let str='hello'
console.log(str)
const bool=true
console.log(bool)
let bint=1275648364759374n
console.log(bint)
let a=undefined
console.log(a)
let b=null
console.log(b)

// Convert:

// "45" → number
console.log(Number('45'))
// false → number
console.log(Number(false))
// undefined → number
console.log(Number(undefined))
// Use pre and post increment and print step-by-step.
let sum=10
console.log(sum++)
console.log(++sum)

// Q1: What’s the difference between undefined and null?
// Answer:

// undefined: A variable declared but not assigned.

// null: A developer-assigned value that represents "nothing".

// Q2: What’s the output of typeof null?
// Answer:
// "object" (this is a bug in JavaScript, but kept for backward compatibility).

// Q3: What are truthy and falsy values?
// Answer:

// Falsy values: false, 0, "", null, undefined, NaN

// Everything else is truthy.

// Q4: What are primitive vs non-primitive types?
// Answer:

// Primitive: Immutable values (number, string, boolean, null, undefined, BigInt, symbol)

// Non-Primitive: Mutable, reference types (array, object, function)

// Q5: What’s the difference between == and ===?
// Answer:

// ==: Loose equality (does type conversion)

// ===: Strict equality (checks value and type)

// console.log(1 == '1');  // true
// console.log(1 === '1'); // false

// Q: Why does typeof null return "object"?
// A: It's a historical bug in JavaScript. null is a primitive, but due to how it's stored internally, typeof null returns "object". It’s recognized and won’t be fixed to avoid breaking existing code.