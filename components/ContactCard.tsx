export default function ContactCard() {
  return (
    <section
      className="
        mt-12
        rounded-3xl
        border border-border
        bg-surface
        p-8
      "
    >
      <p className="font-semibold text-primary">
        LET&apos;S CONNECT
      </p>

      <h2 className="mt-2 text-3xl font-bold text-foreground">
        Interested in working together?
      </h2>

      <p className="mt-4 max-w-2xl leading-7 text-foreground-secondary">
        I&apos;m always excited to connect with other developers,
        learn new technologies, and discuss opportunities
        in software development.
      </p>

      <div className="mt-6 space-y-3">
        <p>
          📧{" "}
          <a
            href="mailto:your.email@example.com"
            className="text-primary hover:underline"
          >
            your.email@example.com
          </a>
        </p>

        <p>
          💼{" "}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            LinkedIn
          </a>
        </p>

        <p>
          💻{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            GitHub
          </a>
        </p>
      </div>
    </section>
  );
}