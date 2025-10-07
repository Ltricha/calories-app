import { createContext, useContext, useState } from "react";
// import { CalorieFormContext } from "../pages/rapport/create-rapport";

// const CaloriesFormContext = createContext(null);

// function caloriesFormContext() {}

// export function useCaloriesForm() {
//   return <CaloriesFormContext>{children}</CaloriesFormContext>;
// }

export const CaloriesFormContext = createContext({});

/**
 * @author Latricha Seym
 * Custom hook for calories form
 */
export default function CaloriesFormContextProvider({ children }) {
  const [calorieIntake, setCalorieIntake] = useState([]);
  const [calorieLoss, setCalorieLoss] = useState({});

  const caloriesForm = {
    calorieIntake,
    calorieLoss,
    setCalorieIntake,
    setCalorieLoss,
  };
  return (
    <CaloriesFormContext.Provider value={caloriesForm}>
      {children}
    </CaloriesFormContext.Provider>
  );
}
