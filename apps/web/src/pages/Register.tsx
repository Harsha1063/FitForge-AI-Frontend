import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-slate-400">
          Join FitForge AI today.
        </p>
         <p className="text-center text-slate-400">
            Already have an account?{" "}
         <Link
    to="/login"
    className="text-cyan-400 hover:underline"
  >
    Login
          </Link>
</p>
        

        <div className="mt-8 space-y-5">
          <input
            placeholder="Full Name"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none"
          />

          <input
            placeholder="Email"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none"
          />

          <button className="w-full rounded-xl bg-cyan-500 p-4 font-bold text-black">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}