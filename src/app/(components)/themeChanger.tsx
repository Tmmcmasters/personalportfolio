'use client'

import { Switch } from "@nextui-org/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { SunIcon } from "../(Icons)/SunIcon"
import { MoonIcon } from "../(Icons)/MoonIcon"


export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <Switch
            defaultSelected
            size="lg"
            onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <SunIcon className={className} />
                ) : (
                    <MoonIcon className={className} />
                )
            }
        >

        </Switch>

    )
}