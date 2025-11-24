'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'

interface SplashScreenProps {
    onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const duration = 2500
        const interval = 50
        const increment = (interval / duration) * 100

        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(onComplete, 300)
                    return 100
                }
                return prev + increment
            })
        }, interval)

        return () => clearInterval(timer)
    }, [onComplete])

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-blue-900 overflow-hidden"
            >
                {/* Animated logo and title */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <motion.div
                        animate={{
                            boxShadow: [
                                '0 0 20px rgba(37, 99, 235, 0.3)',
                                '0 0 40px rgba(37, 99, 235, 0.6)',
                                '0 0 20px rgba(37, 99, 235, 0.3)',
                            ],
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center mb-6"
                    >
                        <Calendar className="w-12 h-12 text-white" />
                    </motion.div>

                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-5xl font-bold text-white mb-2 tracking-tight"
                    >
                        EventHub
                    </motion.h1>

                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-blue-200 text-lg"
                    >
                        Premium Event Management
                    </motion.p>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: '300px', opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="absolute bottom-20 h-1 bg-navy-700 rounded-full overflow-hidden"
                >
                    <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-10 text-blue-300 text-sm"
                >
                    Loading your experience...
                </motion.p>
            </motion.div>
        </AnimatePresence>
    )
}
