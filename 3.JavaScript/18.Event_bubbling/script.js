// const body = document.body;

// in this case too it will create multiple event listeners, one for each button

// const button = document.querySelectorAll("button");
// button.forEach((button) => {
//   button.style.backgroundColor = button.textContent;
//   button.addEventListener("click", (e) => {
//     body.style.backgroundColor = button.id;
//   });
// });
// const red = document.getElementById("red");
// const green = document.getElementById("green");
// const blue = document.getElementById("blue");
// const yellow = document.getElementById("yellow");
// const cyan = document.getElementById("cyan");

// const body = document.body;
// red.addEventListener("click", () => {
//   body.style.backgroundColor = "red";
// });
// green.addEventListener("click", () => {
//   body.style.backgroundColor = "green";
// });
// blue.addEventListener("click", () => {
//   body.style.backgroundColor = "blue";
// });
// yellow.addEventListener("click", () => {
//   body.style.backgroundColor = "yellow";
// });
// cyan.addEventListener("click", () => {
//   body.style.backgroundColor = "cyan";
// });

const button = document.querySelectorAll("button");
button.forEach((button) => {
  button.style.backgroundColor = button.textContent;
});
const root = document.getElementById("root");
root.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON")
    document.body.style.backgroundColor = e.target.id;
});
