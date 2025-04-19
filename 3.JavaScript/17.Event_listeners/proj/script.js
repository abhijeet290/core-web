const button = document.querySelector("button");
button.addEventListener("click", () => {
  // read input data
  const input1 = document.getElementById("first");
  const num1 = Number(input1.value);
  const input2 = document.getElementById("second");
  const num2 = Number(input2.value);
  if (isNaN(num1 || num2)) return;
  const res = num1 + num2;
  // show the result
  const result = document.getElementById("result");
  result.textContent = `Result: ${res}`;
});

// BMI Calculator
// DC 
// AC