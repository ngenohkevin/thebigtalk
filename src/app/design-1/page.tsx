"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { teamMembers, stats, coreValues } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Design1() {
  return (
    <div className="min-h-screen bg-navy-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Big Talk"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-white font-bold tracking-tight">THE BIG TALK</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {["About", "Team", "Programs", "Impact", "Contact"].map((item) => (
                <button key={item} className="text-white/70 hover:text-white text-sm font-medium transition-colors">
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle className="text-white" />
              <Link
                href="/"
                className="text-accent-orange text-sm font-medium hover:underline"
              >
                ← Back to Designs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Editorial Style */}
      <section className="min-h-screen pt-24 pb-16 px-6 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Typography Stack */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-accent-orange font-mono text-sm mb-6 tracking-wider">
                CIVIC EDUCATION PLATFORM
              </p>

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] mb-4">
                SIMPLIFYING
                <br />
                <span className="text-white/90">THE TALK.</span>
              </h1>

              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent-orange leading-[0.9] mb-8 ml-8 md:ml-16">
                SPARKING
                <br />
                <span className="text-accent-orange/80">THE CHANGE.</span>
              </h2>

              <div className="max-w-md">
                <p className="text-white/60 text-lg leading-relaxed mb-8">
                  Making governance accessible for every Kenyan — because
                  understanding your country isn&apos;t a privilege.
                  <span className="text-white font-medium"> It&apos;s a right.</span>
                </p>

                <div className="flex items-center gap-4 text-sm text-white/40 mb-8">
                  <span>Nairobi, Kenya</span>
                  <span className="w-1 h-1 bg-white/40 rounded-full" />
                  <span>Est. 2023</span>
                </div>

                <div className="h-px bg-white/20 mb-8" />

                <button className="group flex items-center gap-3 text-white border-2 border-accent-orange px-6 py-3 hover:bg-accent-orange transition-all duration-300">
                  <span className="font-semibold">Explore Our Work</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>

            {/* Right - Featured Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/images/Shallet_Kibet.jpeg"
                  alt="Shallet Kibet - Executive Director"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white font-bold text-lg">Shallet Kibet</p>
                  <p className="text-white/60 text-sm">Executive Director</p>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent-orange/30 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-orange/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-navy-900 border-y border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-white font-mono mb-2">
                  {stat.value}
                </p>
                <p className="text-white/50 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Fight For */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-accent-orange font-mono text-sm mb-4 tracking-wider">
              OUR VALUES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What We Fight For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-navy-900/50 border border-white/10 p-8 hover:border-accent-orange/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors">
                  {value.name}
                </h3>
                <p className="text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team - Magazine Style */}
      <section className="py-24 px-6 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-accent-orange font-mono text-sm mb-4 tracking-wider">
              THE TEAM
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              The Voices Behind the Change
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-transparent transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-accent-orange text-sm font-medium mb-2">{member.role}</p>
                <p className="text-white/50 text-sm">{member.shortBio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8"
          >
            &ldquo;We don&apos;t just talk.
            <br />
            <span className="text-accent-orange">We spark change.</span>
            <br />
            We make governance make sense.&rdquo;
          </motion.blockquote>
          <p className="text-white/50">— The Big Talk Promise</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-accent-orange">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-950 mb-6">
              Join the Conversation
            </h2>
            <p className="text-navy-950/70 text-lg mb-8 max-w-xl mx-auto">
              Stay informed. Get our weekly breakdowns of policies, bills,
              and governance updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-6 py-3 bg-white text-navy-950 placeholder:text-navy-950/50 w-full sm:w-80"
              />
              <button className="px-8 py-3 bg-navy-950 text-white font-semibold hover:bg-navy-900 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="The Big Talk"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="text-white font-bold text-xl">THE BIG TALK</span>
              </div>
              <p className="text-white/50 max-w-sm">
                Simplifying the talk. Sparking the change. Kenya&apos;s civic education platform.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About", "Team", "Programs", "Impact", "Contact"].map((item) => (
                  <li key={item}>
                    <button className="text-white/50 hover:text-white text-sm transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2">
                {["TikTok", "Instagram", "X (Twitter)", "Facebook"].map((item) => (
                  <li key={item}>
                    <button className="text-white/50 hover:text-accent-orange text-sm transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/40 text-sm">
            <p>© 2024 The Big Talk. Making governance accessible for all Kenyans.</p>
          </div>
        </div>
      </footer>

      {/* Design Label */}
      <div className="fixed bottom-6 left-6 bg-accent-orange text-navy-950 px-4 py-2 text-sm font-bold rounded-full">
        Design 1: The Voice
      </div>
    </div>
  );
}
