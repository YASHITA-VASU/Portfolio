import { motion } from "framer-motion"
import { experiences } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-32 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Practice"
            title="Experience"
            description="Internships and training across product research, usability, operations, and community."
          />
        </Reveal>

        <ol className="relative space-y-5 before:absolute before:bottom-3 before:left-[15px] before:top-3 before:w-px before:bg-gradient-to-b before:from-signal before:via-line before:to-transparent md:before:left-[9.6rem]">
          {experiences.map((item, index) => (
            <Reveal key={`${item.company}-${item.duration}`} delay={index * 0.05}>
              <li className="grid gap-3 md:grid-cols-[9.5rem_minmax(0,1fr)]">
                <p className="hidden pt-7 font-mono text-[11px] uppercase leading-relaxed tracking-[0.14em] text-ember md:block">
                  {item.duration}
                </p>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                  className="relative min-w-0 rounded-[1.4rem] border border-line bg-panel p-6 pl-12 card-shadow transition hover:border-signal/35 hover:shadow-[0_24px_44px_-24px_rgba(91,74,134,0.28)] md:pl-8"
                >
                  <span className="absolute left-[11px] top-8 h-3 w-3 rounded-full border border-signal bg-panel md:left-[-17px]" />
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal md:hidden">
                    {item.duration}
                  </p>
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="font-display text-2xl text-foam sm:text-[1.85rem]">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-mist">
                        {item.company}
                        <span className="text-line"> · </span>
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-mist sm:text-base">
                    {item.responsibilities.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.methods.map((method) => (
                      <span
                        key={method}
                        className="rounded-full border border-line bg-ink px-3 py-1 text-xs text-mist"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </motion.article>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
