"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { teamMembers, stats, coreValues } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Design4() {
  return (
    <div className="min-h-screen bg-[#FFFBF7] dark:bg-navy-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="bg-[#FFFBF7]/90 dark:bg-navy-950/90 backdrop-blur-sm sticky top-0 z-50 border-b border-amber-100 dark:border-white/10 transition-colors">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Big Talk"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-navy-800 dark:text-white font-semibold">The Big Talk</span>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {["About", "Team", "Programs", "Impact", "Contact"].map((item) => (
                <button
                  key={item}
                  className="text-navy-800/70 dark:text-white/70 hover:text-navy-800 dark:hover:text-white text-sm transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle className="text-navy-800 dark:text-white" />
              <Link
                href="/"
                className="text-accent-gold text-sm font-medium hover:underline"
              >
                ← Designs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Team as Heroes */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Team Photo Focus */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Photo */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Shallet_Kibet.jpeg"
                  alt="Shallet Kibet"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating team photos */}
              <div className="absolute -bottom-6 -right-6 grid grid-cols-2 gap-2">
                {teamMembers.slice(1, 5).map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-4 border-[#FFFBF7] dark:border-navy-950 shadow-lg"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-gold/20 rounded-full -z-10" />
            </motion.div>

            {/* Right - Warm messaging */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-800 dark:text-white leading-tight mb-6 font-serif">
                Meet the voices
                <br />
                <span className="text-accent-gold">behind the change.</span>
              </h1>

              <p className="text-navy-800/70 dark:text-white/70 text-lg leading-relaxed mb-8">
                We&apos;re a team of Kenyans who believe that every citizen deserves to
                understand how their country works.
              </p>

              <blockquote className="border-l-4 border-accent-gold pl-6 mb-8">
                <p className="text-navy-800/80 dark:text-white/80 text-xl italic font-serif">
                  &ldquo;Hakuna maneno mingi. Hakuna propaganda.
                  <br />
                  Just truth, clarity, and context.&rdquo;
                </p>
              </blockquote>

              <div className="flex flex-wrap gap-4">
                <button className="bg-navy-800 dark:bg-white text-white dark:text-navy-900 px-6 py-3 rounded-full font-medium hover:bg-navy-700 dark:hover:bg-gray-100 transition-colors">
                  Meet Our Team
                </button>
                <button className="border-2 border-navy-800 dark:border-white text-navy-800 dark:text-white px-6 py-3 rounded-full font-medium hover:bg-navy-800 dark:hover:bg-white hover:text-white dark:hover:text-navy-900 transition-colors">
                  Our Story
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16 px-6 bg-navy-800">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-1 bg-accent-gold mx-auto mb-8" />
            <p className="text-white/80 text-sm uppercase tracking-wider mb-6">
              Our Vision
            </p>
            <p className="text-2xl md:text-3xl text-white leading-relaxed font-serif">
              To see a Kenya where citizens truly understand the policies that shape
              their lives. A nation guided by truth, facts, and informed voices.
              A generation that no longer watches from the sidelines but{" "}
              <span className="text-accent-gold font-semibold">
                stands up, speaks out, and shapes Kenya&apos;s tomorrow.
              </span>
            </p>
            <div className="w-20 h-1 bg-accent-gold mx-auto mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Core Values - Rounded Cards */}
      <section className="py-20 px-6 bg-[#FFFBF7] dark:bg-navy-950 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent-gold text-sm font-medium mb-4 tracking-wider uppercase">
              What We Believe
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white font-serif">
              Our Core Values
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
                className="bg-white dark:bg-navy-900 rounded-3xl p-8 shadow-lg shadow-amber-100/50 dark:shadow-none hover:shadow-xl hover:shadow-amber-200/50 dark:hover:shadow-none transition-all border border-transparent dark:border-white/10"
              >
                <div className="w-14 h-14 bg-accent-gold/20 rounded-2xl flex items-center justify-center mb-6">
                  <div className="w-6 h-6 bg-accent-gold rounded-lg" />
                </div>
                <h3 className="text-xl font-bold text-navy-800 dark:text-white mb-3 font-serif">
                  {value.name}
                </h3>
                <p className="text-navy-800/60 dark:text-white/60 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team - Large Photos */}
      <section className="py-20 px-6 bg-white dark:bg-navy-900 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent-gold text-sm font-medium mb-4 tracking-wider uppercase">
              Our People
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white font-serif">
              The Heart of The Big Talk
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
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-navy-800 dark:text-white font-serif mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent-gold font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-navy-800/60 dark:text-white/60 text-sm leading-relaxed">
                    {member.shortBio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact - Warm Stats */}
      <section className="py-20 px-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-navy-900 dark:to-navy-800 transition-colors">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent-gold text-sm font-medium mb-4 tracking-wider uppercase">
              Our Impact
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white font-serif">
              The Change We&apos;ve Sparked
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-navy-950 rounded-3xl p-6 text-center shadow-lg border border-transparent dark:border-white/10"
              >
                <p className="text-3xl md:text-4xl font-bold text-navy-800 dark:text-white mb-2 font-serif">
                  {stat.value}
                </p>
                <p className="text-navy-800/60 dark:text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Warm & Inviting */}
      <section className="py-20 px-6 bg-[#FFFBF7] dark:bg-navy-950 transition-colors">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-navy-800 rounded-[3rem] p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-gold/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">
                Join Our Community
              </h2>
              <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                Be part of a movement that believes in the power of informed citizens.
                Subscribe to our newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-accent-gold focus:outline-none"
                />
                <button className="bg-accent-gold text-navy-900 px-8 py-4 rounded-full font-semibold hover:bg-accent-gold/90 transition-colors whitespace-nowrap">
                  Join Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Community Feel */}
      <footer className="bg-white dark:bg-navy-950 border-t border-amber-100 dark:border-white/10 py-16 px-6 transition-colors">
        <div className="max-w-6xl mx-auto">
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
                <span className="text-navy-800 dark:text-white font-bold text-xl">The Big Talk</span>
              </div>
              <p className="text-navy-800/60 dark:text-white/60 mb-6 max-w-sm">
                Simplifying the talk. Sparking the change. Building an informed Kenya, one conversation at a time.
              </p>
              <div className="flex gap-4">
                {["TikTok", "Instagram", "X", "Facebook"].map((item) => (
                  <button
                    key={item}
                    className="w-10 h-10 rounded-full bg-navy-800/10 dark:bg-white/10 flex items-center justify-center text-navy-800/60 dark:text-white/60 hover:bg-accent-gold hover:text-white transition-all text-xs font-medium"
                  >
                    {item[0]}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-navy-800 dark:text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["About Us", "Our Team", "Programs", "Impact", "Contact"].map((item) => (
                  <li key={item}>
                    <button className="text-navy-800/60 dark:text-white/60 hover:text-accent-gold text-sm transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-navy-800 dark:text-white font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-navy-800/60 dark:text-white/60 text-sm">
                <li>Nairobi, Kenya</li>
                <li>hello@thebigtalk.co.ke</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-amber-100 dark:border-white/10 mt-12 pt-8 text-center text-navy-800/40 dark:text-white/40 text-sm">
            <p>© {new Date().getFullYear()} The Big Talk. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Design Label */}
      <div className="fixed bottom-6 left-6 bg-accent-gold text-navy-900 px-4 py-2 text-sm font-bold rounded-full">
        Design 4: Ubuntu
      </div>
    </div>
  );
}
