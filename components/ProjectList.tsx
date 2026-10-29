import ProjectCard from "./ProjectCard";

interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;  
}

interface ProjectListProps {
    projects: Project[];
}   

export default function ProjectList({ projects }: ProjectListProps) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    {...project}
                />
            ))}
        </section>
    );
}