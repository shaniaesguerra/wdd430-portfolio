interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <div className="bg-card shadow-md rounded-xl p-6 mb-4">
            <h2 className="text-xl font-bold mb-2 text-foreground">{title}</h2>
            <p className="text-foreground text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-white text-card text-sm font-bold font-mono px-3 py-1 rounded-full drop-shadow-[0_0_2px_var(--foreground)] ">
                        {tech}
                    </span>
                ))}
            </div>
            {link && (
                <p className="mt-4">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-brand hover:text-brand-dark">
                        View Project 🡒
                    </a>
                </p>
            )}
        </div>
    );
}