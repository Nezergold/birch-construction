import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

export function SEO({
  title = 'Birch Construction - Premier Construction Services in Minnesota',
  description = 'Birch Construction offers expert residential and commercial construction services in Deer Creek, Minnesota. Quality craftsmanship, on-time delivery, and 29+ years of experience. Contact us for a free quote!',
  keywords = 'construction company Minnesota, residential construction, commercial construction, home builders Deer Creek MN, renovation services, construction contractor, building services Minnesota, quality construction',
  ogImage = 'https://images.unsplash.com/photo-1761115176718-8b7a6191ece3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200'
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const metaTags = [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'Birch Construction' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      
      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: ogImage },
      { property: 'og:site_name', content: 'Birch Construction' },
      
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: ogImage },
      
      // Business/Local SEO
      { name: 'geo.region', content: 'US-MN' },
      { name: 'geo.placename', content: 'Deer Creek, Minnesota' },
      { name: 'geo.position', content: '46.123456;-95.123456' },
      
      // Additional SEO
      { name: 'theme-color', content: '#D4AF37' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const attributeValue = name || property;
      
      let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attributeValue!);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    });

    // Add JSON-LD structured data for local business
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'GeneralContractor',
      'name': 'Birch Construction',
      'description': description,
      'url': window.location.origin,
      'telephone': '+1-218-639-3166',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '57472 MN-29',
        'addressLocality': 'Deer Creek',
        'addressRegion': 'MN',
        'postalCode': '56527',
        'addressCountry': 'US'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '46.123456',
        'longitude': '-95.123456'
      },
      'openingHoursSpecification': [
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          'opens': '07:00',
          'closes': '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          'dayOfWeek': 'Saturday',
          'opens': '08:00',
          'closes': '16:00'
        }
      ],
      'priceRange': '$$',
      'image': ogImage,
      'aggregateRating': {
        '@type': 'AggregateRating',
        'ratingValue': '5.0',
        'reviewCount': '127'
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, ogImage]);

  return null;
}
