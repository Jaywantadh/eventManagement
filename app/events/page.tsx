import { Metadata } from 'next'
import connectDB from '@/lib/db'
import Event from '@/models/Event'
import EventCard from '@/components/events/EventCard'
import { Calendar } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Events | Event Management System',
    description: 'Browse upcoming and past events',
}

async function getEvents() {
    try {
        await connectDB()

        const events = await Event.find({ deleted: { $ne: true } })
            .sort({ date: -1 })
            .limit(50)
            .lean()

        return events.map(event => ({
            ...event,
            _id: event._id.toString(),
            date: event.date.toISOString(),
            createdAt: event.createdAt.toISOString(),
            updatedAt: event.updatedAt.toISOString(),
        }))
    } catch (error) {
        console.error('Failed to fetch events:', error)
        return []
    }
}

export default async function EventsPage() {
    const events = await getEvents()

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <header className="bg-white shadow-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                            <Calendar className="w-7 h-7 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Events</h1>
                            <p className="text-gray-600 mt-1">
                                Discover our upcoming and past events
                            </p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {events.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto flex items-center justify-center mb-4">
                            <Calendar className="w-10 h-10 text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            No Events Yet
                        </h2>
                        <p className="text-gray-600">Check back soon for upcoming events!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {events.map(event => (
                            <EventCard key={event._id} event={event} />
                        ))}
                    </div>
                )}
            </main>

            <footer className="bg-white border-t border-gray-200 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <p className="text-center text-gray-600">
                        © 2024 EventHub. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
