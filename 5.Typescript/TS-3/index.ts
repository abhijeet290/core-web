interface Person {
  name: string;
  age: number;
  gender: string;
  aadhar?: number;
}

// const obj1: Person = {
//   name: "Jenifer",
//   age: 51,
//   gender: "female",
//   aadhar: 867597876245,
// };

// latest example
interface customer {
  name: string;
  age: number;
  balance: number;
}

const obj2: Partial<customer> = {
  // partial make all properties optional
  name: "Mohit",
  balance: 2345,
};

const obj3: Required<customer> = {
  // Required make all properties mandatory
  name: "sunny",
  age: 34,
  balance: 21123,
};

const obj4: Readonly<customer> = {
  // Readonly can't write or change value
  name: "sunny",
  age: 34,
  balance: 21123,
};

// obj4.name='rohan' //can't do this as it is readonly, writing is not allowed

// array of objects

interface people {
  name: string;
  age: number;
}

const arr: people[] = [
  { name: "rohit", age: 20 },
  { name: "sunny", age: 24 },
  { name: "anmol", age: 24 },
];

// Array of objects

interface people {
  name: string;
  age: number;
}
interface manager {
  salary: number;
  id: string;
}

const arr1: (people | manager)[] = [
  { name: "rohit", age: 20 },
  { name: "mohit", age: 18 },
  { salary: 123908, id: "1234" },
];

// ********************** Function in Typescript ******************************

function greet(a: number): number {
  console.log(a);
  return a + 10;
}

greet(45);

function meet(name: string, val: number) {
  console.log(`meeting with ${name} at ${val} o'clock`);
}

meet("Anshika verma", 4);

function neet(msg: string = "Hello") {
  console.log(msg);
}
neet();
neet("You have to go on a mission");

// optional parameter

function UPSC(person?: string) {
  console.log(person || "rohan");
}
UPSC();

// arrow function

const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(5, 6));

// callback function

function placeOrder(order: number, callback: (amount: number) => void): void {
  const amount: number = order + 10;
  callback(amount);
}

placeOrder(10, (amount) => {
  console.log(amount);
});

// rest parameter

function total(...arr: number[]):void {
  let ans = 0;
  arr.forEach((val: number) => (ans = ans + val));
  console.log(ans);
}
total(1,2,3,4,5,6,7,8,9,10)