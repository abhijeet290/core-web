import { useContext } from "react";
import GlobalContext from "./Global";

function Decrement() {
  const { count, setCount } = useContext(GlobalContext);
  return (
    <>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

export default Decrement;
