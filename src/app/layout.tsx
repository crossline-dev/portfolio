import '@mantine/core/styles.css'
import type { Metadata } from 'next'
import { MantineProvider, ColorSchemeScript } from '@mantine/core'
import React from 'react'
import { theme } from '@/styles/theme'
import { Header, Main, Footer } from '@/layouts'
import { LenisScroller } from '@/lib/lenis-scroller'
import { Nunito } from 'next/font/google'
import { config } from '@/config'
import { PropsWithChildren } from 'react'
import './global.css'

const nunito = Nunito({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--nunito',
})

const isDevMode = process.env.NODE_ENV === 'development'
const description =
  '愛知県春日井市を拠点に、ホームページ制作・ECサイト制作・Webアプリケーション開発などのWeb開発や、名刺・リーフレット・ロゴなどのデザイン制作を行っている「CROSSLINE」のポートフォリオ・サービス紹介サイトです。'
const siteUrl = isDevMode ? 'http://localhost:3000' : config.siteUrl

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: config.siteName,
    template: `%s｜${config.siteName}`,
  },
  description,
  openGraph: {
    title: config.siteName,
    description,
    url: siteUrl,
    siteName: config.siteName,
    locale: 'ja_JP',
    type: 'website',
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={nunito.variable}>
        <MantineProvider
          defaultColorScheme="auto"
          theme={theme}
          cssVariablesSelector="html"
          classNamesPrefix="crossline"
        >
          <LenisScroller>
            <Header />
            <Main>{children}</Main>
            <Footer />
          </LenisScroller>
        </MantineProvider>
      </body>
    </html>
  )
}
