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
  title: 'Amaya | Your Partner in Exploration',
  description: 'Amaya unifies data & workflows to empower AI-human collaboration.',
  keywords: ['Amaya', 'East Park Holdings\' Group', 'AI Chatbot', 'New York'],
  authors: [{ name: 'Parth Patel', url: 'https://parth.ski' }],
  openGraph: {
    title: 'Amaya',
    description: 'Amaya unifies data & workflows to empower AI-human collaboration.',
    url: 'https://withamaya.com',
    siteName: 'Amaya',
    images: [
      {
        url: 'https://image.mux.com/syVZUPM8hwRPv008dJvaOg02Dxg00Z02oT4i4lbOb4usV5c/animated.gif?fps=30',
        width: 800,
        height: 600,
        alt: 'Mushroom Trip',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    siteId: 'Your Twitter ID',
    creator: '@YourTwitterHandle',
    creatorId: 'Your Twitter ID',
    title: 'Your Application Title',
    description: 'A brief description of your application',
    images: ['https://image.mux.com/syVZUPM8hwRPv008dJvaOg02Dxg00Z02oT4i4lbOb4usV5c/animated.gif?fps=15&end=5'],
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
        <meta name="theme-color" content="#FBBC05" />
      </Head>
      <body className={`${allianceNo2.className} h-full leading-none tracking-tight bg-[#0F0F0F]`}>
        {children}
      </body>
    </html>
  )
}
