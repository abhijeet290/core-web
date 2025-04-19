console.log(`Hello from DOM`);
// let element = document.createElement("li");
// element.innerHTML = "Typescript";
// let parent = document.getElementById("root");
// parent.appendChild(element);

// functional approach
// function attach(content) {
//   const element = document.createElement("li");
//   element.innerHTML = content;
//   let parent = document.getElementById("root");
//   parent.appendChild(element);
// }

// attach('mongoDB')
// attach('React')
// attach('Node')
// attach('Python')

// textNode: anything other than html node
// let elem = document.createTextNode("I am text node");
// let parent = document.getElementById("root");
// parent.appendChild(elem);

// **************** Attribute Node ******************
// to set attribute on first element
// let elem = document.createAttribute('id');
// elem.value='1st'
// let cur_list=document.querySelector('li')
// cur_list.setAttributeNode(elem)

// access to 2nd item
// const parent=document.getElementById('root')
// let elem = document.createAttribute('id');
// elem.value='2nd'
// // console.log(parent.children)
// parent.children[1].setAttributeNode(elem)

// *********** Accessing Attribute ************
const element=document.getElementById('root')
console.log(element.getAttribute('class'))