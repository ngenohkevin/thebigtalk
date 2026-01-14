import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://thebigtalk.iopulse.cloud";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Big Talk | Civic Education Platform for Kenya",
    template: "%s | The Big Talk",
  },
  description:
    "Kenya's leading civic education platform. We simplify governance, explain policies, and empower citizens to participate in democracy. 500,000+ signatures mobilized for civic action.",
  keywords: [
    "civic education Kenya",
    "Kenyan governance",
    "democracy Kenya",
    "public participation Kenya",
    "civic engagement",
    "Kenya politics explained",
    "government accountability",
    "citizen rights Kenya",
    "constitution Kenya",
    "policy explainers",
    "The Big Talk",
    "civic action",
    "youth civic engagement",
    "Kenya elections",
    "public policy Kenya",
  ],
  authors: [{ name: "The Big Talk Team" }],
  creator: "The Big Talk",
  publisher: "The Big Talk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: siteUrl,
    siteName: "The Big Talk",
    title: "The Big Talk | Civic Education Platform for Kenya",
    description:
      "Kenya's leading civic education platform. Simplifying governance, explaining policies, and empowering citizens. 500,000+ signatures mobilized for civic action.",
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "The Big Talk - Simplifying the talk. Sparking the change.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Big Talk | Civic Education Platform for Kenya",
    description:
      "Kenya's leading civic education platform. Simplifying governance and empowering citizens.",
    site: "@thebigtalkke",
    creator: "@thebigtalkke",
    images: ["/images/logo.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "education",
};

// Organization structured data for SEO
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Big Talk",
  alternateName: "The Big Talk Kenya",
  url: "https://thebigtalk.iopulse.cloud",
  logo: "https://thebigtalk.iopulse.cloud/images/logo.jpeg",
  description:
    "Kenya's leading civic education platform. We simplify governance, explain policies, and empower citizens to participate in democracy.",
  foundingDate: "2023",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [
    "https://tiktok.com/@thebigtalkke",
    "https://instagram.com/thebigtalkke",
    "https://x.com/thebigtalkke",
    "https://facebook.com/thebigtalkke",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Swahili"],
  },
};

// Website structured data
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The Big Talk",
  url: "https://thebigtalk.iopulse.cloud",
  description: "Kenya's leading civic education platform",
  publisher: {
    "@type": "Organization",
    name: "The Big Talk",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://thebigtalk.iopulse.cloud/articles?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// Umami Analytics configuration
const umamiWebsiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
const umamiUrl = process.env.NEXT_PUBLIC_UMAMI_URL || "https://analytics.iopulse.cloud";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Umami Analytics */}
        {umamiWebsiteId && (
          <Script
            src={`${umamiUrl}/script.js`}
            data-website-id={umamiWebsiteId}
            strategy="afterInteractive"
          />
        )}
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-coral focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
