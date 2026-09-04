import SkillList from "@/components/SkillList";

const skills = [
    {
        name: "Languages",
        technologies: [
            { tech: "JavaScript", level: "Intermediate" },
            { tech: "TypeScript", level: "Beginner" },
            { tech: "Python", level: "Beginner" },
            { tech: "C#", level: "Intermediate" },
            { tech: "SQL", level: "Intermediate" }
        ]
    },
    {
        name: "Frontend Development",
        technologies: [
            { tech: "HTML", level: "Intermediate" },
            { tech: "CSS", level: "Intermediate" },
        ]
    },
    {
        name: "Frameworks & Libraries",
        technologies: [
            { tech: "Node.js", level: "Intermediate" },
            { tech: "Express", level: "Intermediate" },
            { tech: "React", level: "Beginner" },
            { tech: "Next.js", level: "Beginner" },
            { tech: "Tailwind CSS", level: "Beginner" },
            { tech: "Passport.js", level: "Beginner" }
        ]
    },
    {
        name: "Databases",
        technologies: [
            { tech: "MongoDB", level: "Intermediate" },
            { tech: "PostgreSQL", level: "Beginner" }
        ]
    },
    {
        name: "Testing and Documentation",
        technologies: [
            { tech: "Jest", level: "Beginner" },
            { tech: "Supertest", level: "Beginner" },    
            { tech: "Swagger", level: "Beginner" }
        ]
    },
    {
        name: "Tools & Platforms",
        technologies: [
            { tech: "Git", level: "Intermediate" },
            { tech: "GitHub", level: "Intermediate" },
            { tech: "Render", level: "Intermediate" },
            { tech: "Postman", level: "Beginner" },
            { tech: "VS Code", level: "Intermediate" }
        ]
    }
];

export default function About() {
    return (
        <main className="container mx-auto p-4 space-y-6">
            <h2 className="text-2xl font-bold mb-4 uppercase">About Me</h2>
            <section className="bg-card shadow-md rounded-xl p-6">
                <p className="text-white mb-4 font-mono text-md text-center">I am Shania Esguerra, an aspiring full-stack developer currently studying Software Development at BYU-Idaho. I am currently learning Next.js, React, and Tailwind CSS.</p> 
                <p className="text-white mb-4 text-sm">{"I enjoy building APIs, learning new tools, and solving problems through clean, thoughtful code. My projects have helped me gain experience with backend development, authentication, automated testing, and responsive interfaces. I\'m preparing for 2027 SWE internships and love collaborating, documenting my work, and continuously improving my skills. I\'m excited to contribute to a team where I can build meaningful products and grow as a developer."}</p>
            </section>
            <h2 className="text-2xl font-bold uppercase">Skills</h2>
            <SkillList skills={skills} />
        </main>
    );
}