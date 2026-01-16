import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// get all of the seletcions with related data
export async function GET(request: NextRequest) {
    try {
        const selections = await prisma.selections.findMany({
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    selection_blocks: true,
                    selection_annotations: true,
                    selection_keywords: {
                        include: {
                            KeyWords: true,
                        },
                    },
                    selection_podcasts: true,
                    selection_videos: true,
                },
            });

        return NextResponse.json({
            success: true,
            data: selections,
        });
    } catch (error) {
        console.error('Error fetching selections:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch selections',
        }, { status: 500 });
    }
}