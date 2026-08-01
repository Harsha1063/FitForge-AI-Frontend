import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-slate-950 py-24">
      <Container className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-6xl font-extrabold leading-tight text-white"
        >
          Build Your Dream Physique with{" "}
          <span className="text-cyan-400">
            AI
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-xl text-slate-400"
        >
          AI-generated workout plans, nutrition guidance,
          and progress tracking designed specifically for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex justify-center gap-4"
        >
          <Link
            to="/register"
            className="inline-flex items-center rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
          >
            Start Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}