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
        <section className="mx-auto grid max-w-5xl grid-cols-1 gap-6 p-4 md:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project}/>
            ))}
        </section>
    );
}