import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import 'animate.css'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Vendista LLC',
    default: 'Vendista LLC',
  },
  description: '«Vendista LLC» - компания, производящая электронные компоненты',
  metadataBase: new URL('https://digichips.ru'),
  other: {
    ['yandex-verification']: '8ba681a96eb2a0bb',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
