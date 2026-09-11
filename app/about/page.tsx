import SkillList from "@/components/SkillList";
import Image from "next/image";

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
        <main className="container mx-auto grid grid-cols-1 gap-6 p-4 lg:grid-cols-3">
        <section className="lg:col-span-1">
            <h2 className="mb-7 text-2xl font-bold uppercase text-brand">About Me</h2>
            <Image
                src="/profile.jpg"
                alt="Shania Esguerra"
                className="m-auto rounded-full object-cover"
                width={200}
                 height={200} />
            <div className="rounded-xl bg-card border-2 border-card drop-shadow-[5px_4px_15px_var(--card)] p-6 mt-7 "> 
                <p className="text-center font-mono text-md text-foreground">
                    I am Shania Esguerra, an aspiring full-stack developer currently studying Software Development at BYU-Idaho. I am currently learning Next.js, React, and Tailwind CSS.
                </p>
            </div>
            <div className=" p-6 mt-4">
                <p className="text-md text-center text-foreground">
                    I enjoy building APIs, learning new tools, and solving problems through clean, thoughtful code. My projects have helped me gain experience with backend development, authentication, automated testing, and responsive interfaces. I&apos;m preparing for 2027 SWE internships and love collaborating, documenting my work, and continuously improving my skills. I&apos;m excited to contribute to a team where I can build meaningful products and grow as a developer.
                </p>
            </div>
        </section>

        <section className="lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold uppercase text-brand">Skills</h2>
            <SkillList skills={skills} />
        </section>
    </main>
    );
}