import { useDispatch, useSelector } from "react-redux";
import { Decrement, Increment, Reset } from "./Slice1";

export default function Counting() {
  const count = useSelector((state) => state.slice1.count);
  // subscribing to the event

  const dispatch = useDispatch();
  console.log(Increment());

  return (
    <>
      <h1>Counter is: {count}</h1>
      <button onClick={() => dispatch(Increment())}>Increment</button>
      <button onClick={() => dispatch(Decrement())}>Decrement</button>
      <button onClick={() => dispatch(Reset())}>Reset</button>
    </>
  );
}
