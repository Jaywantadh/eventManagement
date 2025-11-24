import { z } from 'zod'

export const eventSchema = z.object({
    name: z.string().min(1, 'Event name is required').max(200),
    date: z.string().min(1, 'Date is required'),
    venue: z.string().optional(),
    description: z.string().optional(),
    images: z.array(z.string()).optional(),
})

export type EventFormData = z.infer<typeof eventSchema>
