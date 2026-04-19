import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" />
            <span className="font-display text-lg">Siva Shankar</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            Digital Marketer & Developer — building growth for startups.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 text-sm md:items-end">
          <Link to="/contact" className="text-foreground hover:text-accent">
            Let's work together →
          </Link>
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} Siva Shankar
          </span>
        </div>
      </div>
    </footer>
  );
}
