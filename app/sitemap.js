export default function sitemap() {
  const baseUrl = 'https://www.4yaarwin.tech';

  const routes = [
    { url: '/', changeFrequency: 'daily', priority: 1.0 },
    { url: '/login', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/register', changeFrequency: 'weekly', priority: 0.9 },
    { url: '/about', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/contact', changeFrequency: 'monthly', priority: 0.6 },
    { url: '/privacy-policy', changeFrequency: 'yearly', priority: 0.4 },
    { url: '/terms', changeFrequency: 'yearly', priority: 0.4 },
    { url: '/disclaimer', changeFrequency: 'yearly', priority: 0.4 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
