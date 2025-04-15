const obj={a:1,b:2,c:3}
// console.log(obj.__proto__)

let user1={
    name:'rohan',
    age:32
}

let user2={
    role:'developepr',
    stack:'mern',
    salary:45000
}

user1.__proto__=user2 // now user1 can access all the properties of user2
console.log(user1.salary)
console.log(user1.role)
console.log(user1.stack)


let arr=[12,54,62,34]
console.log(arr.__proto__ == Array.prototype)
console.log(arr.__proto__.__proto__ == Object.prototype)
console.log(arr.__proto__.__proto__.__proto__ == null)

// const arr=[22,54,73,45]
// undefined
// arr
// Array(4) [ 22, 54, 73, 45 ]

// arr.__proto__
// Array []

// const obj={a:1,b:2,c:3}
// console.log(obj.__proto__)
// Object { … }
// arr.__proto__
// Array []

// Array.prototype
// Array []

// arr.__proto__.__proto__
// Object { … }

// Array.prototype.prototype
// undefined
// Array.prototype.__proto__
// Object { … }

// Array.prototype.__proto__.__proto__
// null 