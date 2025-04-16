let obj = {
  name: "Rishi",
  age: 34,
  balance: 40000,
  gender: "male",
  city: "patna",
};
//  for in loop: I can iterate over keys in an object

// for(let key in obj){
//     console.log(`${key}: ${obj[key]}`)
// }

let obj2 = Object.create(obj); // inherit properties from obj
obj2.money = 234;
obj2.id = 32;
console.log(obj, obj2); // don't print the inherited properties
console.log(obj2.name);

console.log(Object.keys(obj));
console.log(Object.keys(obj2)); // don't have access of inherited keys
for (let key in obj2) {
  console.log(key); // it have access of inherited keys too...
}

// whenever we create an object, it have access to Object.prototype functions

