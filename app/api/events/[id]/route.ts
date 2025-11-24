import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Event from '@/models/Event'

type RouteContext = {
    params: { id: string }
}

export async function GET(request: NextRequest, context: RouteContext) {
    try {
        await connectDB()
        const { id } = context.params

        const event = await Event.findById(id)

        if (!event || event.deleted) {
            return NextResponse.json({ error: 'Event not found' }, { status: 404 })
        }

        return NextResponse.json(event)
    } catch (error) {
        console.error('GET /api/events/[id] error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch event' },
            { status: 500 }
        )
    }
}

export async function PUT(request: NextRequest, context: RouteContext) {
    try {
        await connectDB()
        const { id } = context.params

        const body = await request.json()
        const { name, date, venue, description, images } = body

        if (!name || !date) {
            return NextResponse.json(
                { error: 'Name and date are required' },
                { status: 400 }
            )
        }

        const event = await Event.findByIdAndUpdate(
            id,
            {
                name,
                date: new Date(date),
                venue,
                description,
                images,
            },
            { new: true, runValidators: true }
        )

        if (!event) {
            return NextResponse.json({ error: 'Event not found' }, { status: 404 })
        }

        return NextResponse.json(event)
    } catch (error) {
        console.error('PUT /api/events/[id] error:', error)
        return NextResponse.json(
            { error: 'Failed to update event' },
            { status: 500 }
        )
    }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
    try {
        await connectDB()
        const { id } = context.params

        const event = await Event.findByIdAndUpdate(
            id,
            { deleted: true },
            { new: true }
        )

        if (!event) {
            return NextResponse.json({ error: 'Event not found' }, { status: 404 })
        }

        return NextResponse.json({ message: 'Event deleted successfully' })
    } catch (error) {
        console.error('DELETE /api/events/[id] error:', error)
        return NextResponse.json(
            { error: 'Failed to delete event' },
            { status: 500 }
        )
    }
}
