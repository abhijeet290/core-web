// Arrays in Javascript

const arr = [3, 45, 23, 78, 21, 54, 21, 73, 89, true, "hello"];
// console.log(arr[3])

// console.log(arr[-3]) // can't take negative index

// console.log(arr.at(3)) // at is latest it can take negative index too

// console.log(arr.at(-3))
// console.log(arr.length)

// const newArr=arr // both have the same reference
// console.log(arr==newArr)

// structuredclone: to create clone with different reference store at different memory address.
// const newar=structuredClone(arr)
// newar.push(5)
// console.log(arr,newar)

// push: to add something at the end, returns the new length of array
// console.log(arr.push(15))
// console.log(arr)
// pop: removes the last element and returns the popped element.
// console.log(arr.pop())
// console.log(arr)
// shift: to remove something from the beginning, returns the removed element
// console.log(arr.shift())
// console.log(arr)
// unshift: adds element at the beginning and returns the new length,
// don't use shift and unshift as we need to shift the elements that is expensive.
// console.log(arr.unshift(22))
// console.log(arr)

// delete: delete by index but keep the space empty, don't perform re indexing, create hole
// delete arr[1]
// console.log(arr)

// indexOf: returns the index of first occuring element
// console.log(arr.indexOf(21))
// console.log(arr.lastIndexOf(21))
// console.log(arr.includes(78))

// slice: to take slice of an array from start index to end index where end index is excluded, don't modifies the original array
// console.log(arr.slice(2,5))

// splice: arr.splice(start_index, delete_count, Items_to_add)
// console.log(arr)
// let spliceArr=arr.splice(1,5,'hello there',12,43,true)
// console.log(spliceArr)
// console.log(arr)

// toString
// console.log(arr.toString())
// console.log(typeof arr.toString())

// join: gives additional functionality of delimeter
// console.log(arr.join('|'))

// concat
// let arr1=[23,54,65,3]
// let arr2=[69,35,13,6]
// let arr4=[7,5,6]
// let arr3=arr1.concat(arr2,arr4)
// console.log(arr3)

// let a=arr1.push(arr4) // add arr4 as a single element in end and return length in a(returns 5)
// console.log(arr1)

// 2d array
// let ar=[1,2,3,4,5,6,7,8,9]
// console.log(ar[-1])
// let arr2d=[[1,2,3],[4,5,6],[7,8,9,[2,'3d']]]
// console.log(arr2d[0],arr2d[1],arr2d[2])
// console.log(arr2d[1][2])

//  converting to 1d array
// console.log(arr2d.flat(2)) // go till 2 level to flat
// console.log(arr2d.flat(Infinity)) // go till infinity level to flat

// to check for array
let ac = [1, 2, 3, 4];
console.log(Array.isArray(ac));

let abc = new Array(10); // this will take 10 as size of array
abc.fill(10);
console.log(abc);
let a = new Array(1, 2, 3, 4, 5); // now this will take it as array elements

//  arrays in javascript don't follow contiguous memory location as type is not defined in js arrays, and different data require different size like integer need 8byte(64bit).
