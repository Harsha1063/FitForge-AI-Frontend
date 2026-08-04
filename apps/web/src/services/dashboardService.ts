import api from "./api";

export const getDashboard = async () => {
  const response = await api.get("/dashboard");
  return response.data;
};

export const getCharts = async () => {
  const response = await api.get("/dashboard/charts");
  return response.data;
};

export const getStrength = async () => {
  const response = await api.get("/dashboard/strength");
  return response.data;
};

export const getStreak = async () => {
  const response = await api.get("/dashboard/streak");
  return response.data;
};

export const getWeeklyAnalytics = async () => {
  const response = await api.get(
    "/dashboard/analytics/weekly"
  );
  return response.data;
};

export const getMonthlyAnalytics = async () => {
  const response = await api.get(
    "/dashboard/analytics/monthly"
  );
  return response.data;
};