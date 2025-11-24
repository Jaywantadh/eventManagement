import { Schema, model, models, Document } from 'mongoose'

export interface IEvent extends Document {
    name: string
    date: Date
    venue?: string
    description?: string
    images?: string[]
    deleted?: boolean
    createdAt: Date
    updatedAt: Date
}

const EventSchema = new Schema<IEvent>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        date: {
            type: Date,
            required: true,
        },
        venue: {
            type: String,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        images: {
            type: [String],
            default: [],
        },
        deleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

EventSchema.index({ name: 'text', description: 'text' })
EventSchema.index({ date: -1 })
EventSchema.index({ deleted: 1 })

export default models.Event || model<IEvent>('Event', EventSchema)
