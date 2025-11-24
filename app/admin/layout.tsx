import { ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import AdminHeader from '@/components/AdminHeader'

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <AdminHeader />
                <main className="flex-1 p-8">{children}</main>
            </div>
        </div>
    )
}
