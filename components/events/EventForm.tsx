'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { eventSchema, EventFormData } from '@/lib/validations'
import { useState } from 'react'
import { X } from 'lucide-react'
import confetti from 'canvas-confetti'
import toast from 'react-hot-toast'

interface EventFormProps {
    onSuccess?: () => void
    initialData?: any
    eventId?: string
}

export default function EventForm({
    onSuccess,
    initialData,
    eventId,
}: EventFormProps) {
    const [images, setImages] = useState<string[]>(initialData?.images || [])

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<EventFormData>({
        resolver: zodResolver(eventSchema),
        defaultValues: initialData || {},
    })

    const removeImage = (index: number) => {
        setImages(prev => prev.filter((_, i) => i !== index))
    }

    const triggerConfetti = () => {
        const duration = 3 * 1000
        const animationEnd = Date.now() + duration
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

        function randomInRange(min: number, max: number) {
            return Math.random() * (max - min) + min
        }

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now()

            if (timeLeft <= 0) {
                return clearInterval(interval)
            }

            const particleCount = 50 * (timeLeft / duration)

            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        }, 250)
    }

    const onSubmit = async (data: EventFormData) => {
        try {
            const payload = {
                ...data,
                images,
            }

            const url = eventId ? `/api/events/${eventId}` : '/api/events'
            const method = eventId ? 'PUT' : 'POST'

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!response.ok) throw new Error('Failed to save event')

            if (!eventId) {
                triggerConfetti()
                toast.success('🎉 Event created successfully!')
                reset()
                setImages([])
            } else {
                toast.success('Event updated successfully!')
            }
            onSuccess?.()
        } catch (error) {
            console.error('Form submission error:', error)
            toast.error('Failed to save event')
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Name
                </label>
                <input
                    {...register('name')}
                    type="text"
                    placeholder="Event Name"
                    className="input-field"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date
                    </label>
                    <input
                        {...register('date')}
                        type="date"
                        className="input-field"
                    />
                    {errors.date && (
                        <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Venue
                    </label>
                    <input
                        {...register('venue')}
                        type="text"
                        placeholder="Main Hall"
                        className="input-field"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                </label>
                <textarea
                    {...register('description')}
                    placeholder="Description"
                    rows={4}
                    className="input-field resize-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Images
                </label>
                <div className="space-y-4">
                    {images.length > 0 && (
                        <div className="grid grid-cols-3 gap-4">
                            {images.map((url, index) => (
                                <div key={index} className="relative group">
                                    <img
                                        src={url}
                                        alt={`Event ${index + 1}`}
                                        className="w-full h-32 object-cover rounded-lg border border-gray-200 dark:border-navy-700"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="flex gap-2">
                        <input
                            type="url"
                            placeholder="Paste image URL here (e.g., https://example.com/image.jpg)"
                            className="input-field flex-1"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                    const input = e.currentTarget
                                    if (input.value) {
                                        setImages(prev => [...prev, input.value])
                                        input.value = ''
                                        toast.success('Image added!')
                                    }
                                }
                            }}
                        />
                        <button
                            type="button"
                            onClick={(e) => {
                                const input = e.currentTarget.previousElementSibling as HTMLInputElement
                                if (input.value) {
                                    setImages(prev => [...prev, input.value])
                                    input.value = ''
                                    toast.success('Image added!')
                                }
                            }}
                            className="btn-secondary whitespace-nowrap"
                        >
                            Add URL
                        </button>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Paste a direct link to an image and press Enter or click Add.
                    </p>
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Saving...' : eventId ? 'Update Event' : 'Add Event'}
            </button>
        </form>
    )
}
