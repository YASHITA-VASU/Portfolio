import { experiences } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Practice"
            title="Experience"
            description="Roles where analysis, AI systems, and frontend craft met real product and decision work."
          />
        </Reveal>

        <ol className="relative space-y-6 before:absolute before:bottom-0 before:left-4 before:top-2 before:w-px before:bg-line md:before:left-[7.5rem]">
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.duration}`} delay={index * 0.05}>
              <li className="grid gap-4 md:grid-cols-[7.5rem_1fr]">
                <p className="hidden pt-6 font-mono text-[11px] uppercase leading-relaxed tracking-[0.16em] text-ember md:block">
                  {item.duration}
                </p>
                <article className="relative rounded-3xl border border-line bg-panel/75 p-6 pl-12 transition hover:border-signal/35 md:pl-8">
                  <span className="absolute left-[9px] top-8 h-3 w-3 rounded-full border border-signal bg-ink md:left-[-13px]" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal md:hidden">
                    {item.duration}
                  </p>
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl text-foam">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-mist">{item.company}</p>
                    </div>
                    {item.project ? (
                      <p className="rounded-full border border-ember/30 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
                        {item.project}
                      </p>
                    ) : null}
                  </div>

                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-mist sm:text-base">
                    {item.responsibilities.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 border-t border-line pt-4 text-sm text-foam/80">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                      Learning
                    </span>
                    <span className="mt-2 block">{item.learnings}</span>
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line px-3 py-1 text-xs text-mist"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
