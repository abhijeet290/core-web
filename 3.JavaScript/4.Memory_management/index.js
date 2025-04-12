let a=10
let b=a
b=20
console.log(b)
console.log(a)

// Primitive data types vs non-primitive data types
// primitive data type: Immutable - can't be changed , when we change the value it will create a new variable with same name at a new address, this is done because in js type of variable is not defined a variable can store ant datatype, and each datatype takes different spaces, to manage those we need to adjust other variaables in stack memory that's why we store it at a new address
// non-primitive data type: mutable - can be changed, we store the address of non primitive data types in stack

// Object example
let obj1={
    id:1,
    name:'nagesh'
}
let obj2=obj1

// console.log(obj1)
// console.log(obj2)

obj2.id=3

console.log(obj1)
console.log(obj2)