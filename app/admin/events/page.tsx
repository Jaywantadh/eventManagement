'use client'

import { useState } from 'react'
import EventForm from '@/components/events/EventForm'
import EventList from '@/components/events/EventList'
import EventCalendar from '@/components/events/EventCalendar'
import { Calendar, List } from 'lucide-react'
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function EventsPage() {
    const [refreshKey, setRefreshKey] = useState(0)
    const [view, setView] = useState<'list' | 'calendar'>('list')

    const { data } = useSWR(
        `/api/events?limit=100&refreshKey=${refreshKey}`,
        fetcher
    )

    const handleEventCreated = () => {
        setRefreshKey(prev => prev + 1)
    }

    const events = data?.events || []

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Events</h1>

                <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
                    <button
                        onClick={() => setView('list')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${view === 'list'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <List className="w-4 h-4" />
                        List
                    </button>
                    <button
                        onClick={() => setView('calendar')}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${view === 'calendar'
                                ? 'bg-blue-600 text-white'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        <Calendar className="w-4 h-4" />
                        Calendar
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Add Event</h2>
                <EventForm onSuccess={handleEventCreated} />
            </div>

            {view === 'list' ? (
                <EventList key={refreshKey} />
            ) : (
                <EventCalendar events={events} />
            )}
        </div>
    )
}
