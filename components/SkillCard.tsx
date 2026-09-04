interface SkillCardProps {
    name: string;
    technologies: {
        tech: string,
        level: string
    }[];
}

export default function SkillCard({ name, technologies }: SkillCardProps) {
    return (    
        <div className="flex flex-col shadow-md bg-card rounded-xl p-4 mb-4">
            <h2 className="text-xl ml-4 mt-2 font-bold mb-2 text-white-800 uppercase">{name}</h2>
            <section className="flex flex-wrap gap-2 p-4">
            {technologies.map((tech, index) => (
                    <span key={index} className="bg-white text-card text-sm font-bold font-mono px-3 py-1 rounded-full drop-shadow-[0_0_2px_var(--foreground)]  px-3 py-1 rounded-full">{tech.tech} - {tech.level}</span>
                ))}
            </section>
        </div>
    );
}