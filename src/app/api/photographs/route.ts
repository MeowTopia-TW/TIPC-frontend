import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/photographs - Get all photographs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get('limit');

    const photographs = await prisma.photograph.findMany({
      orderBy: {
        photoDate: 'desc', // Most recent photos first
      },
      ...(limit ? { take: parseInt(limit) } : {}),
      include: {
        nineBlocks: {
          include: {
            nineBlock: true,
          },
        },
        cakeCategory: {
          include: {
            cakeCategory: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: photographs,
    });
  } catch (error) {
    console.error('Error fetching photographs:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch photographs',
      },
      { status: 500 }
    );
  }
}
