import ProjectList from "@/components/ProjectList";

const projects = [
  {
    title: "Event Nexus API",
    description: "A RESTful API for managing events, attendees, and organizers.",
    technologies: ["Node.js", "Express", "MongoDB", "Mongoose"],
    link: "https://eventnexus-api-g95e.onrender.com"
  },
  {
    title: "The Ghibli Archive",
    description: "A web application that provides information about Studio Ghibli films.",
    technologies: ["HTML", "CSS", "JavaScript", "Studio Ghibli API", "Jikan API"],
    link: "https://www.loom.com/share/83630ed4056240f7ac366bfc79c65670"
  }
];

export default function Home() {
  return (
    <main className="container mx-auto p-4">
      <section className="mb-8 text-center">
        <h1 className="text-2xl font-bold mb-4 uppercase">My Portfolio</h1>
        <p className="text-sm font-mono text-foreground">
          Welcome to my portfolio! Here you will find a selection of my projects showcasing my skills and experience in web development. Feel free to explore and learn more about the technologies I have used and the work I have done.
        </p>
      </section>
      <ProjectList projects={projects} />
    </main>
  );
}