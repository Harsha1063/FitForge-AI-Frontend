import api from "./api";

export interface Progress {
  _id: string;
  date: string;
  bodyWeight?: number;
  bodyFat?: number;
  chest?: number;
  waist?: number;
  hips?: number;
  biceps?: number;
  thighs?: number;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProgressDto {
  date: string;
  bodyWeight?: number;
  bodyFat?: number;
  chest?: number;
  waist?: number;
  hips?: number;
  biceps?: number;
  thighs?: number;
  notes?: string;
}

export const getProgress = async () => {
  const response = await api.get("/progress");
  return response.data;
};

export const createProgress = async (
  data: CreateProgressDto
) => {
  const response = await api.post("/progress", data);
  return response.data;
};

export const updateProgress = async (
  id: string,
  data: CreateProgressDto
) => {
  const response = await api.put(`/progress/${id}`, data);
  return response.data;
};

export const deleteProgress = async (id: string) => {
  const response = await api.delete(`/progress/${id}`);
  return response.data;
};