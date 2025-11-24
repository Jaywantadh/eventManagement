'use client'

import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import { enUS } from 'date-fns/locale'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar as CalendarIcon, MapPin, Clock } from 'lucide-react'

const locales = {
    'en-US': enUS,
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
})

interface Event {
    _id: string
    name: string
    date: string
    venue?: string
    description?: string
    images?: string[]
}

interface CalendarEvent {
    id: string
    title: string
    start: Date
    end: Date
    resource: Event
}

interface EventCalendarProps {
    events: Event[]
}

export default function EventCalendar({ events }: EventCalendarProps) {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

    const calendarEvents: CalendarEvent[] = events.map(event => {
        const eventDate = new Date(event.date)
        return {
            id: event._id,
            title: event.name,
            start: eventDate,
            end: eventDate,
            resource: event,
        }
    })

    const handleSelectEvent = (event: CalendarEvent) => {
        setSelectedEvent(event.resource)
    }

    const eventStyleGetter = () => {
        return {
            style: {
                backgroundColor: '#2563EB',
                borderRadius: '6px',
                opacity: 0.9,
                color: 'white',
                border: 'none',
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: '500',
            },
        }
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            Event Calendar
                        </h2>
                        <p className="text-sm text-gray-600">
                            View all events in calendar format
                        </p>
                    </div>
                </div>

                <div className="calendar-container" style={{ height: '600px' }}>
                    <BigCalendar
                        localizer={localizer}
                        events={calendarEvents}
                        startAccessor="start"
                        endAccessor="end"
                        onSelectEvent={handleSelectEvent}
                        eventPropGetter={eventStyleGetter}
                        views={['month', 'week', 'day']}
                        defaultView="month"
                        popup
                        style={{ height: '100%' }}
                    />
                </div>
            </motion.div>

            <AnimatePresence>
                {selectedEvent && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedEvent(null)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        >
                            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 flex items-center justify-between rounded-t-2xl">
                                <h2 className="text-xl font-semibold text-white">
                                    Event Details
                                </h2>
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                                    aria-label="Close modal"
                                >
                                    <X className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            <div className="p-6">
                                {selectedEvent.images && selectedEvent.images.length > 0 && (
                                    <div className="mb-6 rounded-xl overflow-hidden">
                                        <img
                                            src={selectedEvent.images[0]}
                                            alt={selectedEvent.name}
                                            className="w-full h-64 object-cover"
                                        />
                                    </div>
                                )}

                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {selectedEvent.name}
                                </h3>

                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-3 text-gray-700">
                                        <Clock className="w-5 h-5 text-blue-600" />
                                        <span>
                                            {format(new Date(selectedEvent.date), 'MMMM d, yyyy')}
                                        </span>
                                    </div>

                                    {selectedEvent.venue && (
                                        <div className="flex items-center gap-3 text-gray-700">
                                            <MapPin className="w-5 h-5 text-blue-600" />
                                            <span>{selectedEvent.venue}</span>
                                        </div>
                                    )}
                                </div>

                                {selectedEvent.description && (
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            Description
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">
                                            {selectedEvent.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style jsx global>{`
        .rbc-calendar {
          font-family: inherit;
        }

        .rbc-header {
          padding: 12px 8px;
          font-weight: 600;
          color: #0f172a;
          border-bottom: 2px solid #e2e8f0;
        }

        .rbc-today {
          background-color: #eff6ff;
        }

        .rbc-off-range-bg {
          background-color: #f8fafc;
        }

        .rbc-event {
          padding: 4px 8px;
        }

        .rbc-event:hover {
          opacity: 1 !important;
          transform: scale(1.02);
          transition: all 0.2s;
        }

        .rbc-toolbar button {
          color: #0f172a;
          border: 1px solid #e2e8f0;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          transition: all 0.2s;
        }

        .rbc-toolbar button:hover {
          background-color: #f1f5f9;
          border-color: #cbd5e1;
        }

        .rbc-toolbar button.rbc-active {
          background-color: #2563eb;
          color: white;
          border-color: #2563eb;
        }

        .rbc-toolbar button.rbc-active:hover {
          background-color: #1d4ed8;
        }

        .rbc-month-view,
        .rbc-time-view {
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .rbc-date-cell {
          padding: 8px;
        }

        .rbc-date-cell.rbc-now {
          font-weight: 700;
          color: #2563eb;
        }
      `}</style>
        </>
    )
}
