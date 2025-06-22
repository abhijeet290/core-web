import { useState } from "react";
import './Add.css'; // Import the CSS file

export default function Add({value}){
    const [count,setCount]=useState(0)

    return(
        <div className="add-container">
            <h1>{value}: {count}</h1>
            <button onClick={()=>setCount(count+1)}>vote</button>
        </div>
    )
}