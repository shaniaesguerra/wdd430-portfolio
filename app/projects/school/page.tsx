import ProjectsFromApi from "@/components/ProjectsFromApi";

export default function SchoolProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <section
        className="
          rounded-3xl
          border border-border
          bg-surface
          p-8
        "
      >
        <p className="font-semibold text-primary">
          SCHOOL PROJECTS
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          School Project Page 👩🏽‍💻
        </h1>
      </section>

      <section
        className="
          rounded-3xl
          border border-border
          bg-surface
          p-8
        "
      >
        <ProjectsFromApi endpoint="/api/projects?type=school" />
      </section>
    </main>
  );
}