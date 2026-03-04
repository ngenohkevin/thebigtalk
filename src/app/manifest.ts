import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Big Talk - Civic Education Platform",
    short_name: "The Big Talk",
    description:
      "Kenya's leading civic education platform. Simplifying governance, explaining policies, and empowering citizens.",
    start_url: "/",
    display: "standalone",
    background_color: "#0a1628",
    theme_color: "#0a1628",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "152x152",
        type: "image/png",
      },
    ],
  };
}
