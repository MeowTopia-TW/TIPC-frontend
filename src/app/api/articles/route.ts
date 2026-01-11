import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
// get all of the articles with related data
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const skip = (page - 1) * limit;

    // Fetch articles with all related data
    const [articles, total] = await Promise.all([
      prisma.article.findMany({
        skip,
        take: limit,
        orderBy: {
          publishedAt: 'desc',
        },
        include: {
          blocks: {
            orderBy: {
              position: 'asc',
            },
          },
          annotations: {
            orderBy: {
              position: 'asc',
            },
          },
          videos: true,
          podcasts: true,
          keyWords: {
            include: {
              keyWord: true,
            },
          },
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
      }),
      prisma.article.count(),
    ]);

    return NextResponse.json({
      success: true,
      data: articles,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch articles',
      },
      { status: 500 }
    );
  }
}
