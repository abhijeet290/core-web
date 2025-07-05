console.log("I am second file");

function sum(a, b) {
  console.log(a + b);
}
function sub(a, b) {
  console.log(a - b);
}
// module.exports={sum,sub}

// as module.exports is an empty object we can add it as values to it
module.exports.sum = sum;
module.exports.sub = sub;
