import { Outlet } from "react-router-dom";
import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="ml-72 min-h-screen">
        <Topbar />

        <main className="p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}