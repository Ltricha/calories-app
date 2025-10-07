import { Link } from "react-router";
import { useState } from "react";
import CalorieIntake from "../../components/forms/calorie-form/calorie-intake";
import CalorieLoss from "../../components/forms/calorie-form/calorie-loss";
import Sidebar from "../../layout/sidebar";
import CaloriesFormContextProvider from "../../context/calories-form-context";

export default function CreateRapport() {
  const [index, setIndex] = useState(0);

  // const [calorieIntake, setCalorieIntake] = useState({
  //   morning: [],
  //   afternoon: [],
  //   evening: [],
  // });

  // const [calorieLoss, setCalorieLoss] = useState({});

  // const value = {
  //   calorieIntake,
  //   setCalorieIntake,
  // };

  // const setCalorieIntake = (calorieIntake: number) => {
  //   calorieFormData.calorieIntake = calorieIntake;
  // };

  // const setCalorieLoss = () => {};

  return (
    <div className="flex wrap h-full">
      <Sidebar />
      <main className="w-5/6 ml-[240px]">
        <div className="max-w-3/4 mx-auto">
          <h1>Make a new rapport</h1>
          {/* <span>Calorie Intake: {calorieFormData.calorieIntake}</span> */}

          <CaloriesFormContextProvider>
            {index === 0 ? <CalorieIntake /> : <CalorieLoss />}
          </CaloriesFormContextProvider>

          <div className="mx-auto flex justify-between">
            <Link to="/rapport">
              <button className="default-btn">Back</button>
            </Link>
            <button className="default-btn" onClick={() => setIndex(1)}>
              Next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
