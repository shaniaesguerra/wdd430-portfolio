import SkillCard from "./SkillCard";    

interface Skill {
    name: string;
    technologies: {
        tech: string;
        level: string;
    }[];
}

interface SkillListProps {
    skills: Skill[];
}

export default function SkillList({ skills }: SkillListProps) {
    return (
        <div className="container mx-auto p-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
                <SkillCard key={skill.name} {...skill}/>
            ))}
        </div>
    );
}