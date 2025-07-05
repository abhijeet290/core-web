const {sub,sum} =require('./second') // when we use require it's access is private to use outside we have to export it.

sum(34,23)
console.log('I am the first file')
sub(12,5)
// i nee second.js file in my firt.js
// this is CJS(common js)

console.log(module.exports)