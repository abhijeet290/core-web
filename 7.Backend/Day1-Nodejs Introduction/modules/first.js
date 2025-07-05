import sum from "./second.js";

sum(23,54)
console.log('I am first')

// By default node js follows CJS
// MJS  is not default understood by node(import,export) to use it in node we have to save file with .mjs
// in react we don't need this because behind the scenes all these things are handled by bundler like vite.
// or simply in our package.json set the type to module.