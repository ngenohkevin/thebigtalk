// Strapi API utilities for fetching content

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

interface StrapiMedia {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

// Helper to get image URL (handles both relative and absolute URLs)
export function getStrapiMediaUrl(media: StrapiMedia | null): string {
  if (!media?.url) return '';
  if (media.url.startsWith('http')) return media.url;
  return `${STRAPI_URL}${media.url}`;
}

// Generic fetch function
async function fetchStrapi<T>(
  endpoint: string,
  params?: Record<string, string>,
  options?: {
    revalidate?: number;
    cache?: RequestCache;
  }
): Promise<StrapiResponse<T>> {
  const url = new URL(`${STRAPI_URL}/api${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
  };

  if (STRAPI_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_TOKEN}`;
  }

  const res = await fetch(url.toString(), {
    headers,
    next: { revalidate: options?.revalidate ?? 3600 }, // Default: 1 hour
    cache: options?.cache,
  });

  if (!res.ok) {
    throw new Error(`Strapi API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// Type definitions matching our Strapi schema
export interface TeamMember {
  id: number;
  documentId: string;
  name: string;
  role: string;
  image: StrapiMedia;
  bio: string;
  shortBio?: string;
  order: number;
  isActive: boolean;
}

export interface ExplainerVideo {
  id: number;
  documentId: string;
  title: string;
  description?: string;
  youtubeUrl: string;
  pillar: 'civic-education' | 'explainer' | 'trends';
  publishDate?: string;
  isFeatured: boolean;
  order: number;
  duration?: string;
  category?: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface ImpactStat {
  id: number;
  documentId: string;
  value: string;
  label: string;
  description?: string;
  order: number;
  isVisible: boolean;
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featuredImage?: StrapiMedia;
  pillar?: 'civic-education' | 'explainer' | 'trends';
  publishDate?: string;
  isPublished: boolean;
  tags?: string[];
  author?: TeamMember;
  category?: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Category {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
}

export interface CoreValue {
  id: number;
  documentId: string;
  name: string;
  description: string;
  icon: 'shield' | 'lightbulb' | 'scale' | 'users' | 'target';
  order: number;
}

export interface Achievement {
  id: number;
  documentId: string;
  title: string;
  metric: string;
  metricLabel?: string;
  description?: string;
  impact?: string;
  isFeatured: boolean;
  order: number;
}

export interface SiteSettings {
  id: number;
  documentId: string;
  siteName: string;
  tagline?: string;
  logo?: StrapiMedia;
  mission?: string;
  vision?: string;
  about?: string;
  tiktokUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  facebookUrl?: string;
  youtubeUrl?: string;
}

// API functions
export async function getTeamMembers() {
  return fetchStrapi<TeamMember[]>('/team-members', {
    'populate': 'image',
    'filters[isActive][$eq]': 'true',
    'sort': 'order:asc',
  });
}

export async function getExplainerVideos(options?: { featured?: boolean; pillar?: string }) {
  const params: Record<string, string> = {
    'populate': 'category',
    'sort': 'order:asc',
  };

  if (options?.featured) {
    params['filters[isFeatured][$eq]'] = 'true';
  }

  if (options?.pillar) {
    params['filters[pillar][$eq]'] = options.pillar;
  }

  return fetchStrapi<ExplainerVideo[]>('/explainer-videos', params);
}

export async function getImpactStats() {
  return fetchStrapi<ImpactStat[]>('/impact-stats', {
    'filters[isVisible][$eq]': 'true',
    'sort': 'order:asc',
  });
}

export async function getArticles(options?: { pillar?: string; category?: string }) {
  const params: Record<string, string> = {
    'populate': 'featuredImage,author,category',
    'filters[isPublished][$eq]': 'true',
    'sort': 'publishDate:desc',
  };

  if (options?.pillar) {
    params['filters[pillar][$eq]'] = options.pillar;
  }

  if (options?.category) {
    params['filters[category][slug][$eq]'] = options.category;
  }

  return fetchStrapi<Article[]>('/articles', params);
}

export async function getArticleBySlug(slug: string) {
  const response = await fetchStrapi<Article[]>('/articles', {
    'populate': 'featuredImage,author,category',
    'filters[slug][$eq]': slug,
  });
  return response.data?.[0] || null;
}

export async function getCategories() {
  return fetchStrapi<Category[]>('/categories', {
    'sort': 'name:asc',
  });
}

export async function getCoreValues() {
  return fetchStrapi<CoreValue[]>('/core-values', {
    'sort': 'order:asc',
  });
}

export async function getAchievements(options?: { featured?: boolean }) {
  const params: Record<string, string> = {
    'sort': 'order:asc',
  };

  if (options?.featured) {
    params['filters[isFeatured][$eq]'] = 'true';
  }

  return fetchStrapi<Achievement[]>('/achievements', params);
}

export async function getSiteSettings() {
  return fetchStrapi<SiteSettings>('/site-setting', {
    'populate': 'logo',
  });
}

// Helper to extract YouTube video ID from URL
export function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

// Helper to get YouTube thumbnail
export function getYouTubeThumbnail(url: string, quality: 'default' | 'medium' | 'high' | 'maxres' = 'high'): string {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) return '';

  const qualityMap = {
    default: 'default',
    medium: 'mqdefault',
    high: 'hqdefault',
    maxres: 'maxresdefault',
  };

  return `https://img.youtube.com/vi/${videoId}/${qualityMap[quality]}.jpg`;
}
