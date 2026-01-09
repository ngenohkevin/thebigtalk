"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { teamMembers, stats, coreValues, contentPillars } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";

const goals = [
  { number: "01", title: "Civic Literacy", color: "bg-[#E5243B]" },
  { number: "02", title: "Policy Awareness", color: "bg-[#DDA63A]" },
  { number: "03", title: "Youth Engagement", color: "bg-[#4C9F38]" },
  { number: "04", title: "Transparency", color: "bg-[#C5192D]" },
  { number: "05", title: "Accountability", color: "bg-[#FF3A21]" },
];

const newsItems = [
  {
    date: "8 Jan 2026",
    category: "PRESS RELEASE",
    title: "The Big Talk Launches Youth Ambassador Program",
    excerpt: "Empowering young Kenyans to become civic education champions in their communities.",
  },
  {
    date: "2 Jan 2026",
    category: "UPDATE",
    title: "Partnership with County Governments Expanded",
    excerpt: "New collaboration to bring civic education to grassroots level across 15 counties.",
  },
  {
    date: "28 Dec 2025",
    category: "REPORT",
    title: "Annual Impact Report 2025 Released",
    excerpt: "Documenting our reach of over 500,000 Kenyans through civic education initiatives.",
  },
];

export default function Design6() {
  return (
    <div className="min-h-screen bg-white dark:bg-navy-950 transition-colors duration-300">
      {/* Top utility bar */}
      <div className="bg-[#009EDB] text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="font-medium">THE BIG TALK</span>
            <span className="hidden md:inline text-white/80">Civic Education for All Kenyans</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="hover:underline">EN</button>
            <span className="text-white/50">|</span>
            <button className="hover:underline">SW</button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-white/10 sticky top-0 z-50 shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Big Talk"
                width={44}
                height={44}
                className="rounded-full"
              />
              <div className="hidden sm:block">
                <span className="text-[#009EDB] font-bold text-lg block leading-tight">THE BIG TALK</span>
                <span className="text-gray-500 dark:text-white/50 text-xs">Kenya Civic Education Platform</span>
              </div>
            </Link>
            <div className="hidden lg:flex items-center gap-1">
              {["About", "What We Do", "Where We Work", "Get Involved", "Resources", "News"].map((item) => (
                <button
                  key={item}
                  className="text-gray-700 dark:text-white/70 hover:text-[#009EDB] hover:bg-blue-50 dark:hover:bg-white/10 text-sm px-4 py-2 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle className="text-gray-700 dark:text-white" />
              <button className="hidden sm:block bg-[#009EDB] text-white px-5 py-2 text-sm font-medium hover:bg-[#0077b5] transition-colors">
                Donate
              </button>
              <Link
                href="/"
                className="text-[#009EDB] text-sm font-medium hover:underline"
              >
                ← Designs
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero - UN Style */}
      <section className="relative bg-gradient-to-r from-[#004466] to-[#009EDB] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-white/80 text-sm font-medium tracking-wider uppercase mb-4">
                Kenya&apos;s Civic Education Platform
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Simplifying the talk.
                <br />
                <span className="text-[#FFD700]">Sparking the change.</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg">
                We believe that understanding governance is not a privilege for experts
                or leaders alone, but a right for <em>wananchi wote</em>.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-[#009EDB] px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
                <button className="border-2 border-white text-white px-6 py-3 font-semibold hover:bg-white/10 transition-colors">
                  Our Impact
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/Shallet_Kibet.jpeg"
                  alt="Civic engagement"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-navy-900 p-4 rounded shadow-lg">
                <p className="text-3xl font-bold text-[#009EDB]">500K+</p>
                <p className="text-sm text-gray-600">Citizens Reached</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats Bar */}
      <section className="bg-[#004466] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-1">{stat.value}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Goals - SDG Style */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-navy-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Strategic Pillars</h2>
            <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
              Five key areas guiding our mission to create an informed and engaged citizenry in Kenya.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${goal.color} text-white p-6 aspect-square flex flex-col justify-between cursor-pointer hover:scale-105 transition-transform`}
              >
                <span className="text-4xl font-bold opacity-50">{goal.number}</span>
                <span className="text-sm font-bold uppercase tracking-wider">{goal.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-white dark:bg-navy-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-[#009EDB] text-sm font-bold tracking-wider uppercase mb-4">
                About Us
              </p>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Making Governance Accessible for Every Kenyan
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-white/70 leading-relaxed">
                <p>
                  The Big Talk is a civic education platform committed to making governance
                  simple, accessible, and empowering for every Kenyan.
                </p>
                <p>
                  Through digital platforms, in-person engagements, and collaborations with
                  civil society and governance institutions, we consistently create space for
                  informed and meaningful citizen engagement.
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  At The Big Talk, we stand for truth over noise, knowledge over fear,
                  and action over apathy.
                </p>
              </div>
              <button className="mt-8 bg-[#009EDB] text-white px-6 py-3 font-medium hover:bg-[#0077b5] transition-colors">
                Read Our Story
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`relative aspect-[4/5] rounded overflow-hidden ${
                    index === 0 ? "col-span-2" : ""
                  }`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <p className="font-bold text-sm">{member.name}</p>
                    <p className="text-xs text-white/80">{member.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 bg-[#F7F9FC] dark:bg-navy-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Core Values</h2>
            <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
              The principles that guide every aspect of our work.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-navy-800 p-6 rounded border-l-4 border-[#009EDB] hover:shadow-lg transition-shadow"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{value.name}</h3>
                <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-16 px-6 bg-white dark:bg-navy-950 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">News & Updates</h2>
              <p className="text-gray-600 dark:text-white/60">Latest from The Big Talk</p>
            </div>
            <button className="text-[#009EDB] font-medium hover:underline">
              View All News →
            </button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-gray-200 dark:bg-navy-800 rounded mb-4 overflow-hidden">
                  <Image
                    src={teamMembers[index % teamMembers.length].image}
                    alt={item.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-white/50 mb-2">
                  <span>{item.date}</span>
                  <span className="bg-[#009EDB]/10 text-[#009EDB] px-2 py-0.5 font-medium">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-[#009EDB] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-white/60 text-sm">{item.excerpt}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-12 px-6 bg-gray-100 dark:bg-navy-900 border-y border-gray-200 dark:border-white/10 transition-colors">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 dark:text-white/50 text-sm mb-8 uppercase tracking-wider">
            Recognized & Supported By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {["UNESCO", "Office of Attorney General", "Heshimika Awards", "Civil Society Partners"].map((org) => (
              <span
                key={org}
                className="text-gray-400 dark:text-white/40 text-lg font-semibold hover:text-gray-600 dark:hover:text-white/60 transition-colors"
              >
                {org}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Newsletter */}
      <section className="py-16 px-6 bg-[#009EDB]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Informed
            </h2>
            <p className="text-white/90 mb-8">
              Subscribe to our newsletter for civic education updates, policy explainers,
              and ways to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-[#004466] text-white px-6 py-3 font-medium hover:bg-[#003355] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Comprehensive UN Style */}
      <footer className="bg-[#004466] text-white pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/logo.jpeg"
                  alt="The Big Talk"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <span className="font-bold text-lg block">THE BIG TALK</span>
                  <span className="text-white/60 text-xs">Civic Education Platform</span>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Simplifying the talk. Sparking the change. Making governance accessible
                for all Kenyans.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">About</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                {["Our Story", "Mission & Vision", "Core Values", "Leadership Team", "Partners"].map((item) => (
                  <li key={item}>
                    <button className="hover:text-white transition-colors">{item}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                {["Explainer Videos", "Policy Briefs", "Civic Guides", "Annual Reports", "Media Kit"].map((item) => (
                  <li key={item}>
                    <button className="hover:text-white transition-colors">{item}</button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-2 text-white/70 text-sm mb-6">
                <li>Nairobi, Kenya</li>
                <li>hello@thebigtalk.co.ke</li>
              </ul>
              <div className="flex gap-3">
                {["TikTok", "IG", "X", "FB", "YT"].map((item) => (
                  <button
                    key={item}
                    className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors text-xs font-medium"
                  >
                    {item[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
            <p>&copy; 2026 The Big Talk. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Use</button>
              <button className="hover:text-white transition-colors">Accessibility</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Design Label */}
      <div className="fixed bottom-6 left-6 bg-[#009EDB] text-white px-4 py-2 text-sm font-bold rounded-full shadow-lg">
        Design 6: Global NGO
      </div>
    </div>
  );
}
