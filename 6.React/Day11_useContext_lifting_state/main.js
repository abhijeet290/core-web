import { useState} from "react";
import ReactDOM from "react-dom/client";
import Increment from "./increment";
import Decrement from "./Decrement";

import GlobalContext from "./Global";

function App() {
  const [count, setCount] = useState(0);
  console.log(GlobalContext)

  return (
    <>
      <GlobalContext.Provider value={{ count, setCount }}>
        <h1>Counter is: {count}</h1>
        {/* <Increment count={count} setCount={setCount} />
        <Decrement count={count} setCount={setCount} /> */}
        <Increment />
        <Decrement />
      </GlobalContext.Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
