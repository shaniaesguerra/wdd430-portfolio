interface SkillCardProps {
    name: string;
    technologies: {
        tech: string,
        level: string
    }[];
}

export default function SkillCard({ name, technologies }: SkillCardProps) {
    return (    
        <div className="flex flex-col shadow-md bg-transparent drop-shadow-[0_0_6px_rgba(255,255,255,0.4)] rounded-xl p-4 mb-4">
            <h2 className="text-xl font-bold mb-2 text-white-800">{name}</h2>
            <section className="flex flex-wrap gap-2 bg-white p-4 rounded-xl">
            {technologies.map((tech, index) => (
                    <span key={index} className="bg-slate-200 text-slate-800 px-3 py-1 rounded-full text-sm">{tech.tech} - {tech.level}</span>
                ))}
            </section>
        </div>
    );
}