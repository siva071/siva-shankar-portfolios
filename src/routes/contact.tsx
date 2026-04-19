import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Siva Shankar" },
      {
        name: "description",
        content:
          "Get in touch with Siva Shankar — email, WhatsApp or send a message directly.",
      },
      { property: "og:title", content: "Contact — Siva Shankar" },
      {
        property: "og:description",
        content: "Let's work together on your next campaign or project.",
      },
    ],
  }),
  component: ContactPage,
});

const EMAIL = "sivashankar87723@gmail.com";
const WHATSAPP = "https://wa.me/916304354656";

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="container-px mx-auto max-w-5xl py-20 md:py-28">
      <p className="text-sm text-muted-foreground">Contact</p>
      <h1 className="mt-2 font-display text-5xl leading-tight text-foreground md:text-7xl">
        Let's <span className="italic text-accent">work together</span>.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-muted-foreground">
        Got a startup that needs leads, a workflow to automate, or a website to
        ship? Drop a message — I usually reply within a day.
      </p>

      <div className="mt-16 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        {/* Direct channels */}
        <div className="space-y-4">
          <a
            href={`mailto:${EMAIL}`}
            className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/30"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <Mail className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </p>
                <p className="font-medium text-foreground">{EMAIL}</p>
              </div>
            </div>
            <Send className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-foreground/30"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  WhatsApp
                </p>
                <p className="font-medium text-foreground">Message me directly</p>
              </div>
            </div>
            <Send className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="rounded-2xl border border-dashed border-border p-6">
            <p className="text-sm text-muted-foreground">
              Available for freelance digital marketing, automation builds and
              startup websites.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={submit}
          className="rounded-2xl border border-border bg-card p-8"
        >
          <div className="space-y-5">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-accent"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full resize-none border-b border-border bg-transparent py-2 text-foreground outline-none transition-colors focus:border-accent"
                placeholder="Tell me about your project, goals, and timeline."
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Send message
            <Send className="h-4 w-4" />
          </button>

          {sent && (
            <p className="mt-4 text-center text-sm text-accent">
              Opening your email client…
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
