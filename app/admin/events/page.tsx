'use client'

import { useState } from 'react'
import EventForm from '@/components/events/EventForm'
import EventList from '@/components/events/EventList'
import EventCalendar from '@/components/events/EventCalendar'
import { Calendar, List, Plus, X } from 'lucide-react'
import useSWR from 'swr'
import { motion, AnimatePresence } from 'framer-motion'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function EventsPage() {
    const [refreshKey, setRefreshKey] = useState(0)
    const [view, setView] = useState<'list' | 'calendar'>('list')
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)

    const { data } = useSWR(
        `/api/events?limit=100&refreshKey=${refreshKey}`,
        fetcher
    )

    const handleEventCreated = () => {
        setRefreshKey(prev => prev + 1)
        setIsAddModalOpen(false)
    }

    const events = data?.events || []

    return (
        <div className="space-y-8 relative min-h-screen">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Events
                </h1>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
                    >
                        Add Event
                        <Plus className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2 bg-white dark:bg-navy-800 rounded-lg border border-gray-200 dark:border-navy-700 p-1">
                        <button
                            onClick={() => setView('list')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${view === 'list'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-navy-700'
                                }`}
                        >
                            <List className="w-4 h-4" />
                            List
                        </button>
                        <button
                            onClick={() => setView('calendar')}
                            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${view === 'calendar'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-navy-700'
                                }`}
                        >
                            <Calendar className="w-4 h-4" />
                            Calendar
                        </button>
                    </div>
                </div>
            </div>

            {view === 'list' ? (
                <EventList key={refreshKey} />
            ) : (
                <EventCalendar events={events} />
            )}

            <AnimatePresence>
                {isAddModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsAddModalOpen(false)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white dark:bg-navy-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-100 dark:border-navy-700"
                        >
                            <div className="sticky top-0 bg-white dark:bg-navy-800 px-6 py-4 flex items-center justify-between border-b border-gray-100 dark:border-navy-700 z-10">
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                                    Add New Event
                                </h2>
                                <button
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="p-2 hover:bg-gray-100 dark:hover:bg-navy-700 rounded-lg transition-colors text-gray-500 dark:text-gray-400"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                            <div className="p-6">
                                <EventForm onSuccess={handleEventCreated} />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}
