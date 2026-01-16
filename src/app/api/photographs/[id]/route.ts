import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/photographs/[id] - Get a single photograph by id
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const photograph = await prisma.photograph.findUnique({
      where: {
        id,
      },
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

    if (!photograph) {
      return NextResponse.json(
        {
          success: false,
          error: 'Photograph not found',
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: photograph,
    });
  } catch (error) {
    console.error('Error fetching photograph:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch photograph',
      },
      { status: 500 }
    );
  }
}
