import { createContext, useContext, useState } from "react";

export const caloriesFormContext = createContext(null);

function caloriesFormContext() {}

export function useCaloriesForm() {
  return useContext(caloriesFormContext);
}
