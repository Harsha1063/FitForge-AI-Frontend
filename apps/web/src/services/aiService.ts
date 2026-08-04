import api from "./api";

export const generateWorkout = async (data: any) => {
  const response = await api.post("/ai/workout", data);
  return response.data;
};

export const generateDiet = async (data: any) => {
  const response = await api.post("/ai/diet", data);
  return response.data;
};

export const chatWithAI = async (message: string) => {
  const response = await api.post("/ai/chat", {
    message,
  });

  return response.data;
};

export const analyzeFitness = async () => {
  const response = await api.post("/ai/analyze");
  return response.data;
};