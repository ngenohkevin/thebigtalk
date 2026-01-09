"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const designs = [
  {
    id: 1,
    name: "The Voice",
    subtitle: "Bold Editorial",
    description: "Inspired by independent journalism. Bold, opinionated, cuts through the noise.",
    audience: "Youth, activists, movement builders",
    href: "/design-1",
    color: "from-navy-900 to-navy-800",
    accent: "bg-accent-orange",
  },
  {
    id: 2,
    name: "Clarity",
    subtitle: "Refined Simplicity",
    description: "Clean lines, purposeful whitespace. Substance over style.",
    audience: "General public, information seekers",
    href: "/design-2",
    color: "from-white to-gray-50",
    accent: "bg-accent-cyan",
  },
  {
    id: 3,
    name: "Pulse",
    subtitle: "Living Platform",
    description: "Dynamic, content-first. Feels alive with embedded social feeds.",
    audience: "Social media users, content consumers",
    href: "/design-3",
    color: "from-navy-950 to-navy-900",
    accent: "bg-accent-coral",
  },
  {
    id: 4,
    name: "Ubuntu",
    subtitle: "People-Centered",
    description: "Photography-forward. Human faces and stories at the center.",
    audience: "Community builders, trust seekers",
    href: "/design-4",
    color: "from-amber-50 to-orange-50",
    accent: "bg-accent-gold",
  },
  {
    id: 5,
    name: "Authority",
    subtitle: "Institutional Trust",
    description: "Professional credibility. Data-driven, structured layouts.",
    audience: "Government, NGOs, institutional partners",
    href: "/design-5",
    color: "from-gray-50 to-white",
    accent: "bg-navy-600",
  },
  {
    id: 6,
    name: "Global NGO",
    subtitle: "UN/UNESCO Style",
    description: "International organization aesthetic. SDG-inspired goals, formal structure.",
    audience: "International partners, funders, global reach",
    href: "/design-6",
    color: "from-[#009EDB] to-[#004466]",
    accent: "bg-[#009EDB]",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-navy-950 transition-colors duration-300">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-white/10 bg-white dark:bg-navy-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.jpeg"
              alt="The Big Talk"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h1 className="text-gray-900 dark:text-white font-bold text-xl">The Big Talk</h1>
              <p className="text-gray-500 dark:text-white/60 text-sm">Design Concepts</p>
            </div>
          </div>
          <ThemeToggle className="text-gray-700 dark:text-white" />
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            6 Design Concepts
            <span className="block text-accent-cyan">for The Big Talk</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-white/70 leading-relaxed mb-8">
            Each design captures a different personality for the platform.
            Click on any concept to see the full homepage design in action.
          </p>
          <p className="text-gray-500 dark:text-white/50">
            Simplifying the talk. Sparking the change.
          </p>
        </motion.div>
      </section>

      {/* Design Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={design.href} className="block group">
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 backdrop-blur-sm hover:border-gray-300 dark:hover:border-white/20 shadow-sm dark:shadow-none transition-all duration-300 hover:scale-[1.02]">
                  {/* Preview gradient */}
                  <div className={`h-40 bg-gradient-to-br ${design.color} relative`}>
                    <div className={`absolute top-4 left-4 ${design.accent} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                      Design {design.id}
                    </div>
                    <div className="absolute bottom-4 right-4 text-white/80 text-sm font-mono">
                      /{design.name.toLowerCase().replace(" ", "-")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-accent-cyan transition-colors">
                        {design.name}
                      </h3>
                      <span className="text-gray-500 dark:text-white/50 text-sm">
                        {design.subtitle}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-white/60 text-sm mb-4 leading-relaxed">
                      {design.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400 dark:text-white/40">
                        Best for: {design.audience}
                      </span>
                      <span className="text-accent-cyan text-sm font-medium group-hover:translate-x-1 transition-transform">
                        View →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-white/10 py-8 bg-white dark:bg-navy-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 dark:text-white/40 text-sm">
          <p>Design concepts for The Big Talk NGO | Kenya&apos;s Civic Education Platform</p>
        </div>
      </footer>
    </main>
  );
}
