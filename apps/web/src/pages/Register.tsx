import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "@/services/authService";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!name || !email || !password) {
     toast.error("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        name,
        email,
        password,
      });

     toast.success("Account created successfully!");

      navigate("/login");
    } catch (err: any) {
      console.error(err);

      toast.error(
  err?.response?.data?.message ||
    "Registration failed."
);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-8">

        <h1 className="text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-slate-400">
          Join FitForge AI today.
        </p>

        <div className="mt-8 space-y-5">

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none"
          />

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 outline-none"
          />

          <button
            onClick={handleRegister}
            disabled={loading}
            className="w-full rounded-xl bg-cyan-500 p-4 font-bold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
  <div className="flex items-center justify-center gap-2">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent"></div>
    Creating Account...
  </div>
) : (
  "🚀 Register"
)}
          </button>

        </div>

        <p className="mt-6 text-center text-slate-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-cyan-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}