import api from "./api";

export interface UserProfile {
  _id?: string;
  name: string;
  email?: string;
  age: number;
  gender: string;
  height: number;
  weight: number;
  targetWeight: number;
  goal: string;
  fitnessLevel: string;
  activityLevel: string;
  dailyCalories: number;
  profileImage?: string;
}

export async function getProfile() {
  const response = await api.get("/users/profile");
  return response.data;
}

export async function updateProfile(data: Partial<UserProfile>) {
  const response = await api.put("/users/profile", data);
  return response.data;
}