export default function Contact() {
    return (
        <main className="flex max-h-screen items-center justify-center px-4 py-12">
            <section className="w-full max-w-lg rounded-3xl border border-card bg-card p-8 ring-1 ring-foreground/15 sm:p-10">
                <div className="mb-6 text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand/90">
                        Let&apos;s connect
                    </p>
                    <h1 className="text-4xl font-bold text-foreground">Contact Me</h1>
                </div>

                <p className="mb-8 text-center text-base text-foreground/80 leading-relaxed">
                    Feel free to reach out with questions, opportunities, or just to say hello.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <a
                        href="mailto:example@email.com"
                        className="inline-flex items-center justify-center rounded-xl border border-brand bg-brand px-5 py-3 text-base font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-dark hover:bg-brand-dark"
                    >
                        Email Me
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shaniaarvie"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-brand bg-brand px-5 py-3 text-base font-semibold text-background transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-dark hover:bg-brand-dark"
                    >
                        LinkedIn
                    </a>
                </div>
            </section>
        </main>
    )
}