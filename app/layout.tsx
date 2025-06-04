import type { Metadata } from 'next'
import { Inter, Poppins, Sora } from 'next/font/google'
import './globals.css'

// import AnimatedLayout from './AnimatedLayout'

//font settings
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mohamedsaeed.vercel.app'), // Replace with your actual domain
  title: {
    default: 'Eng Mohammed Saeed | Full Stack Developer Portfolio',
    template: '%s | Eng Mohammed Saeed Portfolio',
  },
  description:
    'Professional portfolio of Eng Mohammed Saeed - Full Stack Developer specializing in modern web technologies. View my projects, skills, and get in touch for collaboration.',
  keywords: [
    'Full Stack Developer',
    'Web Development',
    'Portfolio',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Frontend Development',
    'Backend Development',
  ],
  authors: [
    {
      name: 'Eng Mohammed Saeed',
      url: 'https://your-domain.com',
    },
  ],
  creator: 'Eng Mohammed Saeed',
  publisher: 'Eng Mohammed Saeed',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Eng Mohammed Saeed | Full Stack Developer Portfolio',
    description:
      'Professional portfolio of Eng Mohammed Saeed - Full Stack Developer specializing in modern web technologies.',
    siteName: 'Eng Mohammed Saeed Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Eng Mohammed Saeed Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eng Mohammed Saeed | Full Stack Developer Portfolio',
    description:
      'Professional portfolio of Eng Mohammed Saeed - Full Stack Developer specializing in modern web technologies.',
    creator: '@your_twitter_handle', // Add your Twitter handle
    images: ['/twitter-image.jpg'], // Add your Twitter image
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
    google: 'your-google-site-verification', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://mohamedsaeed.vercel.app/',
    languages: {
      'en-US': 'https://mohamedsaeed.vercel.app/',
    },
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Eng Mohammed Saeed',
    jobTitle: 'Full Stack Developer',
    description:
      'Professional Full Stack Developer specializing in modern web technologies',
    url: 'https://your-domain.com',
    sameAs: [
      'https://github.com/engmo159',
      'https://www.linkedin.com/in/mohamed-saeed-web',
      'https://www.facebook.com/profile.php?id=100089993231546',
    ],
    knowsAbout: [
      'Web Development',
      'React',
      'Next.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'TypeScript',
      'JavaScript',
    ],
    image: '/my picture.png',
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Your University Name', // Add your university
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Your Company', // Add if applicable
    },
  }

  return (
    <html
      lang='en'
      className={`${inter.variable} ${poppins.variable} ${sora.variable}`}
    >
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <meta name='theme-color' content='#000000' />
      </head>
      <body>
        <div
          className={`page bg-site text-white bg-cover bg-no-repeat font-sora relative`}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
