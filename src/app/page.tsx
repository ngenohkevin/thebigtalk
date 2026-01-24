import HomeClient from "@/components/HomeClient";
import {
  getTeamMembers,
  getCoreValues,
  getArticles,
  getCategories,
  getExplainerVideos,
  getImpactStats,
  getAchievements,
  getSiteSettings,
  getContentPillars,
} from "@/lib/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://thebigtalk-cms.iopulse.cloud";

export default async function Home() {
  // Fetch all data from Strapi
  const [
    teamMembersRes,
    coreValuesRes,
    articlesRes,
    categoriesRes,
    explainerVideosRes,
    impactStatsRes,
    achievementsRes,
    siteSettingsRes,
    contentPillarsRes,
  ] = await Promise.all([
    getTeamMembers().catch(() => ({ data: [] })),
    getCoreValues().catch(() => ({ data: [] })),
    getArticles().catch(() => ({ data: [] })),
    getCategories().catch(() => ({ data: [] })),
    getExplainerVideos({ featured: true }).catch(() => ({ data: [] })),
    getImpactStats().catch(() => ({ data: [] })),
    getAchievements({ featured: true }).catch(() => ({ data: [] })),
    getSiteSettings().catch(() => ({ data: null })),
    getContentPillars().catch(() => ({ data: [] })),
  ]);

  return (
    <HomeClient
      teamMembers={teamMembersRes.data || []}
      coreValues={coreValuesRes.data || []}
      articles={articlesRes.data || []}
      categories={categoriesRes.data || []}
      explainerVideos={explainerVideosRes.data || []}
      impactStats={impactStatsRes.data || []}
      achievements={achievementsRes.data || []}
      siteSettings={siteSettingsRes.data || null}
      contentPillars={contentPillarsRes.data || []}
      strapiUrl={STRAPI_URL}
    />
  );
}
