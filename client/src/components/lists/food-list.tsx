import { useContext, useEffect, useState } from "react";
import DeleteButton from "../buttons/delete-button";
import { CaloriesFormContext } from "../../context/calories-form-context";

export default function FoodList() {
  type Food = {
    name: string;
    calories: number;
    type: string;
    count: number;
  };

  const caloriesForm = useContext(CaloriesFormContext);
  const caloriesList: Food[] = caloriesForm.calorieIntake;

  function incrementItem(item) {
    const newArray = caloriesList.map((v) => {
      if (v.name == item.name) {
        v.count = v.count + 1;
        return v;
      } else {
        return v;
      }
    });

    caloriesForm.setCalorieIntake(newArray);
  }

  function decrementItem(item) {
    const newArray = caloriesList.map((v) => {
      if (v.name == item.name) {
        v.count = v.count - 1;
        return v;
      } else {
        return v;
      }
    });

    caloriesForm.setCalorieIntake(newArray);
  }

  return (
    <section className="">
      <div>
        <ul className="scroll max-h-80 overflow-y-auto p-5">
          {caloriesList.map((item, index) => (
            <li
              key={index}
              className="w-100 flex justify-between py-2 transition"
            >
              <span>{item.name}</span>
              <div>
                <button
                  onClick={() => {
                    incrementItem(item);
                  }}
                >
                  +
                </button>
                <input
                  id={item.name}
                  className="w-auto"
                  type="text"
                  value={item.count}
                />
                <button
                  onClick={() => {
                    decrementItem(item);
                  }}
                >
                  -
                </button>
              </div>

              <DeleteButton />
              <span>{item.calories * item.count} kcal</span>
            </li>
          ))}
        </ul>
      </div>
      <div></div>
    </section>
  );
}
