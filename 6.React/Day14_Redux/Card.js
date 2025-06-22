import { useState } from "react";
import FoodCart from "./FoodCart";

const foodItems = [
  { id: 1, food: "Pizza", price: 12.99 },
  { id: 2, food: "Burger", price: 8.99 },
  { id: 3, food: "Sushi", price: 15.5 },
  { id: 4, food: "Taco", price: 4.99 },
  { id: 5, food: "Pasta", price: 11.25 },
  { id: 6, food: "Steak", price: 22.75 },
  { id: 7, food: "Salad", price: 7.5 },
  { id: 8, food: "Ice Cream", price: 5.25 },
];

export default function Card() {
 
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {foodItems.map((value) => {
        return (
          <div key={value.id}>
           <FoodCart value={value}/>
          </div>
        );
      })}
    </div>
  );
}
