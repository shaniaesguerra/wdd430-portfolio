import ProjectsFromApi from "../components/ProjectsFromApi";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <p className="text-primary font-semibold">
          Hi, I&apos;m Shania Esguerra👋
        </p>

        <h1
          className="
            mt-4
            max-w-4xl
            text-5xl
            md:text-6xl
            font-bold
            text-foreground
          "
        >
          Welcome to my portfolio!
        </h1>

        <p
          className="
            mt-6
            max-w-2xl
            text-lg
            text-foreground-secondary
          "
        >
          Software Development student at BYU–Idaho who enjoys
          building web applications, APIs, and user-focused
          experiences.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            href="/projects"
            className="
              bg-primary
              text-white
              px-6
              py-3
              rounded-xl
              font-medium
              hover:opacity-90
              transition
            "
          >
            View Projects
          </Link>

          <Link
            href="/about"
            className="
              border border-border
              px-6
              py-3
              rounded-xl
              font-medium
              hover:bg-accent
              transition
            "
          >
            About Me
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">
            Featured Projects
          </h2>

          <Link
            href="/projects"
            className="text-primary hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="mt-10">
          <ProjectsFromApi endpoint="/api/projects?featured=true" />
        </div>
      </section>
    </main>
  );
}