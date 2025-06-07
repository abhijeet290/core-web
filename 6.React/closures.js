let a = 10;

function greet() {
  let b = 30;
  console.log(a);
  //   console.log(b);
  function meet() {
    console.log(b);
  }
  // meet()
  return meet;
}

// as memory allocated to functions in heap which stores it's references and also stores the reference of those variablea which are used so we can execute it
const m = greet();
m();
