import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { LanguageProvider } from './contexts/language-context'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Improve font loading performance
  preload: true,
})

export const metadata: Metadata = {
  title: 'Car Rental Platform | Modern Car Rental Website Demo',
  description: 'Modern car rental platform built with Next.js, TypeScript, and Tailwind CSS. Featuring responsive design, internationalization, and performance optimization.',
  keywords: 'car rental platform, Next.js demo, TypeScript, Tailwind CSS, responsive design, internationalization, performance optimization, modern web development',
  authors: [{ name: 'Stiven Janku' }],
  publisher: 'Car Rental Platform Demo',
  category: 'Web Development Demo',
  openGraph: {
    title: 'Car Rental Platform | Modern Car Rental Website Demo',
    description: 'Modern car rental platform built with Next.js, TypeScript, and Tailwind CSS. Showcasing responsive design and performance optimization.',
    url: 'https://car-rental-platform-demo.vercel.app',
    siteName: 'Car Rental Platform Demo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://car-rental-platform-demo.vercel.app/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'Car Rental Platform Demo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Car Rental Platform | Modern Car Rental Website Demo',
    description: 'Modern car rental platform built with Next.js, TypeScript, and Tailwind CSS. Showcasing responsive design and performance optimization.',
    images: ['https://car-rental-platform-demo.vercel.app/web-app-manifest-512x512.png'],
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
  alternates: {
    canonical: 'https://car-rental-platform-demo.vercel.app',
    languages: {
      'en': 'https://car-rental-platform-demo.vercel.app',
      'sq': 'https://car-rental-platform-demo.vercel.app',
      'x-default': 'https://car-rental-platform-demo.vercel.app'
    }
  },
  verification: {
    google: 'demo-verification-code',
  },
  other: {
    'geo.region': 'US-NY',
    'geo.placename': 'New York, USA',
    'geo.position': '40.7128;-74.0060',
    'ICBM': '40.7128, -74.0060',
    'DC.title': 'Car Rental Platform Demo',
    'DC.subject': 'Car Rental Platform Web Development Demo',
    'DC.description': 'Modern car rental platform showcasing Next.js, TypeScript, and performance optimization',
    'DC.identifier': 'https://car-rental-platform-demo.vercel.app',
    'DC.language': 'en,sq',
    'DC.coverage': 'Global',
    'rating': 'general',
    'distribution': 'global',
    'revisit-after': '7 days'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Resource hints for performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Critical hero image preload - now using local images */}
        <link
          rel="preload"
          as="image"
          href="/images/hero/hero-car.jpg"
          fetchPriority="high"
        />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/web-app-manifest-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/web-app-manifest-512x512.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Car Rental Platform Demo" />
        
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Car Rental Platform Demo",
                "alternateName": ["Car Rental Platform", "Demo Car Rental"],
                "url": "https://car-rental-platform-demo.vercel.app",
                "description": "Modern car rental platform built with Next.js, TypeScript, and Tailwind CSS. Showcasing responsive design and performance optimization."
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Car Rental Platform Demo",
                "legalName": "Car Rental Platform Demo",
                "alternateName": ["Car Rental Platform", "Demo Car Rental"],
                "description": "Modern car rental platform built with Next.js, TypeScript, and Tailwind CSS. Showcasing responsive design and performance optimization.",
                "url": "https://car-rental-platform-demo.vercel.app",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://car-rental-platform-demo.vercel.app/web-app-manifest-512x512.png",
                  "width": 512,
                  "height": 512,
                  "caption": "Car Rental Platform Demo Logo"
                },
                "image": "https://car-rental-platform-demo.vercel.app/web-app-manifest-512x512.png",
                "telephone": "+1 234 567 890",
                "email": "info@example.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Demo Street",
                  "addressLocality": "New York",
                  "postalCode": "10001",
                  "addressCountry": "US",
                  "addressRegion": "New York"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1 234 567 890",
                  "contactType": "customer service",
                  "email": "info@example.com",
                  "availableLanguage": ["English", "Albanian"]
                },
                "sameAs": [
                  "https://car-rental-platform-demo.vercel.app"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://car-rental-platform-demo.vercel.app/#localbusiness",
                "name": "Car Rental Platform Demo",
                "legalName": "Car Rental Platform Demo",
                "alternateName": ["Car Rental Platform", "Demo Car Rental"],
                "description": "Modern car rental platform built with Next.js, TypeScript, and Tailwind CSS. Showcasing responsive design and performance optimization.",
                "url": "https://car-rental-platform-demo.vercel.app",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://car-rental-platform-demo.vercel.app/web-app-manifest-512x512.png",
                  "width": 512,
                  "height": 512,
                  "caption": "Car Rental Platform Demo Logo"
                },
                "image": "https://car-rental-platform-demo.vercel.app/web-app-manifest-512x512.png",
                "telephone": "+1 234 567 890",
                "email": "info@example.com",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Demo Street",
                  "addressLocality": "New York",
                  "postalCode": "10001",
                  "addressCountry": "US",
                  "addressRegion": "New York"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "40.7128",
                  "longitude": "-74.0060"
                },
                "openingHours": "Mo-Su 00:00-23:59",
                "priceRange": "$$",
                "serviceArea": {
                  "@type": "Country",
                  "name": "United States"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Car Rental Services",
                  "itemListElement": [
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "SUV Rental",
                        "description": "Premium SUV rental services"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Sedan Rental",
                        "description": "Comfortable sedan rental services"
                      }
                    },
                    {
                      "@type": "Offer",
                      "itemOffered": {
                        "@type": "Service",
                        "name": "Luxury Car Rental",
                        "description": "Premium luxury vehicle rental services"
                      }
                    }
                  ]
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+1 234 567 890",
                  "contactType": "customer service",
                  "email": "info@example.com",
                  "availableLanguage": ["English", "Albanian"]
                },
                "sameAs": [
                  "https://car-rental-platform-demo.vercel.app"
                ]
              }
            ])
          }}
        />
        
        {/* Vehicle Listing Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Vehicle",
                  "name": "Renault Koleos",
                  "brand": {
                    "@type": "Brand",
                    "name": "Renault"
                  },
                  "model": "Koleos",
                  "vehicleModelDate": "2022",
                  "bodyType": "SUV",
                  "fuelType": "LPG",
                  "vehicleEngine": {
                    "@type": "EngineSpecification",
                    "fuelType": "LPG",
                    "engineDisplacement": {
                      "@type": "QuantitativeValue",
                      "value": "2.0",
                      "unitCode": "LTR"
                    },
                    "enginePower": {
                      "@type": "QuantitativeValue",
                      "value": "144",
                      "unitCode": "BHP"
                    }
                  },
                  "vehicleTransmission": "Automatic",
                  "seatingCapacity": 5,
                  "fuelConsumption": {
                    "@type": "QuantitativeValue",
                    "value": "7.4",
                    "unitCode": "L/100KM"
                  },
                  "vehicleConfiguration": "SUV",
                  "offers": {
                    "@type": "Offer",
                    "price": "60",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "60",
                      "priceCurrency": "EUR",
                      "unitText": "per day"
                    },
                    "availability": "InStock",
                    "seller": {
                      "@type": "Organization",
                      "name": "ACRA - Alpet Car Rental Albania"
                    }
                  },
                  "image": "https://alpet.rentals/web-app-manifest-512x512.png",
                  "description": "Premium SUV rental with 2.0L LPG engine, automatic transmission, and modern features including touchscreen multimedia and parking sensors."
                },
                {
                  "@type": "Vehicle",
                  "name": "Dacia Duster",
                  "brand": {
                    "@type": "Brand",
                    "name": "Dacia"
                  },
                  "model": "Duster",
                  "vehicleModelDate": "2022",
                  "bodyType": "SUV",
                  "fuelType": "Diesel",
                  "vehicleEngine": {
                    "@type": "EngineSpecification",
                    "fuelType": "Diesel",
                    "engineDisplacement": {
                      "@type": "QuantitativeValue",
                      "value": "1.5",
                      "unitCode": "LTR"
                    },
                    "enginePower": {
                      "@type": "QuantitativeValue",
                      "value": "115",
                      "unitCode": "BHP"
                    }
                  },
                  "vehicleTransmission": "Manual",
                  "seatingCapacity": 5,
                  "fuelConsumption": {
                    "@type": "QuantitativeValue",
                    "value": "5.4",
                    "unitCode": "L/100KM"
                  },
                  "vehicleConfiguration": "SUV",
                  "offers": {
                    "@type": "Offer",
                    "price": "50",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "50",
                      "priceCurrency": "EUR",
                      "unitText": "per day"
                    },
                    "availability": "InStock",
                    "seller": {
                      "@type": "Organization",
                      "name": "ACRA - Alpet Car Rental Albania"
                    }
                  },
                  "image": "https://alpet.rentals/web-app-manifest-512x512.png",
                  "description": "Reliable SUV with efficient 1.5L diesel engine, manual transmission, and essential comfort features."
                },
                {
                  "@type": "Vehicle",
                  "name": "Hyundai Venue",
                  "brand": {
                    "@type": "Brand",
                    "name": "Hyundai"
                  },
                  "model": "Venue",
                  "vehicleModelDate": "2022",
                  "bodyType": "Crossover",
                  "fuelType": "Gasoline",
                  "vehicleEngine": {
                    "@type": "EngineSpecification",
                    "fuelType": "Gasoline",
                    "engineDisplacement": {
                      "@type": "QuantitativeValue",
                      "value": "1.6",
                      "unitCode": "LTR"
                    },
                    "enginePower": {
                      "@type": "QuantitativeValue",
                      "value": "121",
                      "unitCode": "BHP"
                    }
                  },
                  "vehicleTransmission": "Automatic",
                  "seatingCapacity": 5,
                  "fuelConsumption": {
                    "@type": "QuantitativeValue",
                    "value": "7.0",
                    "unitCode": "L/100KM"
                  },
                  "vehicleConfiguration": "Crossover",
                  "offers": {
                    "@type": "Offer",
                    "price": "45",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "45",
                      "priceCurrency": "EUR",
                      "unitText": "per day"
                    },
                    "availability": "InStock",
                    "seller": {
                      "@type": "Organization",
                      "name": "ACRA - Alpet Car Rental Albania"
                    }
                  },
                  "image": "https://alpet.rentals/web-app-manifest-512x512.png",
                  "description": "Compact crossover SUV with 1.6L gasoline engine, automatic transmission, and modern infotainment features."
                },
                {
                  "@type": "Vehicle",
                  "name": "MG ZS",
                  "brand": {
                    "@type": "Brand",
                    "name": "MG"
                  },
                  "model": "ZS",
                  "vehicleModelDate": "2022",
                  "bodyType": "SUV",
                  "fuelType": "Gasoline",
                  "vehicleEngine": {
                    "@type": "EngineSpecification",
                    "fuelType": "Gasoline",
                    "engineDisplacement": {
                      "@type": "QuantitativeValue",
                      "value": "1.5",
                      "unitCode": "LTR"
                    },
                    "enginePower": {
                      "@type": "QuantitativeValue",
                      "value": "106",
                      "unitCode": "BHP"
                    }
                  },
                  "vehicleTransmission": "Manual",
                  "seatingCapacity": 5,
                  "fuelConsumption": {
                    "@type": "QuantitativeValue",
                    "value": "6.5",
                    "unitCode": "L/100KM"
                  },
                  "vehicleConfiguration": "SUV",
                  "offers": {
                    "@type": "Offer",
                    "price": "45",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "45",
                      "priceCurrency": "EUR",
                      "unitText": "per day"
                    },
                    "availability": "InStock",
                    "seller": {
                      "@type": "Organization",
                      "name": "ACRA - Alpet Car Rental Albania"
                    }
                  },
                  "image": "https://alpet.rentals/web-app-manifest-512x512.png",
                  "description": "Compact SUV with efficient 1.5L gasoline engine, manual transmission, and modern safety features."
                },
                {
                  "@type": "Vehicle",
                  "name": "Hyundai Accent",
                  "brand": {
                    "@type": "Brand",
                    "name": "Hyundai"
                  },
                  "model": "Accent",
                  "vehicleModelDate": "2022",
                  "bodyType": "Sedan",
                  "fuelType": "Gasoline",
                  "vehicleEngine": {
                    "@type": "EngineSpecification",
                    "fuelType": "Gasoline",
                    "engineDisplacement": {
                      "@type": "QuantitativeValue",
                      "value": "1.4",
                      "unitCode": "LTR"
                    },
                    "enginePower": {
                      "@type": "QuantitativeValue",
                      "value": "100",
                      "unitCode": "BHP"
                    }
                  },
                  "vehicleTransmission": "Automatic",
                  "seatingCapacity": 5,
                  "fuelConsumption": {
                    "@type": "QuantitativeValue",
                    "value": "6.2",
                    "unitCode": "L/100KM"
                  },
                  "vehicleConfiguration": "Sedan",
                  "offers": {
                    "@type": "Offer",
                    "price": "35",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "35",
                      "priceCurrency": "EUR",
                      "unitText": "per day"
                    },
                    "availability": "InStock",
                    "seller": {
                      "@type": "Organization",
                      "name": "ACRA - Alpet Car Rental Albania"
                    }
                  },
                  "image": "https://alpet.rentals/web-app-manifest-512x512.png",
                  "description": "Comfortable sedan with 1.4L gasoline engine, automatic transmission, and reliable performance for city and highway driving."
                },
                {
                  "@type": "Vehicle",
                  "name": "Hyundai i10",
                  "brand": {
                    "@type": "Brand",
                    "name": "Hyundai"
                  },
                  "model": "i10",
                  "vehicleModelDate": "2022",
                  "bodyType": "Hatchback",
                  "fuelType": "Gasoline",
                  "vehicleEngine": {
                    "@type": "EngineSpecification",
                    "fuelType": "Gasoline",
                    "engineDisplacement": {
                      "@type": "QuantitativeValue",
                      "value": "1.0",
                      "unitCode": "LTR"
                    },
                    "enginePower": {
                      "@type": "QuantitativeValue",
                      "value": "67",
                      "unitCode": "BHP"
                    }
                  },
                  "vehicleTransmission": "Automatic",
                  "seatingCapacity": 4,
                  "fuelConsumption": {
                    "@type": "QuantitativeValue",
                    "value": "5.0",
                    "unitCode": "L/100KM"
                  },
                  "vehicleConfiguration": "Hatchback",
                  "offers": {
                    "@type": "Offer",
                    "price": "30",
                    "priceCurrency": "EUR",
                    "priceSpecification": {
                      "@type": "UnitPriceSpecification",
                      "price": "30",
                      "priceCurrency": "EUR",
                      "unitText": "per day"
                    },
                    "availability": "InStock",
                    "seller": {
                      "@type": "Organization",
                      "name": "ACRA - Alpet Car Rental Albania"
                    }
                  },
                  "image": "https://alpet.rentals/web-app-manifest-512x512.png",
                  "description": "Compact and fuel-efficient hatchback with 1.0L gasoline engine, automatic transmission, perfect for city driving and parking."
                }
              ]
            })
          }}
        />
        
        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What documents do I need to rent a car in Albania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You need a valid driver's license, passport or ID card, and a credit card for the security deposit. International driving licenses are accepted for foreign visitors."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is the minimum age to rent a car in Albania?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The minimum age to rent a car is 21 years old. Some vehicle categories may require drivers to be 25 or older."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide airport pickup and delivery?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide free pickup and delivery service at Tirana International Airport and other locations throughout Albania."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is included in the rental price?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our rental prices include basic insurance, unlimited mileage within Albania, 24/7 roadside assistance, and free airport delivery."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I cross borders with the rental car?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cross-border travel is available to select Balkan countries with prior arrangement and additional documentation. Please contact us for specific requirements."
                  }
                }
              ]
            })
          }}
        />
        
        {/* Service Offered Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "name": "Car Rental Service",
                  "description": "Premium car rental services in Albania with a wide selection of vehicles",
                  "provider": {
                    "@type": "Organization",
                    "name": "ACRA - Alpet Car Rental Albania"
                  },
                  "areaServed": {
                    "@type": "Country",
                    "name": "Albania"
                  },
                  "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Vehicle Rental Categories",
                    "itemListElement": [
                      {
                        "@type": "OfferCatalog",
                        "name": "Economy Cars",
                        "description": "Affordable and fuel-efficient vehicles perfect for city driving"
                      },
                      {
                        "@type": "OfferCatalog", 
                        "name": "SUVs and Crossovers",
                        "description": "Spacious vehicles ideal for families and mountain adventures"
                      },
                      {
                        "@type": "OfferCatalog",
                        "name": "Sedans",
                        "description": "Comfortable vehicles for business and long-distance travel"
                      }
                    ]
                  }
                },
                {
                  "@type": "Service",
                  "name": "Airport Transfer Service",
                  "description": "Free pickup and delivery service at Tirana International Airport",
                  "provider": {
                    "@type": "Organization",
                    "name": "ACRA - Alpet Car Rental Albania"
                  },
                  "serviceType": "Transportation",
                  "areaServed": [
                    {
                      "@type": "Airport",
                      "name": "Tirana International Airport Nënë Tereza"
                    },
                    {
                      "@type": "City",
                      "name": "Tirana"
                    }
                  ]
                }
              ]
            })
          }}
        />
        
        {/* Review/Rating Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ACRA - Alpet Car Rental Albania",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Maria Schmidt"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Excellent service! The car was clean, well-maintained, and perfect for our Albanian adventure. The staff was incredibly helpful and professional."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "James Wilson"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Great experience renting with Alpet! Competitive prices, reliable cars, and excellent customer service. Highly recommend for anyone visiting Albania."
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Sophie Dubois"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Perfect car rental experience! The booking process was smooth, the car was exactly as described, and the pickup/drop-off was very convenient."
                }
              ]
            })
          }}
        />
        
        {/* Enhanced Local Business with Multiple Locations */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRental",
              "name": "ACRA - Alpet Car Rental Albania",
              "description": "Premium car rental services throughout Albania with airport pickup, competitive prices, and modern fleet",
              "url": "https://alpet.rentals",
              "logo": "https://alpet.rentals/web-app-manifest-512x512.png",
              "image": "https://alpet.rentals/web-app-manifest-512x512.png",
              "telephone": "+355 69 617 1111",
              "email": "info@alpet.rentals",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rruga e Aeroportit",
                "addressLocality": "Tiranë",
                "postalCode": "1504",
                "addressCountry": "AL",
                "addressRegion": "Tirana"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "41.414",
                "longitude": "19.720"
              },
              "openingHours": "Mo-Su 00:00-23:59",
              "priceRange": "€30-€60",
              "currenciesAccepted": "EUR",
              "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
              "serviceArea": [
                {
                  "@type": "City",
                  "name": "Tirana"
                },
                {
                  "@type": "City", 
                  "name": "Durrës"
                },
                {
                  "@type": "City",
                  "name": "Vlorë"
                },
                {
                  "@type": "City",
                  "name": "Shkodër"
                },
                {
                  "@type": "Country",
                  "name": "Albania"
                }
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Economy Car Rental",
                    "description": "Affordable daily car rental starting from €30/day"
                  },
                  "price": "30",
                  "priceCurrency": "EUR"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SUV Rental",
                    "description": "Premium SUV rental for family trips and mountain adventures"
                  },
                  "price": "60",
                  "priceCurrency": "EUR"
                }
              ]
            })
          }}
        />
        
        {/* Critical CSS for above-the-fold content - Expanded */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for immediate rendering */
            .hero-section {
              position: relative;
              padding-top: 5rem;
              padding-bottom: 4rem;
              min-height: 100svh; /* Use small viewport height for mobile compatibility */
              min-height: 100vh; /* Fallback for older browsers */
              display: flex;
              align-items: center;
            }
            /* Mobile-first responsive adjustments */
            @media (max-width: 768px) {
              .hero-section {
                min-height: 100svh; /* Small viewport height for mobile */
                min-height: calc(100vh - 4rem); /* Fallback with reduced height */
                padding-top: 6rem; /* Account for mobile nav */
                padding-bottom: 2rem;
              }
            }
            @media (max-height: 667px) {
              /* For shorter mobile screens like iPhone SE */
              .hero-section {
                min-height: 100svh;
                min-height: calc(100vh - 2rem);
                padding-top: 5rem;
                padding-bottom: 1rem;
              }
            }
            .hero-bg {
              position: absolute;
              inset: 0;
              z-index: 0;
            }
            .hero-overlay {
              position: absolute;
              inset: 0;
              background-color: rgba(0, 0, 0, 0.5);
            }
            .hero-content {
              position: relative;
              z-index: 10;
              max-width: 1200px;
              margin: 0 auto;
              padding: 1rem 4rem;
            }
            /* Navigation critical styles */
            nav {
              position: fixed;
              top: 0;
              width: 100%;
              background: rgba(255, 255, 255, 0.95);
              backdrop-filter: blur(8px);
              border-bottom: 1px solid #e5e7eb;
              z-index: 50;
            }
            /* Typography critical styles */
            h1 {
              font-size: 3rem;
              font-weight: 700;
              color: white;
              line-height: 1.1;
            }
            @media (min-width: 768px) {
              h1 { font-size: 4rem; }
            }
            /* Button critical styles */
            .btn {
              display: inline-flex;
              align-items: center;
              padding: 0.75rem 2rem;
              font-size: 1.125rem;
              font-weight: 500;
              border-radius: 0.5rem;
              transition: all 0.2s;
            }
            .btn-primary {
              background-color: #2563eb;
              color: white;
            }
            .btn-primary:hover {
              background-color: #1d4ed8;
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
