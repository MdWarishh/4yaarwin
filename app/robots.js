export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Disallow private or repetitive folders if any (e.g., api routes)
        disallow: ['/api/', '/_next/'], 
      },
      {
        // Specifically telling Googlebot to be more aggressive with indexing
        userAgent: 'Googlebot',
        allow: '/',
      }
    ],
    sitemap: 'https://www.4yaarwin.tech/sitemap.xml',
  };
}