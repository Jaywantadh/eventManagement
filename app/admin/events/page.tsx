'use client'

import { useState } from 'react'
import EventForm from '@/components/events/EventForm'
import EventList from '@/components/events/EventList'

export default function EventsPage() {
    const [refreshKey, setRefreshKey] = useState(0)

    const handleEventCreated = () => {
        setRefreshKey(prev => prev + 1)
    }

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-900">Events</h1>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Add Event</h2>
                <EventForm onSuccess={handleEventCreated} />
            </div>

            <EventList key={refreshKey} />
        </div>
    )
}
