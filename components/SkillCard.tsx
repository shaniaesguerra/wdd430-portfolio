interface SkillCardProps {
    name: string;
    technologies: {
        tech: string,
        level: string
    }[];
}

export default function SkillCard({ name, technologies }: SkillCardProps) {
    return (    
        <div className="flex flex-col bg-background border-2 border-card drop-shadow-[5px_4px_15px_var(--card)] rounded-xl p-6 mb-4 h-full">
            <h2 className="text-xl ml-4 mt-2 font-bold mb-2 text-white-800 uppercase">{name}</h2>
            <section className="flex flex-wrap gap-2 p-4">
            {technologies.map((tech, index) => (
                    <span key={index} className="bg-background text-brand text-sm font-bold font-sans px-3 py-1.5 rounded-full border border-brand">
                        {tech.tech} - {tech.level}
                    </span>
                ))}
            </section>
        </div>
    );
}