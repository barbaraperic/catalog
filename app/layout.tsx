import type { Metadata } from 'next'
import Header from './components/Header/Header'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import '@/app/styles/globals.css'

export const metadata: Metadata = {
  title: 'CatalogGarden',
  description: 'Digital Graden',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Header />
        <hr></hr>
        <main className="wrapper">{children}</main>
      </body>
    </html>
  )
}
