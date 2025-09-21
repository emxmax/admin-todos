import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            { description: 'Alma 1', complete: true},
            { description: 'Alma 2'},
            { description: 'Alma 3'},
            { description: 'Alma 4'},
        ]
    });

    return NextResponse.json({
        message: 'Seed Executed'
    });
}