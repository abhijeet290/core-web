import { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomValue } from "./Slice1";

export default function CustomCounter() {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    // console.log(typeof number)
    dispatch(CustomValue(Number(number)));
  }
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleClick}>submit</button>
    </>
  );
}
