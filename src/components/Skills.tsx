import { motion, useReducedMotion } from "framer-motion"
import { skillGroups } from "../data/content"
import { Reveal, SectionHeading } from "./Reveal"

export function Skills() {
  const reduce = useReducedMotion()

  return (
    <section id="skills" className="scroll-mt-32 px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Capability"
            title="Skills"
            description="A working mix of life-science knowledge, analytical tools, collaboration, and the software used to keep work organised."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.05}
              className={index === 0 ? "md:col-span-2 xl:col-span-1" : undefined}
            >
              <article className="h-full rounded-[1.4rem] border border-line bg-panel p-6 card-shadow">
                <h3 className="font-display text-2xl text-foam">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item, itemIndex) => (
                    <motion.span
                      key={item}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.04 * itemIndex, duration: 0.35 }}
                      whileHover={reduce ? undefined : { y: -2 }}
                      className="rounded-full border border-line bg-ink px-3 py-1.5 text-sm text-mist transition hover:border-signal/50 hover:bg-panel hover:text-foam"
                    >
                      {item}
                    </motion.span>
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
