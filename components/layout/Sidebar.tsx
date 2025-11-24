'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, LayoutDashboard, Image, Users, LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { motion } from 'framer-motion'
import ThemeToggle from '@/components/ui/ThemeToggle'

const navigation = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Events', href: '/admin/events', icon: Calendar },
    { name: 'Gallery', href: '/admin/gallery', icon: Image },
    { name: 'Contacts', href: '/admin/contacts', icon: Users },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <div className="w-64 bg-navy-900 text-white min-h-screen flex flex-col">
            <div className="p-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <motion.div
                        whileHover={{
                            rotate: [0, -10, 10, -10, 10, 0],
                            transition: { duration: 0.5 },
                        }}
                        className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20"
                    >
                        <Calendar className="w-6 h-6 text-white" />
                    </motion.div>
                    <span className="text-xl font-bold tracking-tight group-hover:text-blue-400 transition-colors">
                        EventHub
                    </span>
                </Link>
            </div>

            <nav className="flex-1 px-4 py-6 space-y-2">
                {navigation.map(item => {
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                                : 'text-gray-400 hover:bg-navy-800 hover:text-white'
                                }`}
                        >
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-navy-800 space-y-4">
                <div className="flex items-center justify-between px-4">
                    <span className="text-sm text-gray-400">Theme</span>
                    <ThemeToggle />
                </div>
                <button
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:bg-red-500/10 hover:text-red-500 rounded-xl transition-all duration-200"
                >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Sign Out</span>
                </button>
            </div>
        </div>
    )
}
