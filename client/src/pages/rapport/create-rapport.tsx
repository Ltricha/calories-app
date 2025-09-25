import { Link } from "react-router";
import { useContext, useState, createContext } from "react";
import CalorieIntake from "../../components/forms/calorie-form/calorie-intake";
import CalorieLoss from "../../components/forms/calorie-form/calorie-loss";
import Sidebar from "../../layout/sidebar";

export const CalorieFormContext = createContext(null);

export default function CreateRapport() {
  const [index, setIndex] = useState(0);

  const [calorieIntake, setCalorieIntake] = useState({
    morning: [],
    afternoon: [],
    evening: [],
  });

  const [calorieLoss, setCalorieLoss] = useState({});

  const value = {
    calorieIntake,
    setCalorieIntake,
  };

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
          <CalorieFormContext value={value}>
            {index === 0 ? (
              <CalorieIntake setCalorieIntake={setCalorieIntake} />
            ) : (
              <CalorieLoss />
            )}
          </CalorieFormContext>

          <div className="mx-auto flex justify-between">
            <Link to="/rapport">
              <button>Back</button>
            </Link>
            <button onClick={() => setIndex(1)}>Next</button>
          </div>
        </div>
      </main>
    </div>
  );
}
