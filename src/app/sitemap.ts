import { MetadataRoute } from "next";
import { getArticles, getCategories } from "@/lib/strapi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebigtalk.iopulse.cloud";

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Fetch articles from Strapi
  let articlePages: MetadataRoute.Sitemap = [];
  try {
    const articlesRes = await getArticles();
    const articles = articlesRes.data || [];

    articlePages = articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: article.publishDate ? new Date(article.publishDate) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));
  } catch (error) {
    console.error("Error fetching articles for sitemap:", error);
  }

  // Fetch categories from Strapi
  let categoryPages: MetadataRoute.Sitemap = [];
  try {
    const categoriesRes = await getCategories();
    const categories = categoriesRes.data || [];

    categoryPages = categories.map((category) => ({
      url: `${siteUrl}/articles?category=${category.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error fetching categories for sitemap:", error);
  }

  return [...staticPages, ...articlePages, ...categoryPages];
}
