import { MetadataRoute } from 'next';
import nichesData from '@/data/niches.json';
import stedenData from '@/data/steden.json';
import casesData from '@/data/cases.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://hazier.be';

  // Static pages
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/diensten/seo`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/webdesign`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/diensten/programmatic-seo`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/prijzen`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // SEO niche pages
  const seoNichePages = nichesData.map((niche) => ({
    url: `${baseUrl}/diensten/seo/bedrijven/${niche.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // SEO stad pages
  const seoStadPages = stedenData.map((stad) => ({
    url: `${baseUrl}/diensten/seo/locaties/${stad.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Webdesign niche pages
  const webdesignNichePages = nichesData.map((niche) => ({
    url: `${baseUrl}/diensten/webdesign/bedrijven/${niche.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Webdesign stad pages
  const webdesignStadPages = stedenData.map((stad) => ({
    url: `${baseUrl}/diensten/webdesign/locaties/${stad.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Case pages
  const casePages = casesData.map((caseItem) => ({
    url: `${baseUrl}/cases/${caseItem.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...seoNichePages,
    ...seoStadPages,
    ...webdesignNichePages,
    ...webdesignStadPages,
    ...casePages,
  ];
}