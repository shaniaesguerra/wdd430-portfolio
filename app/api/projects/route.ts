import { NextRequest } from 'next/server';
import { getProjects } from '@/lib/projects-db';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");

    if (type && type !== "opensource" && type !== "school") {
        return Response.json(
        { error: "Invalid type" },
        { status: 400 }
        ) ;
    };

    const projects = getProjects(type);
    return Response.json(projects);
}