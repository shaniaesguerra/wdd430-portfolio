import { getProjectById } from "@/lib/project-db";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const numericId = Number(id);

  if (!/^\d+$/.test(id) || !Number.isSafeInteger(numericId) || numericId < 1) {
    return Response.json({ error: "Invalid project ID" }, { status: 400 });
  }

  const project = getProjectById(numericId);

  if (!project) {
    return Response.json({ error: "Project not found" }, { status: 404 });
  }

  return Response.json(project);
}