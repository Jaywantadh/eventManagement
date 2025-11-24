'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import SplashScreen from './SplashScreen'

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const [showSplash, setShowSplash] = useState(true)
    const [hasShownSplash, setHasShownSplash] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const splashShown = sessionStorage.getItem('splashShown')
        if (splashShown) {
            setShowSplash(false)
            setHasShownSplash(true)
        }
    }, [])

    const handleSplashComplete = () => {
        setShowSplash(false)
        setHasShownSplash(true)
        sessionStorage.setItem('splashShown', 'true')
    }

    const isLoginPage = pathname === '/login'
    const shouldShowSplash = showSplash && !hasShownSplash && !isLoginPage

    return (
        <>
            <AnimatePresence mode="wait">
                {shouldShowSplash && (
                    <SplashScreen key="splash" onComplete={handleSplashComplete} />
                )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
                {!shouldShowSplash && (
                    <motion.div
                        key={pathname}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                        }}
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
