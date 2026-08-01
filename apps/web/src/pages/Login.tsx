import { useNavigate, Link } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

export default function Login() {
  const navigate = useNavigate();

  const login = useAuthStore((state) => state.login);

  function handleLogin() {
    login({
      name: "Harsha",
      email: "harsha@example.com",
    });

    navigate("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">
        <h1 className="text-3xl font-bold text-white">
          Welcome Back 👋
        </h1>

        <p className="mt-2 text-slate-400">
          Sign in to continue.
        </p>

        <div className="mt-8 space-y-5">
          <input
            placeholder="Email"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none"
          />

          <button
            onClick={handleLogin}
            className="w-full rounded-xl bg-cyan-500 p-4 font-bold text-black transition hover:bg-cyan-400"
          >
            Login
          </button>

          <p className="text-center text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-cyan-400 hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}