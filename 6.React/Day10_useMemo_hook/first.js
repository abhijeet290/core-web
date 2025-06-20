import { useState, useMemo, useRef } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [count, setCount] = useState(0);
  let money = useRef(0);
//   console.log(money);
  return (
    <>
      <h1>Count is: {count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>increase</button>
      <h1>money is: {money.current}</h1>
      <button
        onClick={() => {
          money.current = money.current + 1;
          console.log(money.current);
        }}
      >
        increase
      </button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
