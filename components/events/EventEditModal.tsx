'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import EventForm from './EventForm'

interface EventEditModalProps {
    event: any
    onClose: () => void
    onSuccess: () => void
}

export default function EventEditModal({
    event,
    onClose,
    onSuccess,
}: EventEditModalProps) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
                <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-gray-900">Edit Event</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    <EventForm
                        initialData={{
                            name: event.name,
                            date: new Date(event.date).toISOString().split('T')[0],
                            venue: event.venue,
                            description: event.description,
                            images: event.images,
                        }}
                        eventId={event._id}
                        onSuccess={onSuccess}
                    />
                </div>
            </motion.div>
        </div>
    )
}
