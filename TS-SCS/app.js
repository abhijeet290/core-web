"use strict";
// basic types
// Primitive types (number, string, boolean)
let a = 12.657;
let arr = [1, 2, 3, "harsh", true];
let num;
let nam = "Abhijit";
let age = 26;
let isDeveloper = true;
// Reference Types (Stored in heap memory)
let person = { name: "Abhijit", age: 26 };
function greet(name) {
    return "Hello, " + name;
}
// Arrays
// Used to store multiple values of the same type.
let names = ["Alice", "Bob"];
// Tuples
// Fixed-length arrays where each element has a specific type.
let user = ["Abhijit", 26];
// Enums
// Used to define a set of named constants.
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let myRole = Role.Admin;
console.log(myRole); // Output: 0
// Enums can also have custom values
var Status;
(function (Status) {
    Status[Status["Success"] = 200] = "Success";
    Status[Status["NotFound"] = 404] = "NotFound";
    Status[Status["Error"] = 500] = "Error";
})(Status || (Status = {}));
console.log(Status.NotFound); // Output: 404
// Special Types
// These types handle unknown, missing, or non-returnable values.
// any → Disables type checking
let value = "Can be anything!";
value = 42; // No error
// unknown → Safer alternative to any, needs type checking before usage
let data;
data = "Hello";
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
// void → Function that does not return a value
function logMessage() {
    console.log("This function returns nothing!");
}
// null & undefined → Represent empty or uninitialized values
let emptyValue = null;
let unassigned = undefined;
// never → Function that never returns (e.g., infinite loops or errors)
function throwError(message) {
    throw new Error(message);
}
function intro(obj) {
    console.log(`Hello ${obj.name}, your email is ${obj.email} ${obj.gender ? `and you are ${obj.gender}` : ''} `);
}
let ob = { name: "Abhi", email: "abc@example.com", password: "12345" };
let ob1 = { name: "Abhijeet", email: "abc1@example.com", password: "12345", gender: "male" };
intro(ob);
intro(ob1);
function admin(obj) {
    console.log(obj.admin);
}
// Classes and objects
class Device {
    constructor() {
        this.name = 'phone';
        this.price = 11999;
        this.category = 'digital';
    }
}
let d1 = new Device();
let d2 = new Device();
class BottleMaker {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new BottleMaker('railneer', 20);
class BottleMaker1 {
    constructor(name) {
        this.name = name;
    }
}
let bottle1 = new BottleMaker1('Miton');
bottle1.name = 'cello';
// functions in typescript
function login() {
    console.log('logged in successfully');
}
function abcd() {
    return `this function return a string`;
}
function abd(name, cb) {
    cb('hey');
    console.log(name);
}
abd('harsh', (value) => {
    console.log(value);
});
