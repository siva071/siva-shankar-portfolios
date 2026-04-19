import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Siva Shankar" },
      {
        name: "description",
        content:
          "Selected projects by Siva Shankar — campaigns, automation systems and IoT builds with measurable results.",
      },
      { property: "og:title", content: "Projects — Siva Shankar" },
      {
        property: "og:description",
        content: "Real projects with real numbers — leads, automation and shipped MVPs.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="container-px mx-auto max-w-6xl py-20 md:py-28">
      <p className="text-sm text-muted-foreground">Projects</p>
      <h1 className="mt-2 max-w-3xl font-display text-5xl leading-tight text-foreground md:text-6xl">
        Things I've shipped, with{" "}
        <span className="italic text-accent">real numbers</span>.
      </h1>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:border-foreground/30 hover:shadow-soft"
          >
            <div className="flex items-center justify-between">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {p.category}
              </p>
              <ArrowUpRight className="h-5 w-5 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <h2 className="mt-4 font-display text-3xl text-foreground">{p.title}</h2>
            <p className="mt-3 text-muted-foreground">{
                  p.slug === 'digital-marketing' ? 'Performance-focused digital marketing campaign with paid ads and conversion funnel.' :
                  p.slug === 'job-automation' ? 'Automated job application and tracking workflow with scraping and outreach.' :
                  p.slug === 'iot-crowd-detection' ? 'Sensor-based crowd density monitoring with real-time alerts.' :
                  p.slug === 'wordpress-website' ? 'Complete business website for local clothing brand with responsive design.' :
                  'Web development and client project delivery.'
                }</p>

            <div className="mt-6 flex flex-wrap gap-1.5">
              {p.tools.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 border-t border-border pt-4">
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                Result
              </p>
              <p className="mt-1 font-display text-xl text-accent">{p.result}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
