import ContactCard from "@/components/ContactCard";

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <section
        className="
          rounded-3xl
          border border-border
          bg-surface
          p-8
        "
      >
        <p className="font-semibold text-primary">
          ABOUT ME
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Hi, I&apos;m Shania 👋
        </h1>

        <p className="mt-6 leading-8 text-foreground-secondary">
          I&apos;m a Software Development student at BYU–Idaho
          who enjoys building web applications, learning
          new technologies, and creating meaningful
          digital experiences.
        </p>

        <p className="mt-4 leading-8 text-foreground-secondary">
          Outside of coding, baking, and working on creative projects.
        </p>
      </section>

      <ContactCard />
    </main>
  );
}