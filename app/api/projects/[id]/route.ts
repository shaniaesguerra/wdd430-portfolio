import { NextRequest } from 'next/server';
import { getProjectsById } from '@/lib/projects-db';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }>}) {
    const { id } = await params;
    const projectId = Number(id);

    //Check if it is a valid id:
    if (!Number.isInteger(projectId)) {
        return Response.json(
        { error: "Project id must be a number." },
        { status: 400 }
        );
    }

    const project = getProjectsById(projectId);

    //Check
    if (!project) {
        return Response.json(
        { error: "Project not found." },
        { status: 404 }
        );
    }

    return Response.json(project)
}