import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState();

  // Expensive recursive Fibonacci function
  function Fibonacci(n) {
    if (n <= 1) return n;
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }

  // Memoized Fibonacci result
  const result = useMemo(() => {
    if (number === "" || number === undefined) return 0;
    return Fibonacci(parseInt(number));
  }, [number]);

  return (
    <>
      <h1>Count is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>

      <div>
        <h2>Fibonacci number is: {result}</h2>
        <input
          type="number"
          value={number || ""}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
        />
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
