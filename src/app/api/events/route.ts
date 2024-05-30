import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      basePortalLink,
      socialPlatformId,
      eventTypeId,
      language,
      localTime,
      timeZone,
      utcTime,
      longitude,
      latitude,
      locationName,
    } = await req.json();

    console.log('Received data:', {
      name,
      basePortalLink,
      socialPlatformId,
      eventTypeId,
      language,
      localTime,
      timeZone,
      utcTime,
      longitude,
      latitude,
      locationName,
    });

    // Check if socialPlatformId exists
    const socialPlatform = await prisma.socialPlatform.findUnique({
      where: { id: socialPlatformId },
    });

    if (!socialPlatform) {
      return NextResponse.json({ error: `Invalid socialPlatformId: ${socialPlatformId}` }, { status: 400 });
    }

    // Check if eventTypeId exists
    const eventType = await prisma.eventType.findUnique({
      where: { id: eventTypeId },
    });

    if (!eventType) {
      return NextResponse.json({ error: `Invalid eventTypeId: ${eventTypeId}` }, { status: 400 });
    }

    const newEvent = await prisma.event.create({
      data: {
        name,
        basePortalLink,
        socialPlatformId,
        eventTypeId,
        language,
        localTime: new Date(localTime),
        timeZone,
        utcTime: new Date(utcTime),
        longitude: parseFloat(longitude),
        latitude: parseFloat(latitude),
        locationName,
      },
    });

    console.log('Event created:', newEvent);
    return NextResponse.json(newEvent, { status: 200 });
  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Event creation failed' }, { status: 500 });
  }
}
