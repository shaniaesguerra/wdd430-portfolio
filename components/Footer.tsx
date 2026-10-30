import Link from "next/link";
const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {  
  return (
    <footer
      className="
        mt-24
        border-t border-border
        bg-surface
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-6
          py-12
        "
      >
        <div
          className="
            flex
            flex-col
            gap-8

            md:flex-row
            md:justify-between
            md:items-start
          "
        >
          <div>
            <h2
              className="
                text-2xl
                font-bold
                text-primary
              "
            >
              Shania.
            </h2>

            <p
              className="
                mt-3
                max-w-sm
                text-foreground-secondary
              "
            >
              Software Developer
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">
              Navigation
            </h3>

            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/"
                  className="
                    text-foreground-secondary
                    hover:text-primary
                  "
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="
                    text-foreground-secondary
                    hover:text-primary
                  "
                >
                  About
                </Link>
              </li>
              
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground">
              Connect
            </h3>

            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://github.com"
                  className="
                    text-foreground-secondary
                    hover:text-primary
                  "
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://linkedin.com"
                  className="
                    text-foreground-secondary
                    hover:text-primary
                  "
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="mailto:you@example.com"
                  className="
                    text-foreground-secondary
                    hover:text-primary
                  "
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>
          <div
            className="
                mt-10
                border-t border-border
                pt-6
            "
            >
            <p className="text-center text-sm text-foreground-secondary">
               Copyright &copy; {CURRENT_YEAR} Shania Esguerra. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  );
}