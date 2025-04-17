// reduce
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result=arr.reduce(callback function, initial value)

// const result = arr.reduce((acc, curr) => {
//   acc = acc + curr;
//   return acc;
// }, 0);
// const result=arr.reduce((acc,curr)=>acc+curr,0)
// console.log(result);

let fruitarr = [
  "apple",
  "orange",
  "orange",
  "banana",
  "banana",
  "banana",
  "grapes",
  "lichi",
  "lichi",
  "lichi",
  "apple",
  "apple",
];
// const res = fruitarr.reduce((acc, curr) => {
//   if (acc.hasOwnProperty(curr)) acc[curr]++;
//   else acc[curr] = 1;
//   return acc;
// }, {});

const res = fruitarr.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {apple:3});
console.log(res);
