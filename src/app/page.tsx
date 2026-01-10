"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { teamMembers, stats, coreValues, contentPillars, socialLinks } from "@/lib/data";
import { useState, useRef, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Shield,
  Lightbulb,
  Scale,
  Users,
  Target,
  Play,
  ExternalLink,
  FileCheck,
  Award,
  Megaphone,
  HandshakeIcon,
  Menu,
  X,
} from "lucide-react";

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

// Icon component for core values
const iconMap = {
  shield: Shield,
  lightbulb: Lightbulb,
  scale: Scale,
  users: Users,
  target: Target,
};

export default function Home() {
  const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const filters = ["All", "Civic Ed", "Explainers", "Trends"];

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Impact", href: "#impact" },
    { name: "Videos", href: "#videos" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-navy-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-navy-950/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Big Talk"
                width={40}
                height={40}
                className="rounded-full ring-2 ring-accent-coral/50"
              />
              <div>
                <span className="text-navy-900 dark:text-white font-bold text-sm block">THE BIG TALK</span>
                <span className="text-gray-500 dark:text-white/50 text-xs">Simplifying the talk</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 dark:text-white/70 hover:text-navy-900 dark:hover:text-white text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                {["TikTok", "IG", "X"].map((item) => (
                  <a
                    key={item}
                    href={item === "TikTok" ? socialLinks.tiktok : item === "IG" ? socialLinks.instagram : socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-white/50 hover:text-accent-coral text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:border-accent-coral/50 transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>
              <ThemeToggle className="text-navy-900 dark:text-white" />
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-navy-900 dark:text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-navy-900 dark:text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-white/5 bg-white dark:bg-navy-950"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-gray-600 dark:text-white/70 hover:text-navy-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-white/10 mt-4">
                <div className="flex items-center gap-3 px-4">
                  {["TikTok", "IG", "X"].map((item) => (
                    <a
                      key={item}
                      href={item === "TikTok" ? socialLinks.tiktok : item === "IG" ? socialLinks.instagram : socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 dark:text-white/50 hover:text-accent-coral text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:border-accent-coral/50 transition-all"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section - Design 3 Style with Explainer Video */}
      <section id="about" className="py-8 px-6">
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
                  SIMPLIFYING
                  <br />
                  <span className="text-white/90">THE TALK.</span>
                  <br />
                  <span className="text-accent-coral">SPARKING</span>
                  <br />
                  <span className="text-accent-coral/80">THE CHANGE.</span>
                </h1>

                <p className="text-white/60 text-lg mb-8 max-w-lg">
                  Making governance accessible for every Kenyan — because
                  understanding your country isn&apos;t a privilege.
                  <span className="text-white font-medium"> It&apos;s a right.</span>
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button className="group flex items-center gap-3 bg-white text-navy-950 px-6 py-3 rounded-full font-semibold hover:bg-accent-cyan transition-colors">
                    <span>Explore What We Do</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                    <Play className="w-5 h-5" />
                    <span>Watch Our Story</span>
                  </button>
                </div>
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

              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-navy-800 group cursor-pointer">
                <Image
                  src="/images/Shallet_Kibet.jpeg"
                  alt="Latest video"
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent-coral/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-coral hover:scale-110 transition-all">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  3:45
                </span>
              </div>

              <h3 className="text-navy-900 dark:text-white font-bold mb-2">Understanding Public Participation</h3>
              <p className="text-gray-500 dark:text-white/50 text-sm mb-4">Your voice matters in governance decisions.</p>

              <button className="text-accent-coral text-sm font-medium hover:underline flex items-center gap-1">
                Watch Now <ExternalLink className="w-3 h-3" />
              </button>
            </motion.div>

            {/* Quick Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl p-4 bg-accent-coral text-white">
                <p className="text-2xl font-bold mb-1">500K+</p>
                <p className="text-xs text-white/80">Signatures mobilized</p>
              </div>
              <div className="rounded-2xl p-4 bg-accent-cyan/20 dark:bg-accent-cyan/20 text-navy-900 dark:text-white border border-accent-cyan/30">
                <p className="text-2xl font-bold mb-1">50+</p>
                <p className="text-xs text-gray-600 dark:text-white/60">Explainer videos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Design 1 Style with Grayscale/Color and Modal */}
      <section id="team" className="py-24 px-6 bg-white dark:bg-navy-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-accent-coral font-mono text-sm mb-4 tracking-wider">
              THE TEAM
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white">
              The Voices Behind the Change
            </h2>
            <p className="text-gray-500 dark:text-white/50 mt-4 max-w-2xl">
              Meet the passionate team driving civic education and democratic engagement across Kenya.
              Click on any team member to learn more about their story.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-transparent transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-white text-sm">Click to view bio →</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-1 group-hover:text-accent-coral transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent-coral text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 dark:text-white/50 text-sm line-clamp-2">{member.shortBio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="sm:max-w-2xl bg-white dark:bg-navy-900 border-gray-200 dark:border-white/10">
          {selectedMember && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-navy-900 dark:text-white">
                    {selectedMember.name}
                  </DialogTitle>
                  <DialogDescription className="text-accent-coral font-medium">
                    {selectedMember.role}
                  </DialogDescription>
                </DialogHeader>
                <p className="text-gray-600 dark:text-white/70 mt-4 leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Impact Numbers with Animated Counters */}
      <section id="impact" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-accent-coral/10 via-accent-cyan/10 to-accent-coral/10 dark:from-accent-coral/20 dark:via-accent-cyan/20 dark:to-accent-coral/20 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10"
          >
            <div className="text-center mb-12">
              <p className="text-accent-coral font-mono text-sm mb-4 tracking-wider">OUR IMPACT</p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
                Real Change, Measured
              </h2>
              <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
                From mobilizing citizens to producing educational content, here&apos;s how we&apos;re making a difference.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-2">
                  <AnimatedCounter value={500000} suffix="+" />
                </p>
                <p className="text-gray-500 dark:text-white/50 text-sm">Citizen signatures mobilized</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-accent-coral mb-2">UNESCO</p>
                <p className="text-gray-500 dark:text-white/50 text-sm">Youth Hackathon 2025</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white mb-2">
                  <AnimatedCounter value={50} suffix="+" />
                </p>
                <p className="text-gray-500 dark:text-white/50 text-sm">Explainer videos produced</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-accent-cyan mb-2">Heshimika</p>
                <p className="text-gray-500 dark:text-white/50 text-sm">Awards for civic leadership</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 500,000 Signatures Achievement Section */}
      <section className="py-24 px-6 bg-navy-900 dark:bg-navy-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-accent-coral font-mono text-sm mb-4 tracking-wider">
                LANDMARK ACHIEVEMENT
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <AnimatedCounter value={500000} suffix="+" />
                <span className="block text-white/80 text-3xl md:text-4xl mt-2">
                  Citizen Signatures
                </span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                In a historic demonstration of civic engagement, The Big Talk mobilized over half a million
                Kenyan citizens to oppose the proposed Term Limit Bill — a bill that sought to fundamentally
                alter Kenya&apos;s democratic framework.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-coral/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileCheck className="w-5 h-5 text-accent-coral" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">The Bill&apos;s Proposal</h4>
                    <p className="text-white/60 text-sm">
                      Extend presidential terms from 5 to 7 years and introduce an Office of Prime Minister.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-5 h-5 text-accent-cyan" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Our Response</h4>
                    <p className="text-white/60 text-sm">
                      Large-scale civic mobilization across digital and community platforms.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-accent-gold" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">The Outcome</h4>
                    <p className="text-white/60 text-sm">
                      Successfully resisted constitutional changes that would weaken democratic checks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-accent-coral/20 to-accent-cyan/20 rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">The Impact</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-white/80">
                      Demonstrated capacity to move beyond awareness-raising into large-scale civic action
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-cyan rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-white/80">
                      Engaged citizens across digital and community platforms in meaningful participation
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-white/80">
                      Positioned citizens as active participants in governance, not passive observers
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs font-bold">4</span>
                    </div>
                    <p className="text-white/80">
                      Strengthened relationships with civil society and policy actors
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent-coral/30 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-cyan/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Design 1 Style with Animated Icons */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-accent-coral font-mono text-sm mb-4 tracking-wider">
              OUR VALUES
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white">
              What We Fight For
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={value.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white dark:bg-navy-900/50 border border-gray-200 dark:border-white/10 p-8 rounded-xl hover:border-accent-coral/50 hover:shadow-lg dark:hover:shadow-accent-coral/5 transition-all duration-300"
                >
                  <motion.div
                    className="w-14 h-14 bg-accent-coral/10 rounded-xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Icon className="w-7 h-7 text-accent-coral" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-accent-coral transition-colors">
                    {value.name}
                  </h3>
                  <p className="text-gray-600 dark:text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Pillars Section */}
      <section id="videos" className="py-20 px-6 bg-white dark:bg-navy-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-accent-coral font-mono text-sm mb-4 tracking-wider">
              WHAT WE DO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              Our Content Pillars
            </h2>
            <p className="text-gray-600 dark:text-white/60 max-w-2xl mx-auto">
              Three focused areas that drive our mission to make governance accessible to every Kenyan.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2">
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

          <div className="grid md:grid-cols-3 gap-6">
            {contentPillars.map((pillar, index) => (
              <motion.div
                key={pillar.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10 hover:border-accent-coral/50 hover:bg-white dark:hover:bg-white/10 transition-all cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-accent-coral text-xs font-bold uppercase">
                    {pillar.name}
                  </span>
                  <span className="bg-accent-coral/20 text-accent-coral text-xs px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                </div>
                <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-4">
                  {pillar.description}
                </p>
                <div className="pt-4 border-t border-gray-200 dark:border-white/10">
                  <span className="text-gray-500 dark:text-white/50 text-sm group-hover:text-accent-coral transition-colors flex items-center gap-1">
                    Explore content <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-navy-950 border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.jpeg"
                  alt="The Big Talk"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <span className="text-white font-bold text-xl block">THE BIG TALK</span>
                  <span className="text-white/50 text-sm">Simplifying the talk. Sparking the change.</span>
                </div>
              </div>
              <p className="text-white/50 max-w-sm mb-6">
                Kenya&apos;s civic education platform — making governance accessible, practical, and relevant to everyday citizens.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href={socialLinks.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-accent-coral hover:text-white transition-all"
                >
                  <span className="text-xs font-bold">TT</span>
                </a>
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-accent-coral hover:text-white transition-all"
                >
                  <span className="text-xs font-bold">IG</span>
                </a>
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-accent-coral hover:text-white transition-all"
                >
                  <span className="text-xs font-bold">X</span>
                </a>
                <a
                  href={socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-accent-coral hover:text-white transition-all"
                >
                  <span className="text-xs font-bold">FB</span>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { name: "About Us", href: "#about" },
                  { name: "Our Team", href: "#team" },
                  { name: "Impact", href: "#impact" },
                  { name: "Videos", href: "#videos" },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-white/50 hover:text-accent-coral text-sm transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Content</h4>
              <ul className="space-y-2">
                {["Civic Education", "Explainers", "Trends", "Latest Videos"].map((item) => (
                  <li key={item}>
                    <button className="text-white/50 hover:text-accent-coral text-sm transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} The Big Talk. Making governance accessible for all Kenyans.
            </p>
            <p className="text-white/40 text-sm">
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
