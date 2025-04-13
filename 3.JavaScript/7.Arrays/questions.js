// 🔹 1. Accessing Elements & Indexing
// Create an array with at least 7 elements of different types. Access:
let arr = [23, "hello", true, null, undefined, 23, 86, 34];
// The 3rd element using []
console.log(arr[2]);
// The last element using .at(-1)
console.log(arr.at(-1));
// An invalid negative index using [] and explain the result.
console.log(arr[-2]); // as [] don't supports negative index
// What’s the difference between arr[1] and arr.at(1)? Try both and note the result.
console.log(arr[1]);
console.log(arr.at(1));
// 🔹 2. Cloning and References
// Create an array and assign it to another variable. Modify one – does the change reflect in both?
let arr1 = [1, 2, 3, 4];
let arr2 = arr1;
arr2.push(23);
console.log(arr1, arr2); // both will be modified as the have the same reference
// Use structuredClone() to clone an array. Modify the clone and check if the original is affected.
let arr3 = structuredClone(arr1);
arr3.push(50);
console.log(arr1, arr3); // this will not change the original array
// 🔹 3. Array Modifiers: push, pop, shift, unshift
// Use .push() to add 2 elements at the end of an array. What value does .push() return?
let pushArr = [1, 2, 3, 4, 5];
console.log(pushArr.push(6, 10)); // print the new lwngth

// Use .pop() to remove the last element and store it in a variable. Log it.
let popped = pushArr.pop();
console.log(popped);
// Use .shift() and .unshift() on the same array and observe the results. What do they return?
console.log(pushArr.shift());
console.log(pushArr.unshift(23));
// 🔹 4. Deleting Elements
// Delete an element using delete arr[2]. What happens to the length of the array?
delete arr[2];
console.log(arr); // keeep the empty space
// Try accessing the deleted element. What do you get?
console.log(arr[2]); //undefined
// 🔹 5. Search Methods: indexOf, lastIndexOf, includes
// Find the index of the first and last occurrence of a repeated number in an array using indexOf and lastIndexOf.
console.log(arr.indexOf(23), arr.lastIndexOf(23));
// Check whether a value (e.g., 100) exists in the array using includes().
console.log(arr.includes(100));
// 🔹 6. Slice vs Splice
// Use .slice() to extract 3 elements from the middle of an array. Does it modify the original array?
let sliced = arr.slice(3, 6);
console.log(sliced);
console.log(arr); //don't modifies the original array
// Use .splice() to:

// Remove 2 elements from index 1
console.log(arr.splice(1, 2));
// Insert "hello", true, and 42 at index 2
arr.splice(2, 0, "hello", true, 42);
// Check how the original array has changed
console.log(arr);

// 🔹 7. toString and join
// Convert an array to a string using .toString() and print its type.
console.log(arr1)
console.log(arr1.toString())
// Join all elements of an array with " | " using .join().
console.log(arr1.join('|'))

// 🔹 8. Concat and Push
// Create 3 arrays and combine them using .concat(). Store in a new variable.
let a=[1,2,3]
let b=[4,5,6]
let c=[7,8,9]
let d=a.concat(b,c)
console.log(d)
// Try using .push() to add one array to another. What is the structure of the resulting array?
a.push(b)
console.log(a)
// 🔹 9. Checking Array Type
// Use Array.isArray() to check if a variable is actually an array.
console.log(Array.isArray(a))
// 🔹 10. Array Constructor & fill
// Create an empty array of size 5 using new Array(5) and fill all values with 0 using .fill().
let ar=new Array(5)
ar.fill(0)
console.log(ar)
// Create an array with values [1, 2, 3] using the Array() constructor.
let array=new Array(1,2,3)
console.log(array)