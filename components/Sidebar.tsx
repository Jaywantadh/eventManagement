'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import {
    Calendar,
    Image,
    Users,
    LayoutDashboard,
    LogOut,
} from 'lucide-react'

const navItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/events', label: 'Events', icon: Calendar },
    { href: '/admin/gallery', label: 'Gallery', icon: Image },
    { href: '/admin/contacts', label: 'Contacts', icon: Users },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-navy-900 min-h-screen flex flex-col">
            <div className="p-6">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white font-semibold text-lg">EventHub</span>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1">
                {navItems.map(item => {
                    const Icon = item.icon
                    const isActive = pathname === item.href
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
                        >
                            <Icon className="w-5 h-5" />
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </nav>

            <div className="p-4">
                <button
                    onClick={() => signOut({ callbackUrl: '/login' })}
                    className="sidebar-link w-full text-red-400 hover:text-red-300 hover:bg-red-900/20"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    )
}
