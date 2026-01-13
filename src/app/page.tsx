import HomeClient from "@/components/HomeClient";
import { getTeamMembers, getCoreValues, getArticles, getCategories } from "@/lib/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://thebigtalk-cms.iopulse.cloud";

export default async function Home() {
  // Fetch data from Strapi
  const [teamMembersRes, coreValuesRes, articlesRes, categoriesRes] = await Promise.all([
    getTeamMembers().catch(() => ({ data: [] })),
    getCoreValues().catch(() => ({ data: [] })),
    getArticles().catch(() => ({ data: [] })),
    getCategories().catch(() => ({ data: [] })),
  ]);

  return (
    <HomeClient
      teamMembers={teamMembersRes.data || []}
      coreValues={coreValuesRes.data || []}
      articles={articlesRes.data || []}
      categories={categoriesRes.data || []}
      strapiUrl={STRAPI_URL}
    />
  );
}
