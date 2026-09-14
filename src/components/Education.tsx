import { GraduationCap } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { education } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Education() {
  const reduce = useReducedMotion()

  return (
    <section id="education" className="scroll-mt-32 bg-ink-soft/55 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Formation"
            title="Education"
            description="Academic grounding in biotechnology at SRM Institute of Science and Technology."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-4 left-[15px] top-3 w-px bg-gradient-to-b from-signal via-ember/50 to-transparent sm:left-[19px] md:left-1/2 md:-translate-x-1/2" />

          {education.map((item) => (
            <Reveal key={item.institution}>
              <article className="relative grid gap-6 md:grid-cols-2 md:items-start md:gap-16">
                <div className="pl-12 md:pl-0 md:pr-10 md:text-right">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
                    {item.years}
                  </p>
                  <p className="mt-2 text-sm text-mist">{item.location}</p>
                </div>

                <div className="relative min-w-0 rounded-[1.4rem] border border-line bg-panel p-6 pl-12 card-shadow sm:p-8 sm:pl-14 md:pl-8">
                  <motion.span
                    className="absolute left-[11px] top-8 grid h-4 w-4 place-items-center rounded-full border border-signal bg-panel sm:left-[15px] md:left-[-41px] md:top-9"
                    initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  </motion.span>

                  <GraduationCap className="mb-4 text-signal" size={22} />
                  <h3 className="font-display text-3xl text-foam">{item.degree}</h3>
                  <p className="mt-2 text-lg text-signal">{item.specialization}</p>
                  <p className="mt-3 text-mist">{item.institution}</p>
                  {item.highlight ? (
                    <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ember">
                      {item.highlight}
                    </p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
