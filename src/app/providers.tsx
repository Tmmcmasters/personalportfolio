'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export function Providers({ children }: { children: React.ReactNode }) {
    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        scroll.toExponential(1.5)
      })

    return (
    <NextUIProvider>
        <NextThemesProvider attribute='class' defaultTheme='dark'>
            <ReactLenis root>
            {children}
            </ReactLenis>
        </NextThemesProvider>
    </NextUIProvider>
    )
}