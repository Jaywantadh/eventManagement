'use client'

import { useSession } from 'next-auth/react'
import { Menu } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

interface AdminHeaderProps {
    onToggleSidebar: () => void
}

export default function AdminHeader({ onToggleSidebar }: AdminHeaderProps) {
    const { data: session } = useSession()

    return (
        <header className="bg-white dark:bg-navy-800 border-b border-gray-200 dark:border-navy-700 px-4 py-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="flex items-center justify-between gap-4">
                <button
                    onClick={onToggleSidebar}
                    className="md:hidden inline-flex items-center gap-2 rounded-xl border border-gray-200 dark:border-navy-700 bg-white dark:bg-navy-800 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm"
                    aria-label="Open navigation"
                >
                    <Menu className="w-4 h-4" />
                    Menu
                </button>

                <div className="flex flex-1 items-center justify-end gap-4">
                    <ThemeToggle />
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-600/20">
                            <span className="text-white font-semibold">
                                {session?.user?.name?.charAt(0) || 'A'}
                            </span>
                        </div>
                        <div className="hidden md:block text-right">
                            <p className="text-sm font-medium text-gray-900 dark:text-white">
                                {session?.user?.name || 'Admin'}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                Administrator
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
