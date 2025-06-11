"use strict";
class Person {
    constructor(n1, n2) {
        this.name = n1;
        this.age = n2;
    }
    greet() {
        console.log(`Hello ${this.name}`);
    }
}
const obj1 = new Person("Abhi", 23);
const obj40 = new Person("Abhishek", 23);
console.log(obj1);
console.log(obj40);
const obj5 = {
    name: "anmol",
    age: 23,
    salary: 45987,
    id: "4345",
};
console.log(obj5);
obj1.greet();
// public private protected
class Customer {
    constructor(name, age, balance) {
        this.name = name;
        this.age = age;
        this.balance = balance;
    }
    meet() {
        console.log(this.age);
    }
}
const customer1 = new Customer("Deepak", 24, 23490);
console.log(customer1.name);
// console.log(customer1.age)
customer1.meet();
console.log(customer1.balance);
// public can be accessible from outside the class, private can only be accessed inside of the class same with protected.
class Employee extends Customer {
    constructor(salary, name, age, balance) {
        super(name, age, balance);
        this.salary = salary;
    }
}
let E1 = new Employee(10000, "Rohan", 24, 546012);
console.log(E1);
// protected is not accessible outside the class but it is accessible in child class
// Generic: Template
// function value(
//   a: number | string | boolean | number[]
// ): number | string | boolean | number[] {
//   return a;
// }
function value(a) {
    return a;
}
console.log(value(3637));
console.log(value("Hello"));
console.log(value(false));
console.log(value([23, 56, 76, 4, 3]));
const obj10 = {
    name: "rohan",
    age: 10,
    aadhar: 454656788787,
    salary: '156000'
};
const obj11 = {
    name: "rohan",
    age: 10,
    aadhar: '454656788787',
    salary: 156000
};
console.log(obj10, obj11);
