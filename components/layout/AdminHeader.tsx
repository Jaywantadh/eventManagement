'use client'

import { useSession } from 'next-auth/react'
import { ChevronDown } from 'lucide-react'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function AdminHeader() {
    const { data: session } = useSession()

    return (
        <header className="bg-white dark:bg-navy-800 border-b border-gray-200 dark:border-navy-700 px-8 py-4 transition-colors duration-300">
            <div className="flex items-center justify-end gap-4">
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
        </header>
    )
}
