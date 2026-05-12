export default function SchemaOrg() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '4YaarWin',
    url: 'https://www.4yaarwin.com',
    logo: 'https://www.4yaarwin.com/logo.webp',
    description: 'Official 4YaarWin gaming platform – play, register, and win online.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@4yaarwin.com',
    },
    sameAs: ['https://4yaarwin.tech'],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '4YaarWin Official',
    url: 'https://www.4yaarwin.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://www.4yaarwin.com/?s={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
