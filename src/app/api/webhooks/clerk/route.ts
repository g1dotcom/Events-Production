
import prisma from '@/lib/database';
import type { WebhookEvent } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Clerk Webhook: create or delete a user in the database by Clerk ID
// add GET method to the route
export async function GET() {
    return NextResponse.json({ message: 'Hello Clerk Webhooks!' });
}
export async function POST(req: Request) {
    try {
        // Parse the Clerk Webhook event
        const evt = (await req.json()) as WebhookEvent;
        console.log('Clerk Webhook event:', evt);
        

        const { id: clerkUserId } = evt.data;
        console.log('Clerk User ID:', clerkUserId);
        
        if (!clerkUserId)
            return NextResponse.json(
                { error: 'No user ID provided' },
                { status: 400 },
            );

        // Create or delete a user in the database based on the Clerk Webhook event
        let user = null;
        switch (evt.type) {
            case 'user.created': {
                console.log('User created');
                
                try {
                    user = await prisma.user.create({
                        data: {
                            clerkUserId,
                        },
                    });
                } catch (error) {
                    console.error('Error creating user:', error);
                }
                // user = await prisma.user.upsert({
                //     where: { 
                //         clerkUserId,
                //     },
                //     update: {
                //         clerkUserId,
                //     },
                //     create: {
                //         clerkUserId,
                //     },
                // });
                break;
            }
            case 'user.deleted': {
                user = await prisma.user.delete({
                    where: {
                        clerkUserId,
                    },
                });
                break;
            }
            default:
                break;
        }

        return NextResponse.json({ user });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

