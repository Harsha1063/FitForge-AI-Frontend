import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500 p-2">
                <Dumbbell className="text-black" size={22} />
              </div>

              <span className="text-2xl font-black">FitForge AI</span>
            </div>

            <p className="mt-6 max-w-md leading-7 text-slate-400">
              Transform your fitness journey with AI-powered workout
              planning, nutrition guidance, recovery insights, and
              performance analytics.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-lg border border-slate-700 px-4 py-2 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                X
              </a>

              <a
                href="#"
                className="rounded-lg border border-slate-700 px-4 py-2 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                Instagram
              </a>

              <a
                href="#"
                className="rounded-lg border border-slate-700 px-4 py-2 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="rounded-lg border border-slate-700 px-4 py-2 transition hover:border-cyan-500 hover:text-cyan-400"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-white">Product</h3>

            <ul className="mt-6 space-y-3 text-slate-400">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">AI Coach</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-white">Company</h3>

            <ul className="mt-6 space-y-3 text-slate-400">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-white">Resources</h3>

            <ul className="mt-6 space-y-3 text-slate-400">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} FitForge AI. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400">
              Privacy
            </a>

            <a href="#" className="hover:text-cyan-400">
              Terms
            </a>

            <a href="#" className="hover:text-cyan-400">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}