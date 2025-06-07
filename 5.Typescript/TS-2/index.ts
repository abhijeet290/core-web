// non Primitive

let arr: number[] = [29, 65, 76, 845, 34];
// let arr1=[29,65,76,845,34]
let arr3: (number | string)[] = ["rohan", 45, 23, "prince"];
let arr4: (number | string | boolean)[] = [
  "rohan",
  45,
  23,
  "prince",
  true,
  false,
];

// tuples: it is array of fix number of elements of specific types
let tuple: [string, number] = ["Rohit", 45];

// objects in ts
let obj1: { name: string; age: number; gender: string } = {
  name: "rohan",
  age: 23,
  gender: "male",
};

let person: { name: string; age: number; balance: number };

person = {
  name: "ajay",
  balance: 345,
  age: 24,
};

type customer = {
  name: string;
  age: number;
  id: string;
};

let customer1: customer = {
  name: "anmol",
  age: 24,
  id: "3432",
};

interface admin {
  name: string;
  age: number;
  position: string;
}

interface admin {
  id: string;
}
let admin1: admin = {
  name: "sunny",
  age: 24,
  position: "DBA",
  id: "2342",
};
