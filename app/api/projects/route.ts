import { getProjects } from "@/lib/project-db";

export function GET(request: Request) {
  const type = new URL(request.url).searchParams.get("type");

  if (type !== null && type !== "opensource" && type !== "school") {
    return Response.json({ error: "Invalid project type" }, { status: 400 });
  }

  return Response.json(getProjects(type));
}