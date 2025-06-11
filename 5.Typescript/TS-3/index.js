"use strict";
const obj2 = {
    // partial make all properties optional
    name: "Mohit",
    balance: 2345,
};
const obj3 = {
    // Required make all properties mandatory
    name: "sunny",
    age: 34,
    balance: 21123,
};
const obj4 = {
    // Readonly can't write or change value
    name: "sunny",
    age: 34,
    balance: 21123,
};
const arr = [
    { name: "rohit", age: 20 },
    { name: "sunny", age: 24 },
    { name: "anmol", age: 24 },
];
const arr1 = [
    { name: "rohit", age: 20 },
    { name: "mohit", age: 18 },
    { salary: 123908, id: "1234" },
];
// ********************** Function in Typescript ******************************
function greet(a) {
    console.log(a);
    return a + 10;
}
greet(45);
function meet(name, val) {
    console.log(`meeting with ${name} at ${val} o'clock`);
}
meet("Anshika verma", 4);
function neet(msg = "Hello") {
    console.log(msg);
}
neet();
neet("You have to go on a mission");
// optional parameter
function UPSC(person) {
    console.log(person || "rohan");
}
UPSC();
// arrow function
const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 6));
// callback function
function placeOrder(order, callback) {
    const amount = order + 10;
    callback(amount);
}
placeOrder(10, (amount) => {
    console.log(amount);
});
// rest parameter
function total(...arr) {
    let ans = 0;
    arr.forEach((val) => (ans = ans + val));
    console.log(ans);
}
total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
