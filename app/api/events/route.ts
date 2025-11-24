import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/db'
import Event from '@/models/Event'

export async function GET(request: NextRequest) {
    try {
        await connectDB()

        const searchParams = request.nextUrl.searchParams
        const page = parseInt(searchParams.get('page') || '1')
        const limit = parseInt(searchParams.get('limit') || '10')
        const search = searchParams.get('search') || ''
        const sortBy = searchParams.get('sortBy') || 'date'
        const order = searchParams.get('order') || 'desc'

        const query: any = { deleted: { $ne: true } }

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { venue: { $regex: search, $options: 'i' } },
            ]
        }

        const skip = (page - 1) * limit
        const sortOrder = order === 'asc' ? 1 : -1

        const [events, total] = await Promise.all([
            Event.find(query)
                .sort({ [sortBy]: sortOrder })
                .skip(skip)
                .limit(limit)
                .lean(),
            Event.countDocuments(query),
        ])

        return NextResponse.json({
            events,
            pagination: {
                page,
                limit,
                total,
                pages: Math.ceil(total / limit),
            },
        })
    } catch (error) {
        console.error('GET /api/events error:', error)
        return NextResponse.json(
            { error: 'Failed to fetch events' },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB()

        const body = await request.json()
        const { name, date, venue, description, images } = body

        if (!name || !date) {
            return NextResponse.json(
                { error: 'Name and date are required' },
                { status: 400 }
            )
        }

        const event = await Event.create({
            name,
            date: new Date(date),
            venue,
            description,
            images: images || [],
        })

        return NextResponse.json(event, { status: 201 })
    } catch (error) {
        console.error('POST /api/events error:', error)
        return NextResponse.json(
            { error: 'Failed to create event' },
            { status: 500 }
        )
    }
}
