import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { projects } from '@/lib/projects';
export default function sitemap(): MetadataRoute.Sitemap { return [{url:site.url,changeFrequency:'monthly',priority:1},...projects.map(project=>({url:`${site.url}/work/${project.slug}`,changeFrequency:'monthly' as const,priority:0.8}))]; }
