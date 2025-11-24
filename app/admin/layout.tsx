'use client'

import { ReactNode, useState } from 'react'
import Sidebar from '@/components/layout/Sidebar'
import AdminHeader from '@/components/layout/AdminHeader'
import { X } from 'lucide-react'

export default function AdminLayout({ children }: { children: ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const closeSidebar = () => setIsSidebarOpen(false)

    return (
        <div className="relative flex min-h-screen bg-gray-50 dark:bg-navy-900 transition-colors duration-300">
            <div className="hidden md:flex">
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col">
                <AdminHeader onToggleSidebar={() => setIsSidebarOpen(true)} />
                <main className="flex-1 px-4 py-6 sm:p-6 lg:p-8">{children}</main>
            </div>

            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 flex md:hidden">
                    <div className="relative w-64">
                        <Sidebar />
                        <button
                            onClick={closeSidebar}
                            className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition hover:bg-white/20"
                            aria-label="Close navigation"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={closeSidebar} />
                </div>
            )}
        </div>
    )
}
