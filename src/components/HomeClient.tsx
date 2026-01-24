"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
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
  Calendar,
  ArrowRight,
} from "lucide-react";
import type {
  TeamMember,
  CoreValue,
  Article,
  Category,
  ExplainerVideo,
  ImpactStat,
  Achievement,
  SiteSettings,
} from "@/lib/strapi";
import { getYouTubeVideoId, getYouTubeThumbnail } from "@/lib/strapi";
import VideoModal from "@/components/VideoModal";

// Props interface
interface HomeClientProps {
  teamMembers: TeamMember[];
  coreValues: CoreValue[];
  articles: Article[];
  categories: Category[];
  explainerVideos: ExplainerVideo[];
  impactStats: ImpactStat[];
  achievements: Achievement[];
  siteSettings: SiteSettings | null;
  strapiUrl: string;
}

// Animated counter component
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      setDisplayValue(0);
      const duration = 2000;
      const startTime = Date.now();

      const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeProgress = 1 - (1 - progress) * (1 - progress);
        const currentValue = Math.round(value * easeProgress);
        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView, value, hasAnimated]);

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

// Default categories (fallback if none from Strapi)
const defaultCategories = [
  {
    name: "Civic Education",
    slug: "civic-education",
    description: "Breaking down complex governance topics into digestible, actionable knowledge for every Kenyan citizen.",
    color: "#10B981",
  },
  {
    name: "Explainer",
    slug: "explainer",
    description: "Deep-dive explanations of bills, policies, and government processes that affect your daily life.",
    color: "#3B82F6",
  },
  {
    name: "Trends",
    slug: "trends",
    description: "Tracking and analyzing current affairs, political developments, and civic movements across Kenya.",
    color: "#8B5CF6",
  },
];

// Default social links (fallback if Strapi settings not available)
const defaultSocialLinks = {
  tiktok: "https://tiktok.com/@thebigtalkke",
  instagram: "https://instagram.com/thebigtalkke",
  twitter: "https://x.com/thebigtalkke",
  facebook: "https://facebook.com/thebigtalkke",
  youtube: "",
};

// Default impact stats (fallback)
const defaultImpactStats = [
  { id: 1, value: "500,000+", label: "Citizen signatures mobilized", order: 1 },
  { id: 2, value: "UNESCO", label: "Youth Hackathon 2025", order: 2 },
  { id: 3, value: "50+", label: "Explainer videos produced", order: 3 },
  { id: 4, value: "Heshimika", label: "Awards for civic leadership", order: 4 },
];

