import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { Providers } from './providers'
import NavbarComponent  from '@/app/(components)/navbar'
import { ScrollShadow } from '@nextui-org/react'
import FooterSection from './(components)/footerSection'
import { Toaster } from 'react-hot-toast'

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
        <Toaster toastOptions={{
          style: {
            borderRadius: '10px',
            background: '#0d0d0d',
            padding: '15px',
            margin: '10px',
            border: '2px solid #7777',
            color: '#fff',
            // zIndex: 99999,
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          },
          position: 'top-center',
          duration: 5000,
        }}/>
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
