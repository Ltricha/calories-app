import { useContext, useEffect, useState, type MouseEvent } from "react";
import FoodSelector from "../../selectors/food-selector";
import FoodList from "../../lists/food-list";
import { CalorieFormContext } from "../../../pages/rapport/create-rapport";

export default function CalorieIntake(props) {
  const calorieForm = useContext(CalorieFormContext);

  console.log(calorieForm.calorieIntake);

  const [foodList, setFoodList] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });

  const [time, setTime] = useState("morning");

  const [color, setColor] = useState({
    morning: "#9A9A9A",
    afternoon: "#9A9A9A",
    evening: "#9A9A9A",
  });

  let totalCalories = {
    morning: 0,
    afternoon: 0,
    evening: 0,
  };

  /**
   *
   */
  // ["morning", "afternoon", "evening"].forEach((time) => {
  //   totalCalories[time] = foodList[time].reduce(
  //     (sum, food) => sum + food.calories,
  //     0
  //   );
  // });

  type MealMap = {
    morning: string;
    afternoon: string;
    evening: string;
  };

  /**
   *
   */
  const mealMap: MealMap = {
    morning: "breakfast",
    afternoon: "lunch",
    evening: "dinner",
  };

  /**
   * Will add meals to the list.
   * @param newMeal
   */
  // const addFood = (newFood) => {
  //   setFoodList({ ...foodList, [time]: [newFood, ...foodList[time]] });
  // };

  /**
   * Will delete meals depending on the time the user has selected
   */
  const deleteFood = () => {};

  const clearFoodlist = () => {};

  function handleClick(event: MouseEvent) {
    const id = event.currentTarget.id || time;
    setTime(id);
    setColor({ ...color, [time]: "yellow" });
  }

  // props.setCalorieIntake(
  //   totalCalories.morning + totalCalories.afternoon + totalCalories.evening
  // );

  return (
    <>
      <h2 className="text-[#9A9A9A]">
        How many calories have you consumed today?
      </h2>
      <section className="relative">
        <form action="" method="post" id="calorie-intake-form">
          <section className="flex justify-between">
            <div className="group" id="morning" onClick={handleClick}>
              {/* MORNING */}
              <label
                className="text-[#9A9A9A] group-hover:text-[#990D35] font-bold mb-3 block"
                htmlFor="morning"
              >
                Morning [5:00 - 12:00]
              </label>
              <div className="relative text-[#9A9A9A] group-hover:text-[#990D35]">
                <input
                  className=""
                  type="text"
                  name="morning"
                  id="morning"
                  value={totalCalories.morning}
                />
                <span className="absolute top-0 right-0 mr-5">kcal</span>
              </div>
            </div>
            {/* AFTERNOON */}
            <div id="afternoon" className="group" onClick={handleClick}>
              <label
                className="text-[#9A9A9A]  group-hover:text-[#990D35] font-bold mb-3 block"
                htmlFor="afternoon"
              >
                Afternoon [12:00 - 18:00]
              </label>
              <input
                className="block text-[#9A9A9A] group-hover:text-[#990D35]"
                type="text"
                name="afternoon"
                id="afternoon"
                value={totalCalories.afternoon}
              />
            </div>
            {/* EVENING */}
            <div id="evening" className="group" onClick={handleClick}>
              <label
                className="text-[#9A9A9A] group-hover:text-[#990D35] font-bold mb-3 block "
                htmlFor="evening"
              >
                Evening [18:00 - 00:00]
              </label>
              <input
                className="block text-[#9A9A9A] group-hover:text-[#990D35]"
                type="text"
                name="evening"
                id="evening"
                value={totalCalories.evening}
              />
            </div>
          </section>
        </form>
        <hr className="my-5 text-[#D52941]" />
        <h2 className="text-[#990D35]">
          What did you have for {mealMap[time]}
        </h2>

        <div className="flex justify-between">
          {/* <FoodSelector foodList={foodList[time]} addFood={addFood} />
          <FoodList foodList={foodList[time]} deleteFood={deleteFood} /> */}
        </div>
      </section>
    </>
  );
}
