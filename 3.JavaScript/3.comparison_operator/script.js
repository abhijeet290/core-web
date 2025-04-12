// Comparison operator
// number to number

// let a1=1
// let a2=2
// console.log(a1==a2) // both are equal
// console.log(a1<a2) // less than
// console.log(a1<=a2) // less than equal to
// console.log(a1>=a2) // greater than equal to

// let num = 10;
// let str = "11";

// console.log(num == str); // compared after performing type coersion/conversion(string to number)

// let a1 = 10;
// let str1 = "10";
// console.log(a1 < str1);
// comparison can be performed on similar values

// === first check the type, then compare the values ( Strict Equality )
// console.log(a1===str1)

// let a2=30
// let a3=30
// console.log(a2===a3)

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// null and undefined can only be equivalent to each other

// console.log(null==0) // already defined null can only be equivalent to undefined, don't perform conversion
// console.log(null<0)
// console.log(null>0)
// console.log(null<=0)
// console.log(null>=0)

// undefined comparison
// console.log(undefined==0) // already defined null can only be equivalent to undefined, don't perform conversion
// console.log(undefined<0) // all other value
// console.log(undefined>0) // undefined is converted to
// console.log(undefined<=0) // NaN , so it won't be equal or less or
// console.log(undefined>=0) // greater than any number

// one NaN can never be equal to any other NaN, as it can be converted fron different values

// let a=123
// let b="123"
// let c=123

// console.log(a==b==c) // first it will compare a with b, output true, then true will be compared to c, results in false

// console.log(undefined!=null)
// console.log(undefined!==null)

// logical operator

// 1. && (AND)
// Returns the first falsy value or the last truthy value if all are truthy.

// true && true      // true
// true && false     // false
// 'hello' && 123    // 123
// 0 && 'world'      // 0

// 2. || (OR)
// Returns the first truthy value or the last falsy value if all are falsy.

// false || true     // true
// 0 || 'hello'      // "hello"
// '' || 0 || null   // null

// 3. ! (NOT)
// Negates the truthiness of a value.


// !true             // false
// !false            // true
// !0                // true
// !'hello'          // false

