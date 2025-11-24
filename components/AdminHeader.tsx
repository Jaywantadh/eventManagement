'use client'

import { useSession } from 'next-auth/react'
import { ChevronDown } from 'lucide-react'

export default function AdminHeader() {
    const { data: session } = useSession()

    return (
        <header className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-end">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                            {session?.user?.name?.charAt(0) || 'A'}
                        </span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-600" />
                </div>
            </div>
        </header>
    )
}
