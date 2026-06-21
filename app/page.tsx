import Link from "next/link";
import { ArkaOrb } from "../src/components/arkaverse/ArkaOrb";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">

      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-10">

        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight">
            ARKAVERSE
          </h1>

          <p className="text-xl text-cyan-300">
            Business Operating System
          </p>

          <p className="max-w-2xl text-gray-300 text-lg">
            Turn business complexity into visible operational intelligence.
          </p>
        </div>

        <ArkaOrb
          scale={1}
          glow="soft"
          blur="0px"
          state="idle"
        />

        <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">

          <div className="border border-cyan-500/20 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-2">
              Systemize
            </h3>

            <p className="text-gray-400">
              Transform business processes into structured systems.
            </p>
          </div>

          <div className="border border-cyan-500/20 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-2">
              Automate
            </h3>

            <p className="text-gray-400">
              Reduce operational friction through intelligent workflows.
            </p>
          </div>

          <div className="border border-cyan-500/20 rounded-xl p-6 bg-white/5">
            <h3 className="text-xl font-semibold mb-2">
              Understand
            </h3>

            <p className="text-gray-400">
              Make internal business activity visible and actionable.
            </p>
          </div>

        </div>

        <Link
          href="/dashboard"
          className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
        >
          Explore Dashboard
        </Link>

      </div>

    </main>
  );
}

