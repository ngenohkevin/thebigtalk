"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { teamMembers, stats, contentPillars } from "@/lib/data";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Design3() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Civic Ed", "Explainers", "Trends"];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-950 transition-colors duration-300">
      {/* Navigation - Sticky */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-navy-950/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Big Talk"
                width={36}
                height={36}
                className="rounded-full ring-2 ring-accent-coral/50"
              />
              <div>
                <span className="text-navy-900 dark:text-white font-bold text-sm block">THE BIG TALK</span>
                <span className="text-gray-500 dark:text-white/50 text-xs">Simplifying the talk</span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                {["TikTok", "IG", "X"].map((item) => (
                  <button
                    key={item}
                    className="text-gray-500 dark:text-white/50 hover:text-accent-coral text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:border-accent-coral/50 transition-all"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <ThemeToggle className="text-navy-900 dark:text-white" />
              <Link
                href="/"
                className="text-accent-coral text-sm hover:underline"
              >
                ← Back
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Bento Grid */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Main Hero Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent-coral/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <span className="inline-block bg-accent-coral/20 text-accent-coral text-xs font-bold px-3 py-1 rounded-full mb-6">
                  CIVIC EDUCATION PLATFORM
                </span>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  &ldquo;We don&apos;t just talk.
                  <br />
                  <span className="text-accent-cyan">We spark change.</span>
                  <br />
                  We make governance
                  <br />
                  make sense.&rdquo;
                </h1>

                <p className="text-white/60 text-lg mb-8 max-w-lg">
                  Our promise to every Kenyan citizen.
                </p>

                <button className="group flex items-center gap-3 bg-white text-navy-950 px-6 py-3 rounded-full font-semibold hover:bg-accent-cyan transition-colors">
                  <span>Explore What We Do</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Latest Explainer Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white dark:bg-navy-900/80 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-white/10 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-500 text-xs font-bold">LATEST EXPLAINER</span>
              </div>

              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-navy-800">
                <Image
                  src="/images/Shallet_Kibet.jpeg"
                  alt="Latest video"
                  fill
                  className="object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  2:34
                </span>
              </div>

              <h3 className="text-navy-900 dark:text-white font-bold mb-2">The Finance Bill Explained Simply</h3>
              <p className="text-gray-500 dark:text-white/50 text-sm mb-4">What it means for you and your family.</p>

              <button className="text-accent-coral text-sm font-medium hover:underline">
                Watch Now →
              </button>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.slice(0, 2).map((stat, index) => (
                <div
                  key={stat.label}
                  className={`rounded-2xl p-4 ${
                    index === 0
                      ? "bg-accent-coral text-white"
                      : "bg-accent-cyan/20 dark:bg-accent-cyan/20 text-navy-900 dark:text-white border border-accent-cyan/30"
                  }`}
                >
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className={`text-xs ${index === 0 ? "text-white/80" : "text-gray-600 dark:text-white/60"}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Stream */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Filter Tabs */}
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFilter === filter
                    ? "bg-navy-900 dark:bg-white text-white dark:text-navy-950"
                    : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentPillars.map((pillar, index) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-accent-coral/50 hover:bg-gray-50 dark:hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent-coral text-xs font-bold uppercase">
                    {pillar.name}
                  </span>
                  <span className="bg-accent-coral/20 text-accent-coral text-xs px-2 py-0.5 rounded-full">
                    New
                  </span>
                </div>
                <p className="text-gray-600 dark:text-white/70 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-white/10">
                  <span className="text-gray-500 dark:text-white/50 text-sm group-hover:text-accent-coral transition-colors">
                    Explore content →
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Reel */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-navy-900 dark:text-white">Meet the Team</h2>
              <p className="text-gray-500 dark:text-white/50 text-sm">The voices behind the change</p>
            </div>
            <button className="text-accent-coral text-sm font-medium hover:underline">
              View All →
            </button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 scrollbar-hide">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-64 group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block bg-accent-coral/90 text-white text-xs px-2 py-1 rounded-full mb-2">
                      {member.role}
                    </span>
                    <h3 className="text-white font-bold">{member.name}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Pulse */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent-coral/20 to-accent-cyan/20 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
                Our Impact in Numbers
              </h2>
              <p className="text-gray-600 dark:text-white/60">Real change, measured.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 dark:text-white/50 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscribe Card */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-navy-900 dark:bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-navy-800 dark:border-white/20 text-center"
          >
            <div className="w-16 h-16 bg-accent-coral/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🔔</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Get Notified
            </h2>
            <p className="text-white/60 mb-8">
              Be the first to know when we drop new explainers and civic content.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-5 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:border-accent-coral focus:outline-none"
              />
              <button className="bg-accent-coral text-white px-6 py-3 rounded-full font-semibold hover:bg-accent-coral/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-white/10 py-12 px-6 mt-12 bg-white dark:bg-navy-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Big Talk"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <span className="text-navy-900 dark:text-white font-bold block">THE BIG TALK</span>
                <span className="text-gray-500 dark:text-white/50 text-xs">Simplifying the talk. Sparking the change.</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {["TikTok", "Instagram", "X", "Facebook"].map((item) => (
                <button
                  key={item}
                  className="text-gray-500 dark:text-white/50 hover:text-accent-coral text-sm transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <p className="text-gray-400 dark:text-white/30 text-sm">© 2024 The Big Talk</p>
          </div>
        </div>
      </footer>

      {/* Design Label */}
      <div className="fixed bottom-6 left-6 bg-gradient-to-r from-accent-coral to-accent-orange text-white px-4 py-2 text-sm font-bold rounded-full">
        Design 3: Pulse
      </div>
    </div>
  );
}
