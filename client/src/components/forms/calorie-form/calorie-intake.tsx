import { useState, type MouseEvent } from "react";
import FoodSelector from "../../selectors/food-selector";
import FoodList from "../../lists/food-list";
// import { CaloriesFormContext } from "../../../context/calories-form-context";

export default function CalorieIntake() {
  // const caloriesForm = useContext(CaloriesFormContext);
  const [showSelector, setShowSelector] = useState(false);

  // const deleteFood = () => {};

  // const clearFoodlist = () => {};

  function handleClick() {
    setShowSelector(true);
  }

  return (
    <>
      <div className="inline-block">
        <h2 className="text-[#9A9A9A]">What did you eat today?</h2>
        <button onClick={handleClick}>Add food</button>
      </div>
      {/* <form action="" method="post" id="calorie-intake-form">
        <label htmlFor="totalCalorieIntake" className="block">
          Total calories consumed in total:
        </label>
        <div>
          <input type="text" id="totalCalorieIntake" value={60} />{" "}
          <span>kcal</span>
        </div>
      </form> */}
      <section className="">
        {showSelector && <FoodSelector setShowSelector={setShowSelector} />}
        <div className="">
          <FoodList />
        </div>
      </section>
    </>
  );
}
