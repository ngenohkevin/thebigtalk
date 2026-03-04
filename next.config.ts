import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thebigtalk-cms.iopulse.cloud',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'thebigtalk-cms.iopulse.cloud',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/vi/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect old subdomain to new domain
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "thebigtalk.iopulse.cloud",
          },
        ],
        destination: "https://thebigtalk.org/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
