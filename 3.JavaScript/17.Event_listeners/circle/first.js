// document.body.addEventListener('click', function (e) {
//     const circle = document.createElement('div');
//     circle.className = 'circle';

//     const x = e.clientX;
//     const y = e.clientY;
//     circle.style.left = `${x - 25}px`;
//     circle.style.top = `${y - 25}px`;

//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F033', '#8E44AD'];
//     circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

//     const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
//     circle.textContent = messages[Math.floor(Math.random() * messages.length)];

//     document.body.appendChild(circle);

//     setTimeout(() => {
//       circle.remove();
//     }, 5000);
//   });

function getRandomRGB() {
  const r = Math.floor(Math.random() * 256); // Red
  const g = Math.floor(Math.random() * 256); //
  const b = Math.floor(Math.random() * 256); // Blue
  return `rgb(${r}, ${g}, ${b})`;
}

document.body.addEventListener("click", (event) => {
  const circle = document.createElement("div");
  circle.className = "circle";
  circle.textContent="Hi Sunny";

  const x = event.clientX;
  const y = event.clientY;

  circle.style.left = `${x - 25}px`;
  circle.style.top = `${y - 25}px`;

  // const color = ["red", "blue", "orange", "green","purple", "white","yellow", "wheat"];
  // circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
  circle.style.backgroundColor = getRandomRGB();
  document.body.appendChild(circle);

  // setTimeout(()=>{
  //   // circle.remove();
  // } ,5000)
});
