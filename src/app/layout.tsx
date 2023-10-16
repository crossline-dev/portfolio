import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import React from 'react'
import { theme } from '@/styles/theme'
import { Header } from '@/layouts'

const isDevMode = process.env.NODE_ENV === 'development'
const siteName = 'CROSSLINE'
const description = 'CROSSLINE'
const siteUrl = isDevMode ? 'http://localhost:3000' : 'https://crossline.me'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s｜${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url: siteUrl,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider
          defaultColorScheme="auto"
          theme={theme}
          cssVariablesSelector="html"
          classNamesPrefix="crossline"
        >
          <Header />
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}
