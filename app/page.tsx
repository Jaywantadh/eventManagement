'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-navy-900 transition-colors duration-300">
            <nav className="fixed w-full z-50 bg-white/80 dark:bg-navy-900/80 backdrop-blur-md border-b border-gray-100 dark:border-navy-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <Calendar className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-gray-900 dark:text-white">
                                EventHub
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <Link
                                href="/login"
                                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
                            >
                                Sign In
                            </Link>
                            <Link
                                href="/events"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-blue-600/30"
                            >
                                View Events
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
                            Manage Events <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
                                Like a Pro
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                            The most premium platform for organizing, showcasing, and managing
                            your events with style and efficiency.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/login"
                                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-blue-600/30 flex items-center justify-center gap-2"
                            >
                                Get Started <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/events"
                                className="w-full sm:w-auto bg-gray-100 dark:bg-navy-800 text-gray-900 dark:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-gray-200 dark:hover:bg-navy-700"
                            >
                                Browse Events
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: <Zap className="w-6 h-6 text-blue-600" />,
                            title: 'Lightning Fast',
                            description:
                                'Built with Next.js 14 for incredible performance and speed.',
                        },
                        {
                            icon: <Shield className="w-6 h-6 text-blue-600" />,
                            title: 'Secure & Reliable',
                            description:
                                'Enterprise-grade security with MongoDB Atlas and NextAuth.',
                        },
                        {
                            icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
                            title: 'Premium Experience',
                            description:
                                'Beautiful animations and intuitive design for the best UX.',
                        },
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                            className="bg-gray-50 dark:bg-navy-800 p-8 rounded-2xl border border-gray-100 dark:border-navy-700 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-blue-100 dark:bg-navy-700 rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    )
}
