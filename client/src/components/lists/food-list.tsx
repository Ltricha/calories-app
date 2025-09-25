import { useState } from "react";
import DeleteButton from "../buttons/delete-button";

export default function FoodList(props) {
  return (
    <section className="">
      <div>
        <ul className="scroll h-50 overflow-y-scroll p-5">
          {props.foodList.map((foodItem, index) => (
            <li
              key={index}
              className="w-100 flex justify-between py-2 transition"
            >
              <span>{foodItem.name}</span>
              <DeleteButton />
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </section>
  );
}
