"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Calendar, ExternalLink } from "lucide-react";
import VideoModal from "./VideoModal";
import { getYouTubeThumbnail } from "@/lib/strapi";

interface Video {
  id: number;
  title: string;
  description?: string;
  youtubeUrl: string;
  duration?: string;
  publishDate?: string;
  isFeatured?: boolean;
  category?: {
    name: string;
    slug: string;
    color?: string;
  };
}

interface VideoGridProps {
  videos: Video[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <button
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className="group bg-gray-50 dark:bg-navy-800/50 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-accent-coral/50 transition-all text-left"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={getYouTubeThumbnail(video.youtubeUrl)}
                alt={video.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                <div className="w-16 h-16 bg-accent-coral/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white ml-1" fill="white" />
                </div>
              </div>
              {/* Duration */}
              {video.duration && (
                <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </span>
              )}
              {/* Category Badge */}
              {video.category && (
                <span
                  className="absolute top-3 left-3 text-white text-xs font-bold px-2 py-1 rounded-full"
                  style={{ backgroundColor: video.category.color || "#F97316" }}
                >
                  {video.category.name}
                </span>
              )}
              {/* Featured Badge */}
              {video.isFeatured && (
                <span className="absolute top-3 right-3 bg-accent-gold text-navy-950 text-xs font-bold px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-bold text-navy-900 dark:text-white mb-2 group-hover:text-accent-coral transition-colors line-clamp-2">
                {video.title}
              </h3>

              {video.description && (
                <p className="text-gray-600 dark:text-white/60 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
              )}

              <div className="flex items-center justify-between">
                {video.publishDate && (
                  <div className="flex items-center gap-1.5 text-gray-500 dark:text-white/50 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(video.publishDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                )}
                <span className="flex items-center gap-1 text-accent-coral text-sm font-medium">
                  Watch <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        youtubeUrl={selectedVideo?.youtubeUrl || ""}
        title={selectedVideo?.title || ""}
      />
    </>
  );
}
