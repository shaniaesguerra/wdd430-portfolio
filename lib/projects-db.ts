export interface Project {
    id: number;
    title: string;
    description: string;
    type: 'opensource' | 'school';
    technologies: string[];
    link?: string;
}


export const projects:Project[] = [
    {
        id: 1,
        title: 'Event Nexus API',
        description: "A RESTful API for managing events, attendees, and organizers.",
        type: 'school',
        technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
        link: "https://eventnexus-api-g95e.onrender.com"
    },
    {
        id: 2,
        title: "The Ghibli Archive",
        description: "A web application that provides information about Studio Ghibli films.",
        type: 'school',
        technologies: ["HTML", "CSS", "JavaScript", "Studio Ghibli API", "Jikan API"],
        link: "https://www.loom.com/share/83630ed4056240f7ac366bfc79c65670"
    }
];

export function getProjects(type?: string | null): Project[]{
    if (type) return projects.filter(p => p.type === type);
    return projects;
}

export function getProjectsById(id: number): Project | null {
    return projects.find(p => p.id === id) ?? null;
}