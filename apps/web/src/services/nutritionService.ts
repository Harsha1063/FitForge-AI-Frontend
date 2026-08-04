import api from "./api";

export interface Nutrition {
  _id: string;
  date: string;
  mealType: string;
  mealName: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  water: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateNutritionDto {
  date: string;
  mealType: string;
  mealName: string;
  calories: number;
  protein?: number;
  carbs?: number;
  fats?: number;
  water?: number;
  notes?: string;
}

export const getNutrition = async () => {
  const response = await api.get("/nutrition");
  return response.data;
};

export const createNutrition = async (
  data: CreateNutritionDto
) => {
  const response = await api.post("/nutrition", data);
  return response.data;
};

export const updateNutrition = async (
  id: string,
  data: CreateNutritionDto
) => {
  const response = await api.put(`/nutrition/${id}`, data);
  return response.data;
};

export const deleteNutrition = async (
  id: string
) => {
  const response = await api.delete(`/nutrition/${id}`);
  return response.data;
};