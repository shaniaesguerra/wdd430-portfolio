interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export default function ProjectCard({ title, description, technologies, link }: ProjectCardProps) {
    return (
        <div className="border border-[#D7D0E3] dark:border-[#392F4A] rounded-lg p-6 bg-white dark:bg-[#111018] shadow-md hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-[#4B1D68] dark:text-[#DDBCFB] mb-2">{title}</h2>
            <p className="text-[#4B1D68] dark:text-[#DDBCFB] mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {technologies.map((tech, index) => (
                    <span key={index} className="bg-[#EDE0F7] dark:bg-[#392F4A] text-[#4B1D68] dark:text-[#DDBCFB] px-2 py-1 rounded-full text-sm">{tech}</span>
                ))}
            </div>
            {link && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#4B1D68] dark:text-[#DDBCFB] hover:underline">
                    View Project
                </a>
            )}
        </div>
    );
}
