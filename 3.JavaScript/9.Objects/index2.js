// shallow copy

// let obj1={a:1,b:2}
// let obj2=obj1
// obj2.b=10
// console.log(obj1,obj2) // have same reference(share the same address)

// deep copy

// let obj3=structuredClone(obj1) // create a separate copy at another address
// obj3.b=11
// console.log(obj1,obj3)

// nested object

// const user = {
//   name: "anmol",
//   balance: 420,
//   address: {
//     pincode: 110099,
//     city: "delhi",
//   },
// };
// console.log(user.address.pincode)

// const user2=Object.assign({},user) // it create deep copy for keys at single level and for nested object it create shallow copy, same things happens with spread operator
// so it's best to use structuredClone to create copy(deep copy)

// user2.name='sunny'
// user2.address.city='patna'
// console.log(user,user2)

// destructuring of an object
// let obj = {
//   name: "jetray",
//   power: "electric shock",
//   age: 34,
//   fly:true,
//   id:4
// };
// const {name,power,age}=obj
// const {name:fullName,power,age}=obj // using aliases to rename keys

// console.log(fullName,age,power)

// const {name,age,...rest}=obj
// console.log(name,age,rest)

// Array destructuring

// const arr=[43,56,51,89,66]
// const [a,b]=arr
// console.log(a,b)

// const[a,b,...c]=arr
// console.log(a,b,c)

// let obj = {
//   name: "jetray",
//   power: "electric shock",
//   arr:[20,43,65,56],
//   age: 34,
//   fly:true,
//   id:4,
//   address:{
//     pin:23,
//     location:'omnitrix'
//   }
// };

// const {address:add}=obj
// console.log(obj)
// const{address:{location,pin}}=obj
// console.log(location,pin)

// const{arr:[fit]}=obj
// console.log(fit)

// let user = {
//   name: "dolly",
//   amount: 15000,
//   greet: () => {
//     console.log(`hello, Good morning`);
//   },
//   meet:()=>{
//     console.log(`meeting at 10am tomorrow`)
//   }
// };

// user.greet();
// user.meet();


let user = {
  name: "dolly",
  amount: 15000,
  greet: () => {
    console.log(`hello, Good morning`);
  },
  meet:()=>{
    console.log(`meeting at 10am tomorrow`)
  }
};

console.log(user.toString())