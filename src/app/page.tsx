import HomeClient from "@/components/HomeClient";
import { getTeamMembers, getCoreValues, getArticles } from "@/lib/strapi";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "https://thebigtalk-cms.iopulse.cloud";

export default async function Home() {
  // Fetch data from Strapi
  const [teamMembersRes, coreValuesRes, articlesRes] = await Promise.all([
    getTeamMembers().catch(() => ({ data: [] })),
    getCoreValues().catch(() => ({ data: [] })),
    getArticles().catch(() => ({ data: [] })),
  ]);

  return (
    <HomeClient
      teamMembers={teamMembersRes.data || []}
      coreValues={coreValuesRes.data || []}
      articles={articlesRes.data || []}
      strapiUrl={STRAPI_URL}
    />
  );
}
