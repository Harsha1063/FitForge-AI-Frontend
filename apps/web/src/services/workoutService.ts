import api from "./api";

export interface Exercise {
  exerciseName: string;
  sets: number;
  reps: number;
  weight: number;
}

export interface Workout {
  _id: string;
  title: string;
  day: string;
  exercises: Exercise[];
  createdAt: string;
  updatedAt: string;
}
export interface CreateWorkoutDto {
  title: string;
  day: string;
  exercises: Exercise[];
}

export const getWorkouts = async () => {
  const response = await api.get("/workouts");
  return response.data;
};

export const createWorkout = async (data: CreateWorkoutDto) => {
  const response = await api.post("/workouts", data);
  return response.data;
};

export const deleteWorkout = async (id: string) => {
  const response = await api.delete(`/workouts/${id}`);
  return response.data;
};

export const updateWorkout = async (
  id: string,
  data: CreateWorkoutDto
) => {
  const response = await api.put(`/workouts/${id}`, data);
  return response.data;
};


