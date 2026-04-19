import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects, type Project } from "@/lib/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Siva Shankar` : "Project — Siva Shankar";
    const desc = p?.summary ?? "Project case study.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-px mx-auto max-w-3xl py-24 text-center">
      <h1 className="font-display text-5xl text-foreground">Project not found</h1>
      <p className="mt-3 text-muted-foreground">
        The project you're looking for doesn't exist.
      </p>
      <Link
        to="/projects"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm text-background"
      >
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="container-px mx-auto max-w-4xl py-16 md:py-24">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> All projects
      </Link>

      <header className="mt-8">
        <p className="text-sm uppercase tracking-wider text-muted-foreground">
          {project.category}
        </p>
        <h1 className="mt-3 font-display text-5xl leading-tight text-foreground md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          {project.summary}
        </p>
      </header>

      {/* Highlight result */}
      <div className="mt-12 rounded-2xl border border-border bg-foreground p-8 text-background">
        <p className="text-sm opacity-70">Headline result</p>
        <p className="mt-2 font-display text-3xl md:text-4xl">{project.result}</p>
      </div>

      {/* Problem / Solution */}
      <div className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-foreground">The problem</h2>
          <p className="mt-3 text-muted-foreground">{project.problem}</p>
        </div>
        <div>
          <h2 className="font-display text-2xl text-foreground">The solution</h2>
          <p className="mt-3 text-muted-foreground">{project.solution}</p>
        </div>
      </div>

      {/* Tools */}
      <section className="mt-16">
        <h2 className="font-display text-2xl text-foreground">Tools</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tools.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="mt-16">
        <h2 className="font-display text-2xl text-foreground">Results</h2>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:grid-cols-4">
          {project.results.map((r) => (
            <div key={r.label} className="bg-background p-6">
              <p className="font-display text-3xl text-accent">{r.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{r.label}</p>
            </div>
          ))}
        </div>
      </section>

      
      {/* Next project */}
      <section className="mt-20 border-t border-border pt-10">
        <Link
          to="/projects/$slug"
          params={{ slug: next.slug }}
          className="group flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-muted-foreground">Next project</p>
            <p className="mt-1 font-display text-2xl text-foreground group-hover:text-accent">
              {next.title}
            </p>
          </div>
          <ArrowUpRight className="h-6 w-6 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </section>
    </article>
  );
}
