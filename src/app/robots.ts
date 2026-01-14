import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebigtalk.iopulse.cloud";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/design-1", "/design-2", "/design-3", "/design-4", "/design-5", "/design-6"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
