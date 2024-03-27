import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Vendista LLC',
    default: 'Vendista LLC',
  },
  description: '«Vendista LLC» - компания, производящая электронные компоненты',
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
        <ToastContainer />
      </body>
    </html>
  )
}
