import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItems } from "./slice2";

export default function FoodCart({ value }) {
  const dispatch = useDispatch();
  const [inCart, setInCart] = useState(false);
  function handleClick() {
    if (inCart) {
      dispatch(removeItems());
      setInCart(false);
    } else {
      dispatch(addItems());
      setInCart(true);
    }
  }

  return (
    <>
      <h1>{value.food}</h1>
      <h2>{value.price}</h2>
      <button onClick={handleClick}>{inCart ? "Remove" : "Add"}</button>
    </>
  );
}
