import { projects } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Selected work"
            title="Featured projects"
            description="Research-backed systems for detecting synthetic media — image first, then video at real-time pace."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.08}>
              <article className="hover-sheen flex h-full flex-col rounded-[2rem] border border-line bg-panel/80 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-signal">
                    {String(index + 1).padStart(2, "0")} · {project.date}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
                    {project.team}
                  </p>
                </div>
                <h3 className="mt-5 font-display text-3xl text-foam">
                  {project.name}
                </h3>
                <p className="mt-2 text-signal">{project.subtitle}</p>
                <p className="mt-5 text-sm leading-relaxed text-mist sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 rounded-2xl border border-line/80 bg-ink/40 p-4">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                    Problem
                  </p>
                  <p className="mt-2 text-sm text-foam/85">{project.problem}</p>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-mist">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-sm leading-relaxed text-foam/80">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                    Contribution
                  </span>
                  <span className="mt-2 block">{project.contribution}</span>
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white/4 px-3 py-1 text-xs text-mist"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
