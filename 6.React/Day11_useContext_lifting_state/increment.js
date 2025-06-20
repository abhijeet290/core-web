import { useContext } from "react";
import GlobalContext from "./Global";

function Increment() {
  const { count, setCount } = useContext(GlobalContext);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default Increment;
