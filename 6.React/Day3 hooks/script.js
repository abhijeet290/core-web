import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  let [count, setCount] = useState(0);
  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    count = count - 1;
    setCount(count);
  }
  return (
    <div className="first">
      <h1>Count is: {count}</h1>
      <button onClick={incrementCount}>increment {count}</button>
      <button onClick={decrementCount}>decrement {count}</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Counter />);
