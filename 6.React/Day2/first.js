import React from "react";
import ReactDOM from 'react-dom/client'

const element1=<h1>Hello React</h1>

// JSX: JS Expression (something that produce results or returbs any value)
// JSX: Statement (can't write statement in JSX)

let obj={
    name:'Himanshi',
    age:29
}
function Greet(props){

    // should produce a result like string, number, arrays (statement like if else don't produce any value )
    // return <h2>Hello from react {obj['name']}</h2>
    return <h2>Hello from react {props.age}</h2>
}
const element=<Greet name='himanshi' age='29'/>
// <Greet/> function call

const Root=ReactDOM.createRoot(document.getElementById('root'))
// Root.render(element1)
// Root.render(Greet('Rohan'))
Root.render(element)
