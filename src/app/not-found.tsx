import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-gray-50 dark:bg-navy-950 flex items-center justify-center px-6" role="main" aria-labelledby="error-heading">
      <div className="max-w-xl text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/logo.jpeg"
            alt="The Big Talk"
            width={80}
            height={80}
            className="rounded-full ring-4 ring-accent-coral/30"
          />
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-navy-900 dark:text-white mb-4">
          4<span className="text-accent-coral">0</span>4
        </h1>

        <h2 id="error-heading" className="text-2xl md:text-3xl font-bold text-navy-900 dark:text-white mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 dark:text-white/60 mb-8 text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 bg-accent-coral hover:bg-accent-coral/90 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>

          <Link
            href="/#articles"
            className="flex items-center gap-2 bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-navy-900 dark:text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            <Search className="w-5 h-5" />
            Browse Articles
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
          <p className="text-sm text-gray-500 dark:text-white/50 mb-4">
            Or try one of these sections:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { name: "About", href: "/#about" },
              { name: "Team", href: "/#team" },
              { name: "Impact", href: "/#impact" },
              { name: "Videos", href: "/videos" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-600 dark:text-white/70 hover:text-accent-coral dark:hover:text-accent-coral px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10 hover:border-accent-coral/50 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
