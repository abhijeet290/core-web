// create element through JS

// const header1=document.createElement('h1')
// header1.innerText='Hello React'
// header1.style.backgroundColor='cyan'
// header1.style.fontSize='30px'
// header1.style.color='white'
// const header2=document.createElement('h2')
// header2.innerText='Hello Javascript'
// header2.style.backgroundColor='bisque'
// header2.style.fontSize='30px'
// header2.style.color='white'

// const root = document.getElementById("root");
// root.append(header1, header2);
// root.append(header2)

// Creating custom React and ReactDOM
// const body=document.getElementsByTagName('body')[0]
// body.style.margin='0px'
// body.style.padding='0px'
// const React = {
//     createElement: function (tag, style, children) {
//     const element = document.createElement(tag);
//     if (typeof children == "object") {
//       for (let val of children) {
//         element.append(val);
//       }
//     } else element.innerText = children;
//     for (let key in style) {
//       // here key is a js variable so we have to access it through [] notation
//       element.style[key] = style[key];
//     }
//     return element;
// },
// };

// // ReactDOM
// const ReactDOM = {
//     render: function (root, element) {
//     root.append(element);
//   },
// };

// const header1 = React.createElement(
//     "h1",
//   { fontSize: "30px", backgroundColor: "blue", color: "white" },
//   "Hello react"
// );
// const header2 = React.createElement(
//   "h2",
//   { fontSize: "30px", backgroundColor: "red", color: "white" },
//   "Hello Javascript"
// );

// const li1 = React.createElement("li", {}, "HTML");
// const li2 = React.createElement("li", {}, "CSS");
// const li3 = React.createElement("li", {}, "JS");

// const ul = React.createElement(
//     "ul",
//   { fontSize: "30px", backgroundColor: "pink", color: "white" },
//   [li1, li2, li3]
// );

// ReactDOM.render(document.getElementById("root"), header1);
// ReactDOM.render(document.getElementById("root"), header2);
// ReactDOM.render(document.getElementById("root"), ul);
