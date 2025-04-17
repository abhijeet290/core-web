// let obj={}

// obj.name='Harry'
// obj.age=23
// key value are, writable, enumerable, configurable

// console.log(Object.getOwnPropertyDescriptor(obj,'name'))
// writable = true, means we can change the value
// obj.name='rohan' // name change to rohan
// writable = false, means we can't change the value (this is done to prevent accidental changes not to prevent from hacking)
// obj.age=45 // can't change the age

// configurable: if true means we can even change the value of writable and enumerable by making it true ot false

// let obj = {};

// Object.defineProperty(obj, "name", {
//   value: "Rohan",
//   writable: true,
//   enumerable: true,
//   configurable: false,
// });
// Object.defineProperty(obj, "name", {
//   writable: false,
// });
// obj.name = "roman";
// console.log(obj);

// let obj={
//     name:'rohan',
//     age:34,
//     acc_number:12341
// }
// Object.defineProperty(obj,'acc_number',{
//     writable:false
// })
// obj.acc_number=43567 //can't be changed as writable is false
// console.log(obj)

// const customer={
//     name:'chandrashekhar',
//     age:23,
//     acc_no:7564836,
//     balance:5495
// }

//  name and account number can't be changed
// Object.defineProperty(customer,'name',{
//     writable:false
// })
// Object.defineProperty(customer,'acc_no',{
//     writable:false
// })
// customer.name='tommy'
// console.log(customer)

// enumerable

const customer = {
  name: "chandrashekhar",
  age: 23,
  acc_no: 7564836,
  balance: 5495,
};
// if enumerable is true then it will print the keys, it have access to all keys including inherited keu it it's enumerable is set to true then it have access with for in loop, if false it don't have the access
// Object.defineProperty(customer, "name", {
//   enumerable: false,
// });
// let customer2 = Object.create(customer);
// customer2.city = "delhi";
// customer2.plays = "badminton";
// for (let key in customer2) {
//   console.log(key);
// }

// console.log(Object.getOwnPropertyDescriptor(customer,'name'))
// console.log(Object.getOwnPropertyDescriptor(Object.prototype,'toString')) // enumerable set to false, so it can't be accessed or printed using for-in loop

// we don't use for-in loop in arrays

let arr = [43, 45, 67, 23, 98];
arr.name = "raman"; // array index can only ne numbes that's why we don't use for in loop with arrays, as in js arrays are also iplemented as object so we can add properties like this, as it haa access to all the keyb whose enumerable property is set to true and by default all keyy enumerable property is set to true
for (let key in arr) {
  console.log(key, arr[key]);
}

for (let i = 0; i < arr.length; i++) {
  // instead of for in loop use classic for loop in such cases
  console.log(i, arr[i]);
}

console.log(Object.getOwnPropertyDescriptor(Object.prototype, "toString"));
Object.defineProperty(Object.prototype, "toString", {
  enumerable: true,
});

for (let key in customer) {
  console.log(key);
}

// to define multiple properties: Object.defineProperties
// Object.defineProperties(obj, {
//     prop1: { descriptor1 },
//     prop2: { descriptor2 },
//     ...
//   })
  

let person = {};

Object.defineProperties(person, {
  name: {
    value: "Raman",
    writable: true
  },
  age: {
    value: 24,
    enumerable: true
  }
});

console.log(person.name); // Raman
console.log(person.age);  // 24