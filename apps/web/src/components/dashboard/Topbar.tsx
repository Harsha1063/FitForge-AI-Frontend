import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-8">
      <div>
        <h2 className="text-2xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="text-slate-400">
          Ready to crush today's workout?
        </p>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2">
          <Search size={18} />

          <input
            placeholder="Search..."
            className="bg-transparent outline-none"
          />
        </div>

        <button className="rounded-xl border border-slate-700 p-3 hover:bg-slate-800">
          <Bell size={18} />
        </button>

        <img
          src="https://i.pravatar.cc/150"
          alt="avatar"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </header>
  );
}