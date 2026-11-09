import ProjectNav from "@/components/ProjectNav";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ProjectNav />

      {children}
    </section>
  );
}