export type MealMapType = {
  morning: string;
  afternoon: string;
  evening: string;
};

export type FoodType = {
  name: string;
  calories: number;
  type: string;
};

type MealKey = "breakfast" | "lunch" | "dinner";

type Meal = {
  totalCalories: number;
  items: FoodType[];
};

export type FoodListType = Record<MealKey, Meal>;
