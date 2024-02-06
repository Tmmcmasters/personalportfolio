import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { Providers } from './providers'
import NavbarComponent  from '@/app/(components)/navbar'
import { ScrollShadow } from '@nextui-org/react'
import FooterSection from './(components)/footerSection'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tim\'s Portfolio',
  description: 'The personal portfolio of Timothy McMasters, Fort Wayne Indiana.',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en" className='bg-background'>
        <body className={`${inter.className} `}>
          <Providers>
            <header className='w-full'>
              <NavbarComponent/>
            </header>

            <main className='pt-12 bg-background'>
                {children}
            </main>

            <footer>
              <FooterSection/>
            </footer>
        </Providers>
        </body>
    </html>
  )
}
