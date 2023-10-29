import type { Metadata } from 'next'
import Head from 'next/head'
import localFont from 'next/font/local'
import '@/styles/globals.css'

export const dynamic = 'force-dynamic'

const allianceNo2 = localFont({ 
  src: '../public/fonts/AllianceNo.2-Regular.otf',
  weight: '400',
  variable: '--font-allianceNo2',
});

export const metadata: Metadata = {
  title: 'Unifying Data and Streamlining AI for Intelligent Decision-Making',
  description: 'Amaya unifies data & workflows to empower AI-human collaboration.',
  themeColor: '#FBBC05',
  icons: {
    icon: 'favicons/favicon.ico',
    shortcut: 'favicons/favicon-16x16.png',
    apple: 'favicons/apple-touch-icon.png'
  },
  openGraph: {
    images: [
      {
        url: 'images/amaya-og.png',
        width: 900,
        height: 450,
        alt: 'Amaya OG Image',
      },
    ],
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{(metadata.title as React.ReactNode) || 'Fallback Title'}</title>
        <meta name="description" content={metadata.description as string} />  {/* Type assertion to string */}
        <meta name="theme-color" content="#FBBC05" />
        <meta name="apple-mobile-web-app-title" content="Amaya" />
        <meta property="og:site_name" content="Amaya" />
        <meta property="og:url" content="https://amaya.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title as string} />  {/* Type assertion to string */}
        <meta property="og:description" content={metadata.description as string} />  {/* Type assertion to string */}
        <meta property="og:image" content="https://amaya-jbr3y6sfz-east-park.vercel.app/images/amaya-og.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="amaya.vercel.app" />
        <meta property="twitter:url" content="https://amaya.vercel.app" />
        <meta name="twitter:title" content={metadata.title as string} />  {/* Type assertion to string */}
        <meta name="twitter:description" content={metadata.description as string} />  {/* Type assertion to string */}
        <meta name="twitter:image" content="https://amaya-jbr3y6sfz-east-park.vercel.app/images/amaya-og.png" />
      </Head>
      <body className={`${allianceNo2.className} h-full leading-none tracking-tight bg-[#0F0F0F]`}>
        {children}
      </body>
    </html>
  )
}
