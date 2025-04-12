// Basic String Operations in JavaScript

// 1. Declare a string
// let str = "Hello, World!";
// console.log("Original String:", str);

// 2. String length
// console.log("Length:", str.length); // 13

// 3. Accessing characters
// console.log("First character:", str[0]); // 'H'

// 4. Concatenation
// let name = "Abhijit";
// let greeting = "Hello, " + name + "!";
// console.log("Concatenation:", greeting); // "Hello, Abhijit!"

// 5. Template literals
// let message = `Welcome, ${name}!`;
// console.log("Template Literal:", message); // "Welcome, Abhijit!"

// console.log(`"hello"`)
// console.log('Hello \\n world')

// let str='special_string'
// console.log(str.charAt(0))
// console.log(str[0])

// toUpperCase: don't changes the original string
// console.log(str.toUpperCase())
// toLowerCase: don't changes the original string
// console.log(str.toLowerCase())
// let lower=str.toLowerCase()
// console.log(lower)

// let str='we are going to learn about string methods '
// console.log(str.indexOf('string')) // returns the indexOf first occurence, else returns -1
// console.log(str.lastIndexOf('are'))
// console.log(str.indexOf('String'))
// console.log(str.includes('learn'))
// console.log(str.includes('Learn'))

// slice: used to extract part of a string, also takes -ve index
// console.log(str.slice(3,10))
// console.log(str.slice(-str.length,-1))

// substring: can't take -ve index
// console.log(str.substring(5,15))

// replace
// console.log(str.replace('to', 'too'))

// let message = "JavaScript is a powerful and flexible language.";
// console.log(message.split(' '))

// let msg='    Helloooo     '
// console.log(msg.trim()) // removes space from start and end

// creating string fron String Class

// let str=new String('Created with String class') // get space inside heap
// console.log(str,typeof str)

// startswith and endswith
// let txt = "JavaScript is awesome";
// console.log(txt.startsWith("Java")); // true
// console.log(txt.endsWith("some"));   // true

// 2. repeat(n)
// Repeats a string multiple times:


// console.log("ha".repeat(3)); // "hahaha"
// 3. padStart() and padEnd()
// Useful for formatting:


// let code = "7";
// console.log(code.padStart(4, "0")); // "0007"
// console.log(code.padEnd(4, "*"));   // "7***"
// 4. replaceAll()
// To replace all occurrences without regex:


// let text = "a-b-c-d";
// console.log(text.replaceAll("-", "|")); // a|b|c|d
// 5. localeCompare()
// To compare strings alphabetically (esp. in sorting):


// console.log("apple".localeCompare("banana")); // -1 (apple < banana)
// 6. match() & search()
// For pattern searching using regex:

// let data = "My number is 9876543210";
// console.log(data.match(/\d+/)); // ["9876543210"]
// console.log(data.search(/\d+/)); // 14
// 💡 Pro Tip:
// Even though new String() works, try to avoid it in most real-world scenarios:


// let str = "Hello"; // ✅ preferred (primitive)
// let strObj = new String("Hello"); // ⚠️ not ideal
// Because typeof strObj is "object" — this can cause unexpected bugs when comparing.