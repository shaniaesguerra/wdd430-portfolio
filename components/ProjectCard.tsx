interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <div className="bg-background border-2 border-card drop-shadow-[5px_4px_15px_var(--card)] rounded-xl p-6 mb-4 h-full flex flex-col">
            <h2 className="text-xl font-bold mb-2 text-foreground">{title}</h2>
            <p className="text-foreground text-sm mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-background text-brand-dark text-sm font-bold font-sans px-3 py-1 rounded-full border border-brand-dark">
                        {tech}
                    </span>
                ))}
            </div>
            {link && (
                <div className="pt-6 mt-auto">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand hover:text-brand-dark p-2 border-brand hover:border-brand-dark rounded px-4 transition-colors duration-300 bg-transparent border"
                    >View Project 🡒</a>
                </div>
            )}
        </div>
    );
}