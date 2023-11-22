import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { Providers } from './providers'
import NavbarComponent  from './navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en" className='dark'>
        <body className={inter.className}>
          <Providers>
            <header className='w-full'>
              <NavbarComponent/>
            </header>

            <main>
            {children}
            </main>

            <footer>
            </footer>
        </Providers>
        </body>
    </html>
  )
}
