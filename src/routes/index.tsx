import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react";
import heroPortrait from "@/assets/157194275.png";
import aboutImage from "@/assets/Screenshot_2026-04-18_145647-removebg-preview.png";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Siva Shankar — Digital Marketer & Developer" },
      {
        name: "description",
        content:
          "Helping startups generate leads with SEO, Ads & automation. 50+ leads, ₹2000 budget, 3+ shipped projects.",
      },
      { property: "og:title", content: "Siva Shankar — Portfolio" },
      {
        property: "og:description",
        content: "Performance marketing & automation-driven growth for startups.",
      },
    ],
  }),
  component: HomePage,
});


const skills = [
  "SEO",
  "Google Ads",
  "Meta Ads",
  "Automation",
  "WordPress",
  "IoT",
  "Content Marketing",
  "Canva",
];

function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="container-px mx-auto max-w-6xl pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-px w-8 bg-foreground" />
              Hi, I'm
            </p>
            <h1 className="font-display text-6xl leading-[0.95] text-foreground md:text-8xl">
              Siva <span className="italic text-accent">Shankar</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
            Digital Marketer & Web Developer
            </p>

            <h2 className="mt-8 max-w-xl text-balance font-display text-2xl leading-tight text-foreground md:text-3xl">
        I help startups grow using {" "}
              <span className="underline decoration-accent decoration-2 underline-offset-4">
               SEO, Paid Ads & Automation

              </span>
              .
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-muted-foreground">
              
I build websites and automation systems to improve performance and drive business growth.
            </p>

            {/* Professional Info & Social Links */}
            <div className="mt-6">
             
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/siva071"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-accent"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/siva-shankar-bonthala-46ab70250/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-accent"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
         
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-accent/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src={heroPortrait}
                alt="Illustrated portrait of Siva Shankar"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-border bg-background p-4 shadow-soft">
              <p className="text-xs text-muted-foreground">Currently</p>
              <p className="text-sm font-medium text-foreground">
                Open to Startup Opportunities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="relative border-t border-border">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2 min-h-screen py-20">
            {/* Left Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl" style={{
                background: 'linear-gradient(135deg, #f5f5f5, #eaf4ff)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.12)',
                padding: '28px'
              }}>
                <img
                  src={aboutImage}
                  alt="Siva Shankar - Digital Marketer & Web Developer"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover object-center"
                  style={{
                    objectPosition: 'center 20%',
                    transform: 'scale(1.05)'
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-2xl bg-foreground text-background p-6 shadow-lg">
                <p className="text-sm font-medium">Available for</p>
                <p className="text-lg font-bold">Open to Full-time Opportunities</p>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              <h1 className="font-display text-6xl md:text-8xl text-foreground">
                ABOUT ME
              </h1>
              <div className="space-y-6 text-lg text-muted-foreground max-w-xl">
                <p>
                  I’m Bonthala Siva Shankar,  a <span className="text-foreground font-medium"> digital marketer </span> and <span className="text-foreground font-medium"> web developer </span> focused on helping startups grow.
                </p>
                <p>
                  I specialize in SEO, paid ads, and automation to generate leads and improve business performance. I also build websites and automation systems that support growth and efficiency.
                </p>
                <p>
                  I’ve worked on real projects including running ad campaigns that generated 50+ leads with a low budget and building automation tools for job updates.
                </p>
                <p>
                  My goal is to help startups and growing businesses scale using practical marketing strategies and technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="border-t border-border">
        <div className="container-px mx-auto max-w-6xl py-20">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Selected work</p>
              <h2 className="mt-2 font-display text-4xl text-foreground md:text-5xl">
                Featured projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden items-center gap-1 text-sm text-foreground hover:text-accent md:inline-flex"
            >
              All projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-foreground/30 hover:shadow-soft"
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {p.category}
                </p>
                <h3 className="mt-3 font-display text-2xl text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{
                  p.slug === 'digital-marketing' ? 'Performance-focused digital marketing campaign with paid ads and conversion funnel.' :
                  p.slug === 'job-automation' ? 'Automated job application and tracking workflow with scraping and outreach.' :
                  p.slug === 'iot-crowd-detection' ? 'Sensor-based crowd density monitoring with real-time alerts.' :
                  p.slug === 'wordpress-website' ? 'Complete business website for local clothing brand with responsive design.' :
                  'Web development and client project delivery.'
                }</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tools.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-medium text-accent">{p.result}</span>
                  <ArrowUpRight className="h-4 w-4 text-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="border-t border-border">
        <div className="container-px mx-auto max-w-6xl py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
            <div>
              <p className="text-sm text-muted-foreground">Toolbox</p>
              <h2 className="mt-2 font-display text-4xl text-foreground">
                Skills at a glance
              </h2>
              <Link
                to="/about"
                className="mt-4 inline-flex items-center gap-1 text-sm text-foreground hover:text-accent"
              >
                Full breakdown <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container-px mx-auto max-w-6xl py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-10 text-background md:p-16">
            <div className="absolute right-0 top-0 h-40 w-40 -translate-y-12 translate-x-12 rounded-full bg-accent/40 blur-3xl" />
            <p className="text-sm opacity-70">Let's talk</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
              Have a startup that needs leads, automation or a website?
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
