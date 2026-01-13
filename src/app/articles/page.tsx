import Link from "next/link";
import Image from "next/image";
import { getArticles, getCategories, getStrapiMediaUrl } from "@/lib/strapi";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://thebigtalk-cms.iopulse.cloud";

interface PageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function ArticlesPage({ searchParams }: PageProps) {
  const { category } = await searchParams;

  const [articlesRes, categoriesRes] = await Promise.all([
    getArticles({ category }).catch(() => ({ data: [] })),
    getCategories().catch(() => ({ data: [] })),
  ]);

  const articles = articlesRes.data || [];
  const categories = categoriesRes.data || [];
  const activeCategory = categories.find(c => c.slug === category);

  const getImageUrl = (image: { url: string } | null) => {
    if (!image?.url) return null;
    if (image.url.startsWith("http")) return image.url;
    return `${STRAPI_URL}${image.url}`;
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-navy-950 transition-colors">
      {/* Header */}
      <header className="bg-navy-900 dark:bg-navy-950 text-white py-8 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">
            {activeCategory ? activeCategory.name : "All Articles"}
          </h1>
          {activeCategory?.description && (
            <p className="text-white/60 mt-2 max-w-2xl">{activeCategory.description}</p>
          )}
        </div>
      </header>

      {/* Category Filters */}
      <div className="bg-white dark:bg-navy-900 border-b border-gray-200 dark:border-white/10 py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          <Link
            href="/articles"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !category
                ? "bg-navy-900 dark:bg-white text-white dark:text-navy-950"
                : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20"
            }`}
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/articles?category=${cat.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category === cat.slug
                  ? "text-white"
                  : "bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white/70 hover:bg-gray-200 dark:hover:bg-white/20"
              }`}
              style={category === cat.slug ? { backgroundColor: cat.color || '#F97316' } : {}}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {articles.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-white/50 text-lg">
              No articles found{activeCategory ? ` in ${activeCategory.name}` : ""}.
            </p>
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-accent-coral mt-4 hover:underline"
            >
              View all articles
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => {
              const imageUrl = article.featuredImage ? getImageUrl(article.featuredImage) : null;
              return (
                <article
                  key={article.id}
                  className="group bg-white dark:bg-navy-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-accent-coral/50 transition-all"
                >
                  {imageUrl && (
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={imageUrl}
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
                        <span>
                          {new Date(article.publishDate).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    )}
                    <h2 className="text-xl font-bold text-navy-900 dark:text-white mb-3 group-hover:text-accent-coral transition-colors">
                      {article.title}
                    </h2>
                    {article.excerpt && (
                      <p className="text-gray-600 dark:text-white/60 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                    )}
                    <Link
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center gap-2 text-accent-coral font-medium text-sm hover:underline"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}

export async function generateMetadata({ searchParams }: PageProps) {
  const { category } = await searchParams;

  if (category) {
    const categoriesRes = await getCategories().catch(() => ({ data: [] }));
    const cat = categoriesRes.data?.find(c => c.slug === category);
    if (cat) {
      return {
        title: `${cat.name} Articles | The Big Talk`,
        description: cat.description || `Articles about ${cat.name}`,
      };
    }
  }

  return {
    title: "Articles | The Big Talk",
    description: "Insights, analysis, and civic education content from The Big Talk",
  };
}
