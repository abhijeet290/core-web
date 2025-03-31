// basic types
// Primitive types (number, string, boolean)

let a = 12.657;

let arr = [1, 2, 3, "harsh", true];

let num: number;

let nam: string = "Abhijit";
let age: number = 26;
let isDeveloper: boolean = true;

// Reference Types (Stored in heap memory)

let person: { name: string; age: number } = { name: "Abhijit", age: 26 };
function greet(name: string): string {
  return "Hello, " + name;
}

// Arrays
// Used to store multiple values of the same type.
let names: string[] = ["Alice", "Bob"];

// Tuples
// Fixed-length arrays where each element has a specific type.
let user: [string, number] = ["Abhijit", 26];

// Enums
// Used to define a set of named constants.

enum Role {
  Admin, // 0
  User, // 1
  Guest, // 2
}
let myRole: Role = Role.Admin;
console.log(myRole); // Output: 0
// Enums can also have custom values

enum Status {
  Success = 200,
  NotFound = 404,
  Error = 500,
}
console.log(Status.NotFound); // Output: 404

// Special Types
// These types handle unknown, missing, or non-returnable values.

// any → Disables type checking

let value: any = "Can be anything!";
value = 42; // No error
// unknown → Safer alternative to any, needs type checking before usage

let data: unknown;
data = "Hello";
if (typeof data === "string") {
  console.log(data.toUpperCase());
}
// void → Function that does not return a value

function logMessage(): void {
  console.log("This function returns nothing!");
}
// null & undefined → Represent empty or uninitialized values

let emptyValue: null = null;
let unassigned: undefined = undefined;
// never → Function that never returns (e.g., infinite loops or errors)

function throwError(message: string): never {
  throw new Error(message);
}

// Interface and type aliases
// Defining Interfaces

interface User {
  name: string;
  email: string;
  password: string;
  gender?: string;
}

function intro(obj: User) {
  console.log(
    `Hello ${obj.name}, your email is ${obj.email} ${obj.gender? `and you are ${obj.gender}`:''} `
  );
}


let ob = { name: "Abhi", email: "abc@example.com", password: "12345" };
let ob1 = { name: "Abhijeet", email: "abc1@example.com", password: "12345",gender:"male" };
intro(ob);
intro(ob1);

interface Admin extends User{
    admin:boolean
}

function admin(obj:Admin){
    console.log(obj.admin)
}

// Classes and objects

class Device{
    name='phone';
    price=11999;
    category='digital'
}
let d1=new Device()
let d2=new Device()

class BottleMaker{
    constructor(public name:string, public price:number){}
}
let b1=new BottleMaker('railneer',20)