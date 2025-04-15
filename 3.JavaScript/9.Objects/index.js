// Creating an object
// const obj={
//     name:'Aditi',
//     balance:20,
//     gender:'Female',
//     age:25,
//     'insta id':"insta@id", // in case of space we have to provide it as string and for accessing it we have to use [] notation
//     5:'number as key', // this key will be stored as string
//     undefined:undefined,
//     null:null
// }
// console.log(obj)

// key is stored as a string in backend
// console.log(typeof obj.name) // give the type of the value stored in the key
// console.log(typeof obj.age)

// in case of [] we have to give key as string,
// console.log(obj['insta id'])
// console.log(obj[5]) // no need to pass as string, although we can pass it as string

// console.log(obj.undefined) // as these are not variable names, these are stored as string, so it won't throw error
// console.log(obj['null']) // same case with null
// in javascript arrays is also implemented as object, where keys are indexes, starting from 0, and length is also stored in that object as a key value thats why we access length similar to accessing like indexes.

// another method to create Object using Object class
// const person=new Object()

// adding key value
// person.name='Mohan'
// person['age']=67
// person['gender']='Male'

// console.log(person)

// deleting
// delete person['age']

// modifying
// person.name='Mass'
// console.log(person)

// third method

// class People {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// const p1=new People('Rohan',30,'Male')
// const p2=new People('Ramesh',33,'Male')
// console.log(p1)
// console.log(p2)

// let obj1 = {
//   name: "sunny",
//   age:24,
//   balance: 48556476,
//   gender: "male",
// };

// const arrKey=Object.keys(obj1) // returns array of keys
// console.log(arrKey)
// const arrVal=Object.values(obj1) // returns array of values
// console.log(arrVal)

// const entries=Object.entries(obj1) // it return key value pair in form of array
// console.log(entries)

// assign use case
// const obj2={a:1,b:2}
// const obj3={c:3,d:4}

// const obj4=Object.assign({},obj2,obj3) // changes will be made inside the empty target object
// console.log(obj4,obj2)

// const obj5={...obj1,...obj2,...obj3}
// console.log(obj5)

// Practice Task Ideas (Optional)
// You can try these to solidify the concept:

// Write a function to convert an object into a query string (e.g. {name: "John", age: 30} → "name=John&age=30").
function toQueryString(obj) {
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}

// Example
const user = { name: "John", age: 30 };
console.log(toQueryString(user)); // "name=John&age=30"
// Explanation:
//   Object.entries() → gets key-value pairs.
//   encodeURIComponent() → handles special characters safely.
//   .join("&") → combines them into a query string.

// Count the number of properties in an object.
function countProperties(obj) {
  return Object.keys(obj).length;
}

// Example
const profile = { name: "Aditi", age: 25, gender: "Female" };
console.log(countProperties(profile)); // 3
// Explanation:
//   Object.keys(obj) returns all enumerable keys.
//   .length gives the total count.

// Write a deep comparison function to check if two objects have the same structure and values.

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  )
    return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Example
const a = { name: "Aditi", address: { city: "Delhi" } };
const b = { name: "Aditi", address: { city: "Delhi" } };
console.log(deepEqual(a, b)); // true
//   📝 Explanation:
//   Handles nested objects recursively.
//   Compares both keys and values deeply.
//   Returns true only if structure and content match.
