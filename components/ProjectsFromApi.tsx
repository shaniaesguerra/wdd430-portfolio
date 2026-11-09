"use client";

import { useEffect, useState } from "react";
import type { Project } from "../lib/project-db";
import ProjectList from "./ProjectList";

export default function ProjectsFromApi({ endpoint }: { endpoint: string }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        setProjects(await response.json());
      } catch (error) {
        setError(error instanceof Error ? error.message : "Could not load projects");
      }
    }

    void loadProjects();
  }, [endpoint]);

  if (error) return <p role="alert">{error}</p>;
  return <ProjectList projects={projects} />;
}