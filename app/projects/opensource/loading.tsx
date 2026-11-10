export default function Loading() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-6">
          {[1, 2, 3].map((project) => (
            <div
              key={project}
              className="
                rounded-2xl
                border border-border
                p-6
              "
            >
              {/* Title */}
              <div className="h-7 w-1/3 animate-pulse rounded bg-accent" />

              {/* Description */}
              <div className="mt-4 h-4 w-full animate-pulse rounded bg-accent" />
              <div className="mt-2 h-4 w-5/6 animate-pulse rounded bg-accent" />

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((tech) => (
                  <div
                    key={tech}
                    className="
                      h-8
                      w-20
                      animate-pulse
                      rounded-full
                      bg-accent
                    "
                  />
                ))}
              </div>

              {/* Button */}
              <div className="mt-6 h-10 w-32 animate-pulse rounded-xl bg-accent" />
            </div>
          ))}
        </div>
    </main>
  );
}