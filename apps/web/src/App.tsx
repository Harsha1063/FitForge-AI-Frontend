import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Workouts from "./pages/Workouts";
import Nutrition from "./pages/Nutrition";
import Progress from "./pages/Progress";
import AI from "./pages/AI";
import Settings from "./pages/Settings";

import DashboardLayout from "@/layouts/DashboardLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route
          path="/"
          element={<LandingPage />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {/* Protected Dashboard */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          {/* Dashboard Home */}
          <Route
            index
            element={<Dashboard />}
          />

          {/* Workouts */}
          <Route
            path="workouts"
            element={<Workouts />}
          />

          {/* Nutrition */}
          <Route
            path="nutrition"
            element={<Nutrition />}
          />

          {/* Progress */}
          <Route
            path="progress"
            element={<Progress />}
          />

          {/* AI Coach */}
          <Route
            path="ai"
            element={<AI />}
          />

          {/* Settings */}
          <Route
            path="settings"
            element={<Settings />}
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}