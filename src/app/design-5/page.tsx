"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { teamMembers, stats, coreValues, contentPillars } from "@/lib/data";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Design5() {
  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-950 transition-colors duration-300">
      {/* Top Bar */}
      <div className="bg-navy-900 text-white text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <span>Civic Education Platform | Kenya</span>
          <div className="flex items-center gap-6">
            <button className="hover:text-accent-cyan transition-colors">Resources</button>
            <button className="hover:text-accent-cyan transition-colors">Partners</button>
            <button className="hover:text-accent-cyan transition-colors">Contact</button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-white/10 sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <Image
                src="/images/logo.jpeg"
                alt="The Big Talk"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <span className="text-navy-900 dark:text-white font-bold text-lg block">THE BIG TALK</span>
                <span className="text-gray-500 dark:text-white/50 text-xs">Civic Education Platform</span>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              {["About", "Programs", "Team", "Impact", "Resources", "Partners", "Contact"].map((item) => (
                <button
                  key={item}
                  className="text-gray-700 dark:text-white/70 hover:text-navy-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 text-sm px-4 py-2 transition-colors rounded"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle className="text-navy-900 dark:text-white" />
              <Link
                href="/"
                className="text-navy-600 dark:text-accent-cyan text-sm font-medium hover:underline"
              >
                ← Back to Designs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - Institutional */}
      <section className="bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-navy-100 dark:bg-navy-700 text-navy-700 dark:text-white text-xs font-semibold px-3 py-1 rounded">
                  EST. 2023
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-xs font-semibold px-3 py-1 rounded">
                  VERIFIED ORGANIZATION
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white leading-tight mb-6">
                Kenya&apos;s Premier Civic
                <br />
                Education Platform
              </h1>

              <p className="text-gray-600 dark:text-white/70 text-lg leading-relaxed mb-8">
                Making governance accessible, transparent, and meaningful for all
                Kenyans. We break down bills, policies, and political debates into
                clear, factual conversations.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-navy-900 dark:bg-white text-white dark:text-navy-900 px-6 py-3 font-medium hover:bg-navy-800 dark:hover:bg-gray-100 transition-colors">
                  View Our Programs
                </button>
                <button className="border border-gray-300 dark:border-white/30 text-gray-700 dark:text-white px-6 py-3 font-medium hover:bg-gray-50 dark:hover:bg-white/10 transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Profile (PDF)
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/Shallet_Kibet.jpeg"
                  alt="The Big Talk Team"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-navy-900 py-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Recognition Bar */}
        <div className="bg-gray-100 dark:bg-navy-800 py-6 transition-colors">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <span className="text-gray-500 dark:text-white/50 text-sm">Recognized by:</span>
              {["UNESCO", "Office of Attorney General", "Heshimika Awards"].map((org) => (
                <span
                  key={org}
                  className="bg-white dark:bg-navy-700 px-4 py-2 rounded border border-gray-200 dark:border-white/10 text-gray-700 dark:text-white text-sm font-medium"
                >
                  {org}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Summary */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-navy-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-6">About The Big Talk</h2>
                <div className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-4">
                    The Big Talk is a civic education platform committed to making governance
                    simple, accessible, and empowering for every Kenyan. We believe that
                    understanding how our country works is not a privilege for experts or
                    leaders alone, but a right for wananchi wote.
                  </p>
                  <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-4">
                    Through digital platforms, in-person engagements, and collaborations
                    with civil society and governance institutions, we consistently create
                    space for informed and meaningful citizen engagement.
                  </p>
                  <p className="text-gray-600 dark:text-white/70 leading-relaxed">
                    At The Big Talk, we stand for truth over noise, knowledge over fear,
                    and action over apathy.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="bg-white dark:bg-navy-900 rounded-lg border border-gray-200 dark:border-white/10 p-6 transition-colors">
              <h3 className="text-sm font-bold text-gray-500 dark:text-white/50 uppercase tracking-wider mb-4">
                Key Facts
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-navy-600 dark:bg-accent-cyan rounded-full mt-2" />
                  <div>
                    <p className="text-navy-900 dark:text-white font-medium">Founded</p>
                    <p className="text-gray-500 dark:text-white/50 text-sm">2023, Nairobi</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-navy-600 dark:bg-accent-cyan rounded-full mt-2" />
                  <div>
                    <p className="text-navy-900 dark:text-white font-medium">Focus Areas</p>
                    <p className="text-gray-500 dark:text-white/50 text-sm">Civic Education, Policy Literacy, Youth Engagement</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-navy-600 dark:bg-accent-cyan rounded-full mt-2" />
                  <div>
                    <p className="text-navy-900 dark:text-white font-medium">Team Size</p>
                    <p className="text-gray-500 dark:text-white/50 text-sm">5 Core Members</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-navy-600 dark:bg-accent-cyan rounded-full mt-2" />
                  <div>
                    <p className="text-navy-900 dark:text-white font-medium">Reach</p>
                    <p className="text-gray-500 dark:text-white/50 text-sm">500,000+ Citizens Engaged</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Programs - Tab Based */}
      <section className="py-16 px-6 bg-white dark:bg-navy-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Our Programs</h2>
            <p className="text-gray-600 dark:text-white/60">Content pillars driving civic engagement</p>
          </motion.div>

          <div className="border-b border-gray-200 dark:border-white/10 mb-8">
            <div className="flex gap-0">
              {contentPillars.map((pillar, index) => (
                <button
                  key={pillar.name}
                  onClick={() => setActiveProgram(index)}
                  className={`px-6 py-4 text-sm font-medium border-b-2 transition-all ${
                    activeProgram === index
                      ? "border-navy-600 dark:border-accent-cyan text-navy-900 dark:text-white"
                      : "border-transparent text-gray-500 dark:text-white/50 hover:text-gray-700 dark:hover:text-white/70"
                  }`}
                >
                  {pillar.name}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            key={activeProgram}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 dark:bg-navy-800 rounded-lg p-8 transition-colors"
          >
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-4">
              {contentPillars[activeProgram].name}
            </h3>
            <p className="text-gray-600 dark:text-white/70 leading-relaxed max-w-3xl">
              {contentPillars[activeProgram].description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team - Formal Grid */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-navy-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Leadership Team</h2>
            <p className="text-gray-600 dark:text-white/60">Meet the people driving our mission</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-navy-900 rounded-lg border border-gray-200 dark:border-white/10 overflow-hidden transition-colors"
              >
                <div className="flex gap-4 p-6">
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-900 dark:text-white">{member.name}</h3>
                    <p className="text-navy-600 dark:text-accent-cyan text-sm font-medium mb-2">{member.role}</p>
                    <p className="text-gray-500 dark:text-white/50 text-xs leading-relaxed">{member.shortBio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values - Simple List */}
      <section className="py-16 px-6 bg-white dark:bg-navy-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold text-navy-900 dark:text-white mb-2">Core Values</h2>
            <p className="text-gray-600 dark:text-white/60">The principles that guide our work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-navy-100 dark:bg-navy-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-4 h-4 bg-navy-600 dark:bg-accent-cyan rounded" />
                </div>
                <h3 className="font-bold text-navy-900 dark:text-white mb-2">{value.name}</h3>
                <p className="text-gray-500 dark:text-white/50 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact - Formal */}
      <section className="py-16 px-6 bg-navy-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Partner With Us
            </h2>
            <p className="text-white/70 mb-8">
              Interested in collaboration or partnership? Get in touch with our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-navy-900 px-8 py-3 font-medium hover:bg-gray-100 transition-colors">
                Send Inquiry
              </button>
              <button className="border border-white/30 text-white px-8 py-3 font-medium hover:bg-white/10 transition-colors">
                Download Partnership Brief
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Comprehensive */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="The Big Talk"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <span className="font-bold block">THE BIG TALK</span>
                  <span className="text-gray-400 text-xs">Civic Education Platform</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Making governance accessible for all Kenyans.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["About", "Programs", "Team", "Impact", "Resources"].map((item) => (
                  <li key={item}>
                    <button className="hover:text-white transition-colors">{item}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                {["Explainer Videos", "Policy Briefs", "Annual Report", "Media Kit"].map((item) => (
                  <li key={item}>
                    <button className="hover:text-white transition-colors">{item}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Nairobi, Kenya</li>
                <li>hello@thebigtalk.co.ke</li>
                <li className="pt-4 flex gap-4">
                  {["TikTok", "IG", "X", "FB"].map((item) => (
                    <button
                      key={item}
                      className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-gray-700 transition-colors text-xs"
                    >
                      {item[0]}
                    </button>
                  ))}
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
            <p>© 2024 The Big Talk. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Design Label */}
      <div className="fixed bottom-6 left-6 bg-navy-600 text-white px-4 py-2 text-sm font-bold rounded-full">
        Design 5: Authority
      </div>
    </div>
  );
}
