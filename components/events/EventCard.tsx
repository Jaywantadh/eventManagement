'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'

interface EventCardProps {
    event: {
        _id: string
        name: string
        date: string
        venue?: string
        description?: string
        images?: string[]
    }
}

export default function EventCard({ event }: EventCardProps) {
    const formatDate = (date: string) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
        >
            {event.images && event.images.length > 0 ? (
                <div className="h-48 overflow-hidden">
                    <img
                        src={event.images[0]}
                        alt={event.name}
                        className="w-full h-full object-cover"
                    />
                </div>
            ) : (
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                    <Calendar className="w-16 h-16 text-white opacity-50" />
                </div>
            )}

            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.name}</h3>

                <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{formatDate(event.date)}</span>
                    </div>

                    {event.venue && (
                        <div className="flex items-center gap-2 text-gray-600">
                            <MapPin className="w-4 h-4" />
                            <span className="text-sm">{event.venue}</span>
                        </div>
                    )}
                </div>

                {event.description && (
                    <p className="text-gray-600 text-sm line-clamp-3">
                        {event.description}
                    </p>
                )}
            </div>
        </motion.div>
    )
}
