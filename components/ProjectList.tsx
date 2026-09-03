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
        <section className="container mx-auto p-4">
            {projects.map((project) => (
                <ProjectCard key={project.title} {...project}/>
            ))}
        </section>
    );
}