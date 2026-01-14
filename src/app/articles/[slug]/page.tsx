import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { getArticleBySlug, getStrapiMediaUrl } from "@/lib/strapi";
import { ArrowLeft, Calendar, User } from "lucide-react";
import ShareButtons from "@/components/ShareButtons";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebigtalk.iopulse.cloud";
const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || "https://thebigtalk-cms.iopulse.cloud";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const featuredImageUrl = article.featuredImage
    ? getStrapiMediaUrl(article.featuredImage)
    : null;

  // Generate JSON-LD structured data for the article
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt || `Read ${article.title} on The Big Talk`,
    image: featuredImageUrl ? (featuredImageUrl.startsWith("http") ? featuredImageUrl : `${strapiUrl}${featuredImageUrl}`) : `${siteUrl}/images/logo.jpeg`,
    datePublished: article.publishDate || new Date().toISOString(),
    dateModified: article.publishDate || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: article.author?.name || "The Big Talk Team",
      jobTitle: article.author?.role,
    },
    publisher: {
      "@type": "Organization",
      name: "The Big Talk",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.jpeg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/articles/${slug}`,
    },
    keywords: article.tags?.join(", ") || "civic education, Kenya, governance",
    articleSection: article.category?.name || "Civic Education",
  };

  return (
    <>
      <Script
        id="article-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    <main id="main-content" className="min-h-screen bg-white dark:bg-navy-950 transition-colors">
      {/* Header */}
      <header className="bg-navy-900 dark:bg-navy-950 text-white py-6 px-6 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/#articles"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Category */}
        {article.category && (
          <div className="flex items-center gap-3 mb-6">
            <span
              className="text-white text-xs font-bold px-3 py-1 rounded-full uppercase"
              style={{ backgroundColor: article.category.color || '#F97316' }}
            >
              {article.category.name}
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 dark:text-white mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-gray-500 dark:text-white/50 mb-8 pb-8 border-b border-gray-200 dark:border-white/10">
          {article.publishDate && (
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {new Date(article.publishDate).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          )}
          {article.author && (
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{article.author.name}</span>
              {article.author.role && (
                <span className="text-gray-400 dark:text-white/30">
                  • {article.author.role}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Featured Image */}
        {featuredImageUrl && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-10">
            <Image
              src={featuredImageUrl}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Excerpt */}
        {article.excerpt && (
          <p
            className="text-xl text-gray-600 dark:text-white/70 mb-8 leading-relaxed font-medium"
            dangerouslySetInnerHTML={{
              __html: article.excerpt
                .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                .replace(/\*([^*]+)\*/g, '<em>$1</em>')
            }}
          />
        )}

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-navy-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-white/70 prose-a:text-accent-coral prose-strong:text-navy-900 dark:prose-strong:text-white prose-ul:text-gray-600 dark:prose-ul:text-white/70 prose-ol:text-gray-600 dark:prose-ol:text-white/70">
          {/* Render markdown content */}
          {article.content.split("\n").map((paragraph, index) => {
            const trimmed = paragraph.trim();
            if (!trimmed) return null;

            // Handle headers
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }

            // Handle list items
            if (trimmed.startsWith("- ")) {
              return (
                <li key={index} className="ml-6 list-disc">
                  {trimmed.replace("- ", "")}
                </li>
              );
            }

            // Handle numbered list items
            const numberedMatch = trimmed.match(/^(\d+)\.\s(.+)/);
            if (numberedMatch) {
              return (
                <li key={index} className="ml-6 list-decimal">
                  {numberedMatch[2]}
                </li>
              );
            }

            // Regular paragraph - handle bold and italic text
            const processedText = trimmed
              .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
              .replace(/\*([^*]+)\*/g, '<em>$1</em>')
              .replace(/_([^_]+)_/g, '<em>$1</em>');

            return (
              <p
                key={index}
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: processedText }}
              />
            );
          })}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
            <h4 className="text-sm font-bold text-gray-500 dark:text-white/50 uppercase mb-4">
              Tags
            </h4>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share Buttons */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
          <ShareButtons
            url={`${siteUrl}/articles/${slug}`}
            title={article.title}
            description={article.excerpt}
          />
        </div>

        {/* Back Link */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-white/10 flex items-center justify-between">
          <Link
            href="/#articles"
            className="inline-flex items-center gap-2 text-accent-coral hover:underline font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </article>
    </main>
    </>
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The article you're looking for could not be found.",
    };
  }

  const featuredImageUrl = article.featuredImage
    ? getStrapiMediaUrl(article.featuredImage)
    : null;

  const imageUrl = featuredImageUrl
    ? (featuredImageUrl.startsWith("http") ? featuredImageUrl : `${strapiUrl}${featuredImageUrl}`)
    : `${siteUrl}/images/logo.jpeg`;

  return {
    title: article.title,
    description: article.excerpt || `Read ${article.title} - In-depth civic education content from The Big Talk Kenya.`,
    keywords: [
      ...(article.tags || []),
      article.category?.name || "civic education",
      "Kenya",
      "governance",
      "The Big Talk",
    ],
    authors: article.author ? [{ name: article.author.name }] : [{ name: "The Big Talk Team" }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt || `Read ${article.title} on The Big Talk`,
      url: `${siteUrl}/articles/${slug}`,
      siteName: "The Big Talk",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      publishedTime: article.publishDate,
      authors: article.author ? [article.author.name] : ["The Big Talk Team"],
      section: article.category?.name || "Civic Education",
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt || `Read ${article.title} on The Big Talk`,
      images: [imageUrl],
      site: "@thebigtalkke",
      creator: "@thebigtalkke",
    },
    alternates: {
      canonical: `${siteUrl}/articles/${slug}`,
    },
  };
}
