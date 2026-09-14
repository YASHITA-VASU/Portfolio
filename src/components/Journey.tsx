import { motion } from "framer-motion"
import { journey } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Journey() {
  return (
    <section id="journey" className="scroll-mt-32 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="07"
            eyebrow="Trajectory"
            title="My journey"
            description="A compact arc from first industry rooms to the year of graduation."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-6 left-[15px] top-6 hidden w-px bg-gradient-to-b from-signal via-ember/40 to-transparent md:block" />
          <ol className="space-y-4">
            {journey.map((step, index) => (
              <Reveal key={step.year} delay={index * 0.06}>
                <motion.li
                  whileHover={{ x: 4 }}
                  className="group grid gap-3 rounded-[1.4rem] border border-line bg-panel p-5 card-shadow transition hover:border-signal/35 md:grid-cols-[7rem_minmax(0,1fr)] md:items-start md:gap-8 md:pl-14"
                >
                  <div className="relative">
                    <span className="absolute top-3 hidden h-3 w-3 rounded-full border border-signal bg-panel group-hover:bg-signal md:left-[-2.7rem] md:block" />
                    <p className="font-display text-3xl italic text-ember">
                      {step.year}
                    </p>
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-display text-xl text-foam sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist sm:text-base">
                      {step.detail}
                    </p>
                  </div>
                </motion.li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
