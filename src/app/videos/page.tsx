import Link from "next/link";
import { getExplainerVideos, getCategories } from "@/lib/strapi";
import { ArrowLeft, Play } from "lucide-react";
import type { Metadata } from "next";
import VideoGrid from "@/components/VideoGrid";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebigtalk.iopulse.cloud";

export const metadata: Metadata = {
  title: "Explainer Videos",
  description:
    "Watch civic education explainer videos from The Big Talk. Understanding governance, policies, and your rights as a Kenyan citizen made simple.",
  keywords: [
    "civic education videos",
    "Kenya governance explained",
    "policy explainers",
    "civic engagement videos",
    "The Big Talk videos",
  ],
  openGraph: {
    title: "Explainer Videos | The Big Talk",
    description: "Watch civic education explainer videos from The Big Talk Kenya.",
    url: `${siteUrl}/videos`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Explainer Videos | The Big Talk",
    description: "Watch civic education explainer videos from The Big Talk Kenya.",
  },
  alternates: {
    canonical: `${siteUrl}/videos`,
  },
};

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function VideosPage({ searchParams }: PageProps) {
  const { category } = await searchParams;

  const [videosRes, categoriesRes] = await Promise.all([
    getExplainerVideos({ category }).catch(() => ({ data: [] })),
    getCategories().catch(() => ({ data: [] })),
  ]);

  const videos = videosRes.data || [];
  const categories = categoriesRes.data || [];

  // Get categories that have videos
  const categoriesWithVideos = categories.filter((cat) =>
    videos.some((video) => video.category?.slug === cat.slug)
  );

  return (
    <main id="main-content" className="min-h-screen bg-white dark:bg-navy-950 transition-colors">
      {/* Header */}
      <header className="bg-navy-900 dark:bg-navy-950 text-white py-12 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explainer Videos</h1>
          <p className="text-white/70 text-lg max-w-2xl">
            Understanding governance, policies, and your civic rights made simple through
            our educational video content.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Category Filter */}
        {categoriesWithVideos.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <Link
              href="/videos"
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                !category
                  ? "bg-navy-900 dark:bg-white text-white dark:text-navy-950"
                  : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20"
              }`}
            >
              All Videos
            </Link>
            {categoriesWithVideos.map((cat) => (
              <Link
                key={cat.slug}
                href={`/videos?category=${cat.slug}`}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  category === cat.slug
                    ? "text-white"
                    : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20"
                }`}
                style={
                  category === cat.slug
                    ? { backgroundColor: cat.color || "#F97316" }
                    : {}
                }
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {videos.length > 0 ? (
          <VideoGrid videos={videos} />
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-gray-400 dark:text-white/30" />
            </div>
            <h3 className="text-xl font-bold text-navy-900 dark:text-white mb-2">
              No Videos Yet
            </h3>
            <p className="text-gray-600 dark:text-white/60 mb-6">
              {category
                ? "No videos found in this category. Check back soon!"
                : "Videos are coming soon. Check back later!"}
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-accent-coral hover:underline font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to homepage
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
