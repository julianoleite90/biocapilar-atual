import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'
import UTMHandler from './components/UTMHandler'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.biocapilaroficial.com'),
  title: 'Biocapilar® - Acabe com a Queda de Cabelo em 4 Semanas | Fórmula #1 da América Latina',
  description: 'Acabe com a queda dos cabelos em até 4 semanas, e acelere o crescimento de novos fios, com o Biocapilar. A fórmula capilar mais usada e recomendada da América Latina.',
  keywords: 'biocapilar, queda de cabelo, crescimento capilar, suplemento capilar, queda cabelos mulher, calvicie feminina, alopecia, biotina, colágeno capilar, vitaminas cabelo, tratamento queda cabelo, fortalecer cabelos, cabelos fracos, cabelos finos, crescer cabelo rapido',
  alternates: {
    canonical: 'https://www.biocapilaroficial.com'
  },
  openGraph: {
    title: 'Biocapilar® - Acabe com a Queda de Cabelo em 4 Semanas | Fórmula #1 da América Latina',
    description: 'Acabe com a queda dos cabelos em até 4 semanas, e acelere o crescimento de novos fios, com o Biocapilar. A fórmula capilar mais usada e recomendada da América Latina.',
    url: 'https://www.biocapilaroficial.com',
    siteName: 'Biocapilar Oficial',
    type: 'product',
    locale: 'pt_BR',
    images: [
      {
        url: 'https://www.biocapilaroficial.com/aimagem.png',
        width: 1200,
        height: 630,
        alt: 'Biocapilar - Suplemento Capilar Natural',
        type: 'image/png',
      },
      {
        url: 'https://www.biocapilaroficial.com/mockup2.png',
        width: 800,
        height: 600,
        alt: 'Frasco Biocapilar',
        type: 'image/png',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Biocapilar® - Acabe com a Queda de Cabelo em 4 Semanas',
    description: 'Acabe com a queda dos cabelos em até 4 semanas, e acelere o crescimento de novos fios, com o Biocapilar. A fórmula capilar mais usada e recomendada da América Latina.',
    images: ['https://www.biocapilaroficial.com/aimagem.png'],
    creator: '@biocapilar',
    site: '@biocapilar'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '055Y8Zlr7CXBMOD8_TVqgFAiashS0o5vcUD8K7vxO_s',
  },
  other: {
    'msapplication-TileColor': '#10b981',
    'theme-color': '#10b981',
  }
}

// Schema.org markup para Rich Snippets
const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Biocapilar',
  description: 'Suplemento natural para fortalecimento capilar e combate à queda de cabelo',
  image: [
    'https://www.biocapilaroficial.com/mockup2.png',
    'https://www.biocapilaroficial.com/aimagem.png'
  ],
  brand: {
    '@type': 'Brand',
    name: 'Biocapilar'
  },
  offers: {
    '@type': 'AggregateOffer',
    lowPrice: '279.90',
    highPrice: '479.40',
    priceCurrency: 'BRL',
    availability: 'https://schema.org/InStock',
    offerCount: '3',
    seller: {
      '@type': 'Organization',
      name: 'CapilaMax'
    },
    priceValidUntil: '2025-12-31'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    bestRating: '5',
    worstRating: '1',
    reviewCount: '3842'
  },
  review: [
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'Mariana C.'
      },
      datePublished: '2025-05-05',
      reviewBody: 'Meus cabelos pararam de cair em 2 meses com o Biocapilar. Realmente funciona!'
    },
    {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      },
      author: {
        '@type': 'Person',
        name: 'Ana M.'
      },
      datePublished: '2025-04-28',
      reviewBody: 'Em 3 meses, meus cabelos ficaram mais fortes e volumosos. Estou muito feliz!'
    }
  ]
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Biocapilar',
  url: 'https://www.biocapilaroficial.com',
  logo: 'https://www.biocapilaroficial.com/logo2.png',
  sameAs: [
    'https://www.instagram.com/biocapilar',
    'https://www.facebook.com/biocapilar'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-41-98454-9172',
    contactType: 'customer service',
    areaServed: 'BR',
    availableLanguage: 'Portuguese'
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{
    '@type': 'ListItem',
    position: 1,
    name: 'Home',
    item: 'https://www.biocapilaroficial.com'
  }]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://www.biocapilaroficial.com" />
        
        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#10b981" />
        
        {/* Preconnect to required origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        


        {/* Google Analytics - G-GEJ71JEFEM */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GEJ71JEFEM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-GEJ71JEFEM');
            `
          }}
        />

        {/* Schema.org markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />

      </head>
      <body className={inter.className}>
        <GoogleAnalytics />
        <UTMHandler />
        {children}



        {/* UTM Tracking - Improved version */}
        <Script id="utm-tracking" strategy="afterInteractive">
          {`
            function getUTMParameters() {
              const urlParams = new URLSearchParams(window.location.search);
              const utmParams = ['source', 'medium', 'campaign', 'term', 'content'];
              const params = {};
              
              utmParams.forEach(param => {
                const value = urlParams.get('utm_' + param);
                if (value) {
                  params['utm_' + param] = value;
                  localStorage.setItem('utm_' + param, value);
                }
              });
              
              return params;
            }

            function getStoredUTMs() {
              const utmParams = ['source', 'medium', 'campaign', 'term', 'content'];
              const params = {};
              
              utmParams.forEach(param => {
                const value = localStorage.getItem('utm_' + param);
                if (value) params['utm_' + param] = value;
              });
              
              return params;
            }

            function attachUTMsToLinks() {
              const urlUTMs = getUTMParameters();
              const storedUTMs = getStoredUTMs();
              const utmParams = { ...storedUTMs, ...urlUTMs };
              
              if (Object.keys(utmParams).length === 0) return;

              document.querySelectorAll('a[href*="full.sale"]').forEach(link => {
                try {
                  const url = new URL(link.href);
                  Object.entries(utmParams).forEach(([key, value]) => {
                    url.searchParams.set(key, value);
                  });
                  link.href = url.toString();
                } catch (e) {
                  console.error('Error updating UTMs for link:', link.href);
                }
              });
            }

            // Attach UTMs on page load
            window.addEventListener('load', attachUTMsToLinks);
            
            // Reattach UTMs when new elements are added to the DOM
            const observer = new MutationObserver(function(mutations) {
              mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                  attachUTMsToLinks();
                }
              });
            });

            observer.observe(document.body, {
              childList: true,
              subtree: true
            });
          `}
        </Script>
      </body>
    </html>
  )
}
