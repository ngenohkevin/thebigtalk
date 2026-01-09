"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { teamMembers, stats, coreValues, contentPillars } from "@/lib/data";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Design2() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Big Talk"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-navy-900 font-medium">The Big Talk</span>
            </Link>
            <div className="hidden md:flex items-center gap-10">
              {["About", "Team", "Programs", "Contact"].map((item) => (
                <button
                  key={item}
                  className="text-gray-600 hover:text-navy-900 text-sm transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-cyan group-hover:w-full transition-all" />
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle className="text-navy-900 dark:text-white" />
              <Link
                href="/"
                className="text-accent-cyan text-sm hover:underline"
              >
                ← Designs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Minimal */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-navy-900 leading-tight mb-6">
              Simplifying the talk.
              <br />
              Sparking the change.
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl mx-auto">
              A civic education platform making governance accessible
              for <span className="text-navy-900 font-medium">wananchi wote</span>.
            </p>
            <button className="bg-navy-900 text-white px-8 py-4 text-sm font-medium hover:bg-navy-800 transition-colors">
              Learn About Our Mission
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats - Inline */}
      <section className="border-y border-gray-200 py-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-navy-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Block - Navy */}
      <section className="bg-navy-900 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-accent-cyan text-sm font-medium mb-6 tracking-wider uppercase">
              Our Mission
            </p>
            <p className="text-2xl md:text-3xl text-white leading-relaxed font-light">
              To simplify governance and bring it closer to the people. To break down
              bills, policies, and political debates into clear, factual, and relatable
              conversations — empowering every Kenyan to understand, question, and
              participate meaningfully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Pillars - Tabs */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gray-500 text-sm mb-4 tracking-wider uppercase">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Content Pillars
            </h2>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {contentPillars.map((pillar, index) => (
              <button
                key={pillar.name}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-sm font-medium transition-all ${
                  activeTab === index
                    ? "bg-navy-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {pillar.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              {contentPillars[activeTab].description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values - Simple Grid */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gray-500 text-sm mb-4 tracking-wider uppercase">
              Our Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              What Guides Us
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-accent-cyan rounded-full" />
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {value.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Clean Grid */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-gray-500 text-sm mb-4 tracking-wider uppercase">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              The People Behind the Platform
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-semibold text-navy-900 text-sm">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 bg-navy-900">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-white/70 mb-10">
              Have questions or want to collaborate? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Your name"
                className="px-4 py-3 bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:border-accent-cyan focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-3 bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:border-accent-cyan focus:outline-none"
              />
              <textarea
                placeholder="Your message"
                rows={4}
                className="px-4 py-3 bg-white/10 text-white placeholder:text-white/50 border border-white/20 focus:border-accent-cyan focus:outline-none resize-none"
              />
              <button className="bg-white text-navy-900 px-8 py-3 font-medium hover:bg-gray-100 transition-colors">
                Send Message
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Minimal */}
      <footer className="border-t border-gray-200 py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Big Talk"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-navy-900 font-medium text-sm">The Big Talk</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              {["TikTok", "Instagram", "X", "Facebook"].map((item) => (
                <button key={item} className="hover:text-navy-900 transition-colors">
                  {item}
                </button>
              ))}
            </div>
            <p className="text-gray-400 text-sm">© 2024 The Big Talk</p>
          </div>
        </div>
      </footer>

      {/* Design Label */}
      <div className="fixed bottom-6 left-6 bg-navy-900 text-white px-4 py-2 text-sm font-medium rounded-full">
        Design 2: Clarity
      </div>
    </div>
  );
}
