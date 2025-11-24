import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers/Providers'
import AppWrapper from '@/components/layout/AppWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'EventHub - Premium Event Management',
    description: 'Professional event management platform for organizing and showcasing events',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={inter.className}>
                <Providers>
                    <AppWrapper>{children}</AppWrapper>
                </Providers>
            </body>
        </html>
    )
}
