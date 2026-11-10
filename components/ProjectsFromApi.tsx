"use client";

import { useEffect, useState } from "react";
import type { Project } from "../lib/project-db";
import ProjectList from "./ProjectList";
import type { ReactNode } from "react";

export default function ProjectsFromApi({
  endpoint,
  loadingFallback,
}: {
  endpoint: string;
  loadingFallback?: ReactNode;
}) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        setProjects(await response.json());
      } catch (error) {
        setError(error instanceof Error ? error.message : "Could not load projects");
      } finally {
        setLoading(false);
      }
    }

    void loadProjects();
  }, [endpoint]);

  if (loading && loadingFallback) return <>{loadingFallback}</>;
  if (error) return <p role="alert">{error}</p>;
  return <ProjectList projects={projects} />;
}