export default function HomeClient({
  teamMembers,
  coreValues,
  articles,
  categories,
  explainerVideos,
  impactStats,
  achievements,
  siteSettings,
  strapiUrl,
}: HomeClientProps) {
  // Use site settings for social links or fallback to defaults
  const socialLinks = {
    tiktok: siteSettings?.tiktokUrl || defaultSocialLinks.tiktok,
    instagram: siteSettings?.instagramUrl || defaultSocialLinks.instagram,
    twitter: siteSettings?.twitterUrl || defaultSocialLinks.twitter,
    facebook: siteSettings?.facebookUrl || defaultSocialLinks.facebook,
    youtube: siteSettings?.youtubeUrl || defaultSocialLinks.youtube,
  };

  // Use impact stats from Strapi or fallback
  const displayImpactStats = impactStats.length > 0 ? impactStats : defaultImpactStats;

  // Get featured video for hero section
  const featuredVideo = explainerVideos.length > 0 ? explainerVideos[0] : null;
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Scroll to hash on page load and track section visibility
  useEffect(() => {
    // Scroll to hash on initial load
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    // Update URL hash based on visible section
    const sections = ['about', 'what-we-do', 'team', 'impact', 'articles', 'videos', 'contact'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
                const newHash = `#${sectionId}`;
                if (window.location.hash !== newHash) {
                  window.history.replaceState(null, '', newHash);
                }
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // Get categories that have at least one article
  const categoriesWithArticles = categories.filter(cat =>
    articles.some(article => article.category?.slug === cat.slug)
  );

  // Use categories with articles or fallback to defaults (filtered by articles)
  const displayCategories = categoriesWithArticles.length > 0 ? categoriesWithArticles : defaultCategories;

  // Build filters: "All" + only categories that have articles
  const filters = ["All", ...categoriesWithArticles.map(c => c.name)];

  // Filter articles based on selected filter
  const filteredArticles = activeFilter === "All"
    ? articles
    : articles.filter(article => article.category?.name === activeFilter);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Impact", href: "#impact" },
    { name: "Articles", href: "#articles" },
    { name: "Videos", href: "/videos", external: true },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Helper to get image URL
  const getImageUrl = (image: { url: string } | null) => {
    if (!image?.url) return "/images/logo.jpeg";
    if (image.url.startsWith("http")) return image.url;
    return `${strapiUrl}${image.url}`;
  };

  // Helper to render markdown text (bold, italic)
  const renderMarkdown = (text: string) => {
    // Replace **bold** with <strong>
    // Replace *italic* or _italic_ with <em>
    const html = text
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/_([^_]+)_/g, '<em>$1</em>');
    return <span dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <div id="main-content" role="main" className="min-h-screen bg-gray-50 dark:bg-navy-950 transition-colors duration-300 overflow-x-hidden">
      {/* Navigation */}
      <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-white/90 dark:bg-navy-950/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 transition-colors">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.jpeg"
                alt="The Big Talk"
                width={40}
                height={40}
                priority
                className="rounded-full ring-2 ring-accent-coral/50"
              />
              <div>
                <span className="text-navy-900 dark:text-white font-bold text-sm block">THE BIG TALK</span>
                <span className="text-gray-500 dark:text-white/50 text-xs">Simplifying the talk</span>
              </div>
            </Link>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                'external' in item && item.external ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 dark:text-white/70 hover:text-navy-900 dark:hover:text-white text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-600 dark:text-white/70 hover:text-navy-900 dark:hover:text-white text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                )
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
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-navy-900 dark:text-white" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6 text-navy-900 dark:text-white" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-white/5 bg-white dark:bg-navy-950"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                'external' in item && item.external ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block w-full text-left px-4 py-3 text-gray-600 dark:text-white/70 hover:text-navy-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-gray-600 dark:text-white/70 hover:text-navy-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                  >
                    {item.name}
                  </button>
                )
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

      {/* Hero Section */}
      <section id="about" className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-4">
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
                  <button
                    onClick={() => scrollToSection('#what-we-do')}
                    className="group flex items-center gap-3 bg-white text-navy-950 px-6 py-3 rounded-full font-semibold hover:bg-accent-cyan transition-colors"
                  >
                    <span>Explore What We Do</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  <button
                    onClick={() => scrollToSection('#team')}
                    className="group flex items-center gap-3 border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all"
                  >
                    <span className="w-8 h-8 bg-accent-coral rounded-full flex items-center justify-center">
                      <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
                    </span>
                    <span>Watch Our Story</span>
                  </button>
                </div>
              </div>
            </motion.div>

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

              <button
                onClick={() => featuredVideo && setVideoModalOpen(true)}
                className="block w-full relative aspect-video rounded-2xl overflow-hidden mb-4 bg-gray-100 dark:bg-navy-800 group cursor-pointer"
              >
                <Image
                  src={featuredVideo ? getYouTubeThumbnail(featuredVideo.youtubeUrl) : "/images/Shallet_Kibet.jpeg"}
                  alt={featuredVideo?.title || "Latest video"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent-coral/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-accent-coral hover:scale-110 transition-all">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
                {featuredVideo?.duration && (
                  <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {featuredVideo.duration}
                  </span>
                )}
              </button>

              <h3 className="text-navy-900 dark:text-white font-bold mb-2">
                {featuredVideo?.title || "Understanding Public Participation"}
              </h3>
              <p className="text-gray-500 dark:text-white/50 text-sm mb-4">
                {featuredVideo?.description || "Your voice matters in governance decisions."}
              </p>

              <button
                onClick={() => featuredVideo && setVideoModalOpen(true)}
                className="text-accent-coral text-sm font-medium hover:underline flex items-center gap-1"
              >
                Watch Now <Play className="w-3 h-3" />
              </button>
            </motion.div>

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

      {/* Team Section */}
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
                    src={getImageUrl(member.image)}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
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
                <p className="text-gray-500 dark:text-white/50 text-sm line-clamp-2">{member.shortBio && renderMarkdown(member.shortBio)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Member Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-white dark:bg-navy-900 border-gray-200 dark:border-white/10">
          {selectedMember && (
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 pt-4">
              <div className="relative w-40 h-52 sm:w-60 sm:h-80 md:w-80 md:h-[420px] mx-auto sm:mx-0 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={getImageUrl(selectedMember.image)}
                  alt={selectedMember.name}
                  fill
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 240px, 320px"
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col text-center sm:text-left">
                <DialogHeader>
                  <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 dark:text-white">
                    {selectedMember.name}
                  </DialogTitle>
                  <DialogDescription className="text-accent-coral font-medium text-sm sm:text-base">
                    {selectedMember.role}
                  </DialogDescription>
                </DialogHeader>
                <p className="text-gray-600 dark:text-white/70 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-lg">
                  {renderMarkdown(selectedMember.bio)}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Impact Numbers */}
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {displayImpactStats.map((stat, index) => {
                // Parse numeric value for animation if it contains numbers
                const numericMatch = stat.value.match(/^([\d,]+)/);
                const numericValue = numericMatch ? parseInt(numericMatch[1].replace(/,/g, '')) : null;
                const suffix = stat.value.replace(/^[\d,]+/, '');

                // Alternate colors for visual variety
                const colors = [
                  'text-navy-900 dark:text-white',
                  'text-accent-coral',
                  'text-navy-900 dark:text-white',
                  'text-accent-cyan',
                ];

                return (
                  <motion.div
                    key={stat.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center px-2"
                  >
                    <p className={`text-3xl sm:text-4xl md:text-5xl font-bold ${colors[index % 4]} mb-3`}>
                      {numericValue ? (
                        <AnimatedCounter value={numericValue} suffix={suffix} />
                      ) : (
                        stat.value
                      )}
                    </p>
                    <p className="text-gray-500 dark:text-white/50 text-xs sm:text-sm">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 500,000 Signatures Achievement Section */}
      {(() => {
        const featuredAchievement = achievements.length > 0 ? achievements[0] : null;
        const achievementMetric = featuredAchievement?.metric || "500,000+";
        const metricNumericMatch = achievementMetric.match(/^([\d,]+)/);
        const metricNumericValue = metricNumericMatch ? parseInt(metricNumericMatch[1].replace(/,/g, '')) : null;
        const metricSuffix = achievementMetric.replace(/^[\d,]+/, '');

        return (
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
                {metricNumericValue ? (
                  <AnimatedCounter value={metricNumericValue} suffix={metricSuffix} />
                ) : (
                  achievementMetric
                )}
                <span className="block text-white/80 text-3xl md:text-4xl mt-2">
                  {featuredAchievement?.metricLabel || "Citizen Signatures"}
                </span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                {featuredAchievement?.description || `In a historic demonstration of civic engagement, The Big Talk mobilized over half a million
                Kenyan citizens to oppose the proposed Term Limit Bill — a bill that sought to fundamentally
                alter Kenya's democratic framework.`}
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

              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-accent-coral/30 rounded-lg" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-cyan/10 rounded-lg -z-10" />
            </motion.div>
          </div>
        </div>
      </section>
        );
      })()}

      {/* Articles Section */}
      {articles.length > 0 && (
        <section id="articles" className="py-24 px-6 bg-white dark:bg-navy-900 transition-colors">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-accent-coral font-mono text-sm mb-4 tracking-wider">
                LATEST ARTICLES
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-white">
                Insights & Analysis
              </h2>
              <p className="text-gray-500 dark:text-white/50 mt-4 max-w-2xl">
                Deep dives into civic issues, governance explainers, and thought leadership from our team.
              </p>
            </motion.div>

            {/* Category Filter Buttons */}
            {filters.length > 1 && (
              <div className="flex flex-wrap items-center gap-2 mb-10">
                {filters.map((filter) => {
                  const category = categoriesWithArticles.find(c => c.name === filter);
                  return (
                    <button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        activeFilter === filter
                          ? "text-white"
                          : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20"
                      }`}
                      style={activeFilter === filter
                        ? { backgroundColor: filter === "All" ? '#1e3a5f' : (category?.color || '#F97316') }
                        : {}
                      }
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-50 dark:bg-navy-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-accent-coral/50 transition-all"
                >
                  {article.featuredImage && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={getImageUrl(article.featuredImage)}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {article.category && (
                        <span
                          className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full"
                          style={{ backgroundColor: article.category.color || '#F97316' }}
                        >
                          {article.category.name.toUpperCase()}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    {article.publishDate && (
                      <div className="flex items-center gap-2 text-gray-500 dark:text-white/50 text-sm mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
                      </div>
                    )}
                    <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-accent-coral transition-colors">
                      {article.title}
                    </h3>
                    {article.excerpt && (
                      <p className="text-gray-600 dark:text-white/60 text-sm mb-4 line-clamp-3">
                        {renderMarkdown(article.excerpt)}
                      </p>
                    )}
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-2 text-accent-coral font-medium text-sm hover:underline"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Core Values Section */}
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
              const Icon = iconMap[value.icon as keyof typeof iconMap] || Shield;
              return (
                <motion.div
                  key={value.id}
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
                    {renderMarkdown(value.description)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-20 px-6 bg-white dark:bg-navy-900 transition-colors">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-accent-coral font-mono text-sm mb-4 tracking-wider">
              WHAT WE DO
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-white mb-4">
              Our Content Pillars
            </h2>
            <p className="text-gray-600 dark:text-white/60 max-w-3xl mx-auto text-lg">
              We break down bills, policies, political debates, and public processes into clear and relatable conversations.
              <span className="font-medium text-navy-900 dark:text-white"> Hakuna maneno mingi. Hakuna propaganda.</span> Just truth, clarity, and context.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Civic Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-navy-800/50 rounded-2xl p-8 border border-emerald-200 dark:border-emerald-500/20 h-full"
            >
              <div className="w-14 h-14 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">
                Civic Education
              </h3>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium mb-4">
                To build an informed, empowered citizenry
              </p>
              <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-4">
                Kenya&apos;s evolving democratic landscape demands informed citizen engagement. Civic education is the foundation of a functioning democracy.
              </p>
              <p className="text-gray-600 dark:text-white/70 leading-relaxed">
                It equips Kenyans with the knowledge to understand their rights, responsibilities, and the systems that govern them. Without it, citizens are vulnerable to manipulation, misinformation, and apathy.
              </p>
            </motion.div>

            {/* Explainer */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-navy-800/50 rounded-2xl p-8 border border-blue-200 dark:border-blue-500/20 h-full"
            >
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">
                Explainer
              </h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                Because clarity is power
              </p>
              <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-4">
                Governance is often wrapped in jargon, legalese, and emotion. Deep-dive explainers break down bills, policies, and political debates into simple, relatable language.
              </p>
              <p className="text-gray-600 dark:text-white/70 leading-relaxed">
                Making civic content accessible to all — so every Kenyan can understand the decisions that affect their daily lives.
              </p>
            </motion.div>

            {/* Trends */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-navy-800/50 rounded-2xl p-8 border border-purple-200 dark:border-purple-500/20 h-full"
            >
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">
                Trends
              </h3>
              <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
                To stay relevant, responsive, and impactful
              </p>
              <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-4">
                Civic education must reflect the issues Kenyans are facing now — from controversial bills to youth-led movements.
              </p>
              <p className="text-gray-600 dark:text-white/70 leading-relaxed">
                By aligning content with current governance trends, we meet people where they are and ensure our work drives real impact.
              </p>
            </motion.div>
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-navy-900 dark:bg-navy-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
                We exist to build a culture of <span className="text-accent-coral font-semibold">truth over noise</span>, <span className="text-accent-cyan font-semibold">knowledge over fear</span>, and <span className="text-accent-gold font-semibold">action over apathy</span>.
              </p>
              <p className="text-white font-bold text-xl md:text-2xl">
                We don&apos;t just talk about problems — we spark solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" role="contentinfo" aria-label="Site footer" className="bg-navy-950 border-t border-white/10 py-16 px-6">
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
                  { name: "Articles", href: "#articles" },
                  { name: "Videos", href: "/videos", external: true },
                  { name: "Contact", href: "#contact" },
                ].map((item) => (
                  <li key={item.name}>
                    {'external' in item && item.external ? (
                      <Link
                        href={item.href}
                        className="text-white/50 hover:text-accent-coral text-sm transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-white/50 hover:text-accent-coral text-sm transition-colors"
                      >
                        {item.name}
                      </button>
                    )}
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
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-4 text-center md:text-left">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} The Big Talk
            </p>
            <p className="text-white/40 text-xs md:text-sm">
              Making governance accessible for all Kenyans
            </p>
            <p className="text-white/40 text-sm">
              Nairobi, Kenya
            </p>
          </div>
        </div>
      </footer>

      {/* Video Modal for Featured Video */}
      {featuredVideo && (
        <VideoModal
          isOpen={videoModalOpen}
          onClose={() => setVideoModalOpen(false)}
          youtubeUrl={featuredVideo.youtubeUrl}
          title={featuredVideo.title}
        />
      )}
    </div>
  );
}
