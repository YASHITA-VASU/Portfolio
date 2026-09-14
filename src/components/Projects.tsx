import { motion } from "framer-motion"
import { projects } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

const spanClass = {
  featured: "lg:col-span-6",
  wide: "lg:col-span-3",
  full: "lg:col-span-6",
} as const

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-32 bg-ink-soft/55 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Selected work"
            title="Projects"
            description="Workstreams drawn from internships and training — research, usability, consumer insight, and community."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-6">
          {projects.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 0.06}
              className={spanClass[project.span]}
            >
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`flex h-full min-w-0 flex-col rounded-[1.5rem] border border-line bg-panel p-6 card-shadow transition hover:border-signal/30 hover:shadow-[0_28px_50px_-24px_rgba(91,74,134,0.28)] sm:p-8 ${
                  project.span === "featured"
                    ? "lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:p-10"
                    : ""
                }`}
              >
                <div className="min-w-0">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-signal">
                    {String(index + 1).padStart(2, "0")}
                    <span className="mx-2 text-line">/</span>
                    {project.context}
                  </p>
                  <h3 className="mt-4 font-display text-3xl leading-tight text-foam sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-mist sm:text-base">
                    {project.description}
                  </p>
                </div>

                <div className={`min-w-0 ${project.span === "featured" ? "mt-8 lg:mt-0" : "mt-6"}`}>
                  <ul className="space-y-2 text-sm text-mist">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ember" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-sm leading-relaxed text-foam/85">
                    <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                      Contribution
                    </span>
                    <span className="mt-2 block">{project.contribution}</span>
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.methods.map((method) => (
                      <span
                        key={method}
                        className="rounded-full bg-ink px-3 py-1 text-xs text-mist"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
