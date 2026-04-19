import { createFileRoute } from "@tanstack/react-router";
import heroPortrait from "@/assets/157194275.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Siva Shankar" },
      {
        name: "description",
        content: "Learn more about Siva Shankar - Digital Marketer & Web Developer passionate about innovation and driven by impact.",
      },
      { property: "og:title", content: "About — Siva Shankar" },
      {
        property: "og:description",
        content: "Passionate about innovation and driven by impact in digital marketing and web development.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO SECTION */}
      <section className="relative">
        <div className="container-px mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2 min-h-screen py-20">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="font-display text-6xl md:text-8xl text-foreground">
                ABOUT ME
              </h1>
              
              <div className="space-y-6 text-lg text-muted-foreground max-w-xl">
                <p>
                  I'm Bonthala Siva Shankar, a digital marketer and web developer focused on helping startups grow.
                </p>
                
                <p>
                  I specialize in SEO, paid ads, and automation to generate leads and improve business performance. I also build websites and automation systems that support growth and efficiency.
                </p>
                
                <p>
                  I've worked on real projects including running ad campaigns that generated 50+ leads with a low budget and building automation tools for job updates.
                </p>
                
                <p>
                  My goal is to help startups and growing businesses scale using practical marketing strategies and technology.
                </p>
              </div>
              
                          </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={heroPortrait}
                  alt="Siva Shankar - Digital Marketer & Web Developer"
                  width={600}
                  height={800}
                  className="h-full w-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-foreground text-background p-6 shadow-lg">
                <p className="text-sm font-medium">Available for</p>
                <p className="text-lg font-bold">Full-time Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADDITIONAL CONTENT SECTIONS */}
      <section className="border-t border-border">
        <div className="container-px mx-auto max-w-6xl py-20">
          <div className="grid gap-16 md:grid-cols-2">
            {/* Expertise */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-6">Expertise</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="font-medium text-foreground">Digital Marketing</p>
                    <p className="text-sm text-muted-foreground">SEO, Google Ads, Meta Ads, Content Strategy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="font-medium text-foreground">Web Development</p>
                    <p className="text-sm text-muted-foreground">React, Next.js, TypeScript, WordPress</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-2 w-2 rounded-full bg-accent mt-2" />
                  <div>
                    <p className="font-medium text-foreground">Automation</p>
                    <p className="text-sm text-muted-foreground">Workflow Automation, API Integration, Process Optimization</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Philosophy */}
            <div>
              <h2 className="font-display text-3xl text-foreground mb-6">Philosophy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I focus on combining marketing and technology to solve real business problems and drive growth.
                </p>
                <p>
                  My goal is to build systems that not only perform well but deliver long-term value for startups and businesses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section className="border-t border-border">
        <div className="container-px mx-auto max-w-6xl py-20">
          <h2 className="font-display text-3xl text-foreground mb-12">Education</h2>
          <div className="space-y-8">
            <div 
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out animate-fade-in-up"
              style={{
                animationDelay: '0.1s'
              }}
            >
              <div className="flex items-start gap-6 p-6 rounded-2xl border border-border bg-card">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">
                  10th
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">SSC (10th)</p>
                  <p className="text-sm text-muted-foreground">Harish Residential School</p>
                  <p className="text-sm text-accent font-medium">2019 – 2020</p>
                   <p className="text-xs text-muted-foreground">CGPA: 5.3</p>
                </div>
              </div>
            </div>

            {/* Line animation from 10th to 12th */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted-foreground/30 opacity-0 animate-fade-in-up" style={{
                animationDelay: '0.2s',
                transform: 'translateY(60px)',
                height: '60px',
                marginLeft: '-2px'
              }}></div>
            </div>

            <div 
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out animate-fade-in-up"
              style={{
                animationDelay: '0.4s'
              }}
            >
              <div className="flex items-start gap-6 p-6 rounded-2xl border border-border bg-card">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">
                  12th
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Intermediate (MPC)</p>
                  <p className="text-sm text-muted-foreground">Space Junior College</p>
                  <p className="text-sm text-accent font-medium">2020 – 2022</p>
                  <p className="text-xs text-muted-foreground">CGPA: 5.2</p>
                </div>
              </div>
            </div>

            {/* Middle line from 12th to B.Tech */}
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-muted-foreground/30 opacity-0 animate-fade-in-up" style={{
                animationDelay: '0.5s',
                transform: 'translateY(60px)',
                height: '60px',
                marginLeft: '-2px'
              }}></div>
            </div>

            <div 
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out animate-fade-in-up"
              style={{
                animationDelay: '0.6s'
              }}
            >
              <div className="flex items-start gap-6 p-6 rounded-2xl border border-border bg-card">
                <div className="h-12 w-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-lg">
                  B.Tech
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Electronics and Communication Engineering (ECE)</p>
                  <p className="text-sm text-muted-foreground">Siddhartha Institute of Science and Technology</p>
                  <p className="text-sm text-accent font-medium">2022 – 2026 (Pursuing)</p>
                  <p className="text-xs text-muted-foreground">CGPA:7.5</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
