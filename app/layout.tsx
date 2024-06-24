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
  title: 'Eng Mohammed Saeed ',
  description: 'full stack web portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${inter.variable} ${poppins.variable} ${sora.variable}`}
    >
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
