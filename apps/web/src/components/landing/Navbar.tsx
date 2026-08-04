import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-3xl font-black tracking-tight">
          <span className="text-white">Fit</span>
          <span className="text-cyan-400">Forge</span>
          <span className="text-white"> AI</span>
        </h1>

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex">
          <a href="#features" className="hover:text-cyan-400">
            Features
          </a>

          <a href="#dashboard" className="hover:text-cyan-400">
            Dashboard
          </a>

          <a href="#pricing" className="hover:text-cyan-400">
            Pricing
          </a>

          <a href="#contact" className="hover:text-cyan-400">
            Contact
          </a>
        </nav>

        <div className="flex gap-3">
          <Link to="/login">
            <button className="rounded-lg px-5 py-2 text-slate-300 hover:text-white">
              Login
            </button>
          </Link>

          <Link to="/register">
            <button className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}