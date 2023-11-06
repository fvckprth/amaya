import type { Viewport } from 'next'
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

export const viewport: Viewport = {
  themeColor: '#FBBC05',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="Mv0qHkVFoigxkcf8A91CnW4Ldwe1dozg";;analytics.SNIPPET_VERSION="4.16.1";
              analytics.load("Mv0qHkVFoigxkcf8A91CnW4Ldwe1dozg");
              analytics.page();
              }}();
            `,
          }}
        />
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
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className={`${allianceNo2.className} h-full leading-none tracking-tight font-normal selection:bg-[#FBBC05]/25 selection:text-[#FBBC05] bg-[#0F0F0F]`}>
        {children}
      </body>
    </html>
  )
}
