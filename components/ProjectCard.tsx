interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <div className="bg-white shadow-md rounded-xl p-6 mb-4">
            <h2 className="text-xl font-bold mb-2 text-slate-800">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-700 text-white-800 text-sm font-medium px-3 py-1 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>
            {link && (
                <p className="mt-4">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-blue-700">
                        View Project
                    </a>
                </p>
            )}
        </div>
    );
}