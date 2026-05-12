export default function sitemap() {
  const baseUrl = 'https://www.4yaarwin.tech';

  const routes = [
    // Main landing page - Sabse high priority
    { url: '/', changeFrequency: 'daily', priority: 1.0 },
    
    // Core interaction pages - High priority for ranking
    { url: '/login', changeFrequency: 'daily', priority: 0.9 },
    { url: '/register', changeFrequency: 'daily', priority: 0.9 },
    
    // Informational pages
    { url: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { url: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { url: '/responsible-gaming', changeFrequency: 'monthly', priority: 0.8 },
    
    // Compliance pages - Lower priority as per SEO standards
    { url: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
    { url: '/terms', changeFrequency: 'yearly', priority: 0.3 },
    { url: '/disclaimer', changeFrequency: 'yearly', priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date().toISOString(), // Standard ISO format for Google
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